import React, { useState, useEffect, useCallback } from "react";

import baseURL from "../../apiConfig";

function ImageWithUrl({
  url,

  setCurrentImageIndex,
  currentImageIndex,
}) {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  const filename = url.substring(url.lastIndexOf("/") + 1);

  const fetchImage = (filename) => {
    setLoading(true);
    fetch(`${baseURL}/api/hotel/images/${filename}`)
      .then((response) => {
        if (response.ok) {
          return response.blob();
        }
        throw new Error("Network response was not ok.");
      })
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        setImageUrl(url);
      })
      .catch((error) => {
        console.error("Error fetching image:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchImage(filename);
  }, [filename]);

  const totalImages = 3;

  const changeImage = useCallback(
    (step) => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + step + totalImages) % totalImages
      );
    },
    [setCurrentImageIndex]
  );
  useEffect(() => {
    const randomInterval =
      Math.floor(Math.random() * (35000 - 25000 + 1)) + 25000;
    const interval = setInterval(() => {
      changeImage(1); // Automatically move to the next image
    }, randomInterval);

    return () => {
      clearInterval(interval);
    };
  }, [changeImage]);
  const shouldShowPrevButton = currentImageIndex !== 0;
  const shouldShowNextButton = currentImageIndex !== 2;
  return (
    <div>
      {loading ? (
        <div className="sm:w-full h-72   bg-gray-200  rounded-xl animate-pulse"></div>
      ) : (
        <div className=" relative">
          {shouldShowPrevButton && (
            <button
              className="slider-button prev absolute top-1/2 transform -translate-y-1/2 left-2 bg-gray-800 text-white px-3 py-1 rounded-full opacity-75 hover:opacity-100"
              onClick={() => changeImage(-1)}>
              &lt;
            </button>
          )}

          <img
            src={imageUrl}
            alt={filename}
            className="object-cover w-full rounded-xl h-72"
          />
          {shouldShowNextButton && (
            <button
              className="slider-button next absolute top-1/2 transform -translate-y-1/2 right-2 bg-gray-800 text-white px-3 py-1 rounded-full opacity-75 hover:opacity-100"
              onClick={() => changeImage(1)}>
              &gt;
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default ImageWithUrl;
