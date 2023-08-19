import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ImageWithUrl({ url, hotel }) {
  const [imageUrl, setImageUrl] = useState(null);

  const filename = url.substring(url.lastIndexOf("/") + 1);

  useEffect(() => {
    fetch(`http://localhost:8080/api/hotel/images/${filename}`)
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
      });
  }, [filename]);

  return (
    <div>
      <img
        src={imageUrl}
        alt={filename}
        className="object-cover w-full rounded-xl h-72"
      />
    </div>
  );
}

export default ImageWithUrl;
