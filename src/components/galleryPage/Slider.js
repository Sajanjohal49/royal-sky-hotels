import React, { useState } from "react";
import right from "../svg/Forward Button.svg";

import left from "../svg/Go Back.svg";
import image1 from "../images/sliderImages/pool-4346302_1920.jpg";

import image2 from "../images/sliderImages/break-649351_1920.jpg";

import image3 from "../images/sliderImages/bride-301813_1920.jpg";

import image4 from "../images/sliderImages/cabo-1676273_1920.jpg";

import image5 from "../images/sliderImages/flowers-1854075_1920.jpg";

import image6 from "../images/sliderImages/hotel-room-1447201_1920.jpg";

import image7 from "../images/sliderImages/indoors-4234071_1920.jpg";

import image8 from "../images/sliderImages/round-window-4272049_1920.jpg";

import image9 from "../images/sliderImages/woman-4507943_1920.jpg";

function Slider() {
  const slides = [
    {
      url: image1,
    },
    {
      url: image2,
    },
    {
      url: image3,
    },
    {
      url: image4,
    },
    {
      url: image5,
    },
    {
      url: image6,
    },
    {
      url: image7,
    },
    {
      url: image8,
    },
    {
      url: image9,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="">
      <div className="text-center ">
        <p className="px-3 text-4xl font-extrabold text-center text-gray-700 dark:text-gray-300 lg:text-5xl">
          Discover Our
          <span className="px-2 text-4xl text-transparent lg:text-5xl bg-clip-text bg-gradient-to-r from-indigo-500 to-emerald-400">
            Luxury
          </span>{" "}
          Hotel Collection
        </p>
        <p className="px-2 pt-3 text-gray-500">
          Indulge in our collection of luxurious hotels and resorts, where every
          detail has been carefully crafted to provide the ultimate in comfort
          and sophistication.
        </p>
      </div>
      <div className="max-w-[1400px] h-[650px] w-full mx-auto pb-16 px-4 relative group my-4">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full duration-500 bg-center bg-cover rounded-2xl"></div>
        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[47%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full ml-4 p-1 bg-gradient-to-r from-indigo-400 to-emerald-400  text-white cursor-pointer">
          <img src={left} className="w-10 h-10 " onClick={prevSlide} alt="" />
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[47%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full mr-4 p-1 bg-gradient-to-r from-indigo-400 to-emerald-400  text-white cursor-pointer">
          <img src={right} className="w-10 h-10 " onClick={nextSlide} alt="" />
        </div>
        <div className="flex justify-center py-2 top-4">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="mt-6 cursor-pointer ">
              <div className="w-3 h-3 mx-3 rounded-full bg-emerald-500 "></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;
