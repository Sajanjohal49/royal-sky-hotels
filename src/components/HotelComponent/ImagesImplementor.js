import React, { useState, useEffect } from "react";
import baseURL from "../../apiConfig";
import { useQuery } from "react-query";

function ImagesImplementor({ url, className }) {
  const filename = url.substring(url.lastIndexOf("/") + 1);

  const { data: imageUrl } = useQuery(
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
      staleTime: Infinity, // Only fetch when filename is truthy (not null or undefined)
    }
  );

  return <img src={imageUrl} alt={url} className={className} />;
}

export default ImagesImplementor;
