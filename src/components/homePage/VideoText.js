import React from "react";

import "./homePage.scss";
import Icon from "../svg/Earth Planet.svg";

function VideoText(props) {
  return (
    <div className="">
      <div className="absolute top-[5%]  md:left-16 sm:top-[15%]  lg:left-24 left-8  ">
        <p className="text-2xl font-light leading-loose tracking-wide text-black sm:text-3xl lg:text-5xl lg:py-5">
          Enjoy Your
        </p>
        <h1 className="text-4xl font-bold tracking-wide text-stone-950 sm:pt-2 lg:pt-0 lg:text-6xl">
          Dream <span className="font-semibold ">Vacation</span>
        </h1>
        <div className="text-sm font-medium leading-7 md:text-lg pt-7 md:pt-8">
          <p>Relax in style and immerse yourself in luxury and comfort </p>
          <p>
            {" "}
            at our exquisite hotel, where every detail has been designed
          </p>{" "}
          <p>with your relaxation in mind.</p>
        </div>
        <div className="pt-16 ">
          <p className="flex items-center font-medium border-orange-300 border-solid text-slate-100 max-w-fit rounded-xl">
            <img className="w-12 h-12 mr-2 " src={Icon} alt="VIP" /> World's
            Best Hotels and Resorts
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoText;
