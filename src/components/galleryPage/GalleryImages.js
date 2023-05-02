import React from "react";
import image1 from "../images/galleryImages/massage-2350548_1920.jpg";

import image2 from "../images/galleryImages/people-2593251_1920.jpg";
import image3 from "../images/galleryImages/lobby-398845_1920.jpg";
import image4 from "../images/galleryImages/hotel-601327_1920.jpg";
import image5 from "../images/galleryImages/woman-6803845_1920.jpg";

import image6 from "../images/galleryImages/furniture-998265_1920.jpg";
import image7 from "../images/galleryImages/resort-906102_1920.jpg";

import image8 from "../images/galleryImages/bed-6830011_1920.jpg";

import image9 from "../images/galleryImages/drink-4288602_1920.jpg";
import image10 from "../images/galleryImages/food-6697955_1920.jpg";
import image12 from "../images/galleryImages/food-6702857_1920.jpg";
import image11 from "../images/galleryImages/table-3276193_1280.jpg";

const GalleryImages = () => {
  return (
    <div>
      <div className="py-8 text-center ">
        {/* bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% */}
        <p className="text-4xl font-extrabold text-gray-700 dark:text-gray-300 lg:text-5xl ">
          Experience Luxury at Its Finest
        </p>
        <p className="py-4 text-gray-500 lg:px-20 dark:text-gray-400">
          Escape to our stunning hotels and resorts, each one offering a unique
          blend of relaxation, adventure, and world-class hospitality
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 px-3 lg:px-16 md:grid-cols-4">
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src={image2} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={image3} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={image1} alt="" />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src={image5} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={image4} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={image6} alt="" />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src={image7} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={image8} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={image9} alt="" />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={image10}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={image11}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={image12}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryImages;
