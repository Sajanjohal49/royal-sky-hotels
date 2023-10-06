import React, { createContext, useContext, useState } from "react";

const ImageContext = createContext();

export const useImage = () => {
  return useContext(ImageContext);
};

export const ImageProvider = ({ children }) => {
  const [imageUrl, setImageUrl] = useState(null); // Initialize with null

  const loadImage = (url) => {
    setImageUrl(url);
  };

  return (
    <ImageContext.Provider value={{ imageUrl, loadImage }}>
      {children}
    </ImageContext.Provider>
  );
};
