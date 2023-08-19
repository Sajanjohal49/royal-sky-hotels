import React, { useState, useEffect } from "react";
import baseURL from "../../apiConfig";

function ImagesImplementor({ url, className }) {
  const [imageUrl, setImageUrl] = useState(null);
  console.log(url);
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
      });
  }, [filename]);
  console.log(imageUrl);

  return <img src={imageUrl} alt={filename} className={className} />;
}

export default ImagesImplementor;
