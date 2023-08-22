import React from "react";
import Slider from "./Slider";
import GalleryImages from "./GalleryImages";

const GallleryPage = () => {
  return (
    <div className="pt-5 pb-16 lg:pt-12 lg:pb-28 bg-[#F3F0EA] dark:bg-slate-900 ">
      <Slider />
      <GalleryImages />
    </div>
  );
};

export default GallleryPage;
