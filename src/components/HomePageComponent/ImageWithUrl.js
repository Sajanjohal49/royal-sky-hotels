import React, { useEffect, useCallback, useState } from "react";
import baseURL from "../../apiConfig";
import { useQuery } from "react-query";

function ImageWithUrl({ url, setCurrentImageIndex, currentImageIndex }) {
  const filename = url.substring(url.lastIndexOf("/") + 1);

  const {
    data: imageUrl,
    isLoading,
    isError,
  } = useQuery(
    ["image", filename],
    async () => {
      const response = await fetch(`${baseURL}/api/hotel/images/${filename}`);
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const blob = await response.blob();
      return URL.createObjectURL(blob);
    },
    {
      enabled: !!filename,
      staleTime: 3600000, // Only fetch when filename is truthy (not null or undefined)
    }
  );

  const totalImages = 3;

  const changeImage = useCallback(
    (step) => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + step + totalImages) % totalImages
      );
    },
    [setCurrentImageIndex]
  );

  if (isError) {
    return <div>Error loading image</div>;
  }
  const shouldShowPrevButton = currentImageIndex !== 0;
  const shouldShowNextButton = currentImageIndex !== 2;

  return (
    <div>
      {isLoading ? (
        <div className="sm:w-full h-72 bg-gray-200 rounded-xl animate-pulse"></div>
      ) : (
        <div className="relative">
          {shouldShowPrevButton && (
            <button
              className="slider-button prev absolute w-8 h-8 top-1/2 transform -translate-y-1/2 left-2 bg-gray-800 text-white px-3 py-1 rounded-full opacity-75 hover:opacity-100"
              onClick={() => changeImage(-1)}>
              &lt;
            </button>
          )}

          <img
            src={imageUrl}
            alt={url} // Use the URL as the alt text
            className="object-cover w-full rounded-xl h-72"
          />
          {shouldShowNextButton && (
            <button
              className="slider-button next absolute w-8 h-8 top-1/2 transform -translate-y-1/2 right-2 bg-gray-800 text-white px-3 py-1 rounded-full opacity-75 hover:opacity-100"
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
