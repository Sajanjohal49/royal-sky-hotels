import React from "react";
import "./homePage.scss";
import AnimationCard from "./AnimationCard";

import image1 from "../images/ciudad-maderas-MXbM1NrRqtI-unsplash.jpg";

import image2 from "../images/apartment-1822409_1920.jpg";

import image3 from "../images/apartment-2558277_1920.jpg";

import image4 from "../images/bed-1834327_1920.jpg";

import image5 from "../images/bedroom-gc90a1b79f_1920.jpg";

import image6 from "../images/hotel-1979406_1920.jpg";

import image7 from "../images/room-4768551_1920.jpg";

import image8 from "../images/wall-416060_1280.jpg";

import image9 from "../images/wall-panel-416041_1280.jpg";

import image10 from "../images/lifestyle-g796bdb6ff_1920.jpg";

const AnimationGallery = () => {
  return (
    <div className="py-20 ">
      <div className="overflow-hidden w-[7000px] image-container ">
        <div className="flex items-center gap-6 fullLine ">
          <AnimationCard cardImage={image1} />
          <AnimationCard cardImage={image2} />{" "}
          <AnimationCard cardImage={image3} />{" "}
          <AnimationCard cardImage={image4} />{" "}
          <AnimationCard cardImage={image5} />{" "}
          <AnimationCard cardImage={image6} />
          <AnimationCard cardImage={image7} />
          <AnimationCard cardImage={image8} />
          <AnimationCard cardImage={image9} />
          <AnimationCard cardImage={image10} />
        </div>
      </div>
      <div className="overflow-hidden w-[7000px] image-container2 py-5">
        <div className="flex items-center gap-6 fullLine ">
          {" "}
          <AnimationCard cardImage={image10} />
          <AnimationCard cardImage={image9} />
          <AnimationCard cardImage={image8} />
          <AnimationCard cardImage={image7} />
          <AnimationCard cardImage={image6} />
          <AnimationCard cardImage={image5} />
          <AnimationCard cardImage={image4} />{" "}
          <AnimationCard cardImage={image3} />{" "}
          <AnimationCard cardImage={image2} />{" "}
          <AnimationCard cardImage={image1} />{" "}
        </div>
      </div>
      <div className="overflow-hidden w-[7000px] image-container3 ">
        <div className="flex items-center gap-6 fullLine ">
          <AnimationCard cardImage={image8} />
          <AnimationCard cardImage={image9} />
          <AnimationCard cardImage={image10} />
          <AnimationCard cardImage={image4} />{" "}
          <AnimationCard cardImage={image5} />{" "}
          <AnimationCard cardImage={image6} />
          <AnimationCard cardImage={image7} />
          <AnimationCard cardImage={image1} />
          <AnimationCard cardImage={image2} />{" "}
          <AnimationCard cardImage={image3} />{" "}
        </div>
      </div>
    </div>
  );
};

export default AnimationGallery;
