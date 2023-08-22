import React, { useState, useEffect } from "react";

import baseURL from "../../apiConfig";

function ImageWithUrl({ url, hotel }) {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  const filename = url.substring(url.lastIndexOf("/") + 1);

  useEffect(() => {
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
  }, [filename]);

  return (
    <div>
      {loading ? (
        <div className="sm:w-full h-72   bg-gray-200  rounded-xl animate-pulse"></div>
      ) : (
        <img
          src={imageUrl}
          alt={filename}
          className="object-cover w-full rounded-xl h-72"
        />
      )}
    </div>
  );
}

export default ImageWithUrl;
