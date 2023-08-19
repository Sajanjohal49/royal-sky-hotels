import React from "react";
import ImagesImplementor from "./ImagesImplementor";

const ImagesSection = ({ hotel }) => {
  return (
    <div>
      <div className="flex w-full h-[28rem]">
        <ImagesImplementor
          url={hotel.image3}
          className={"object-cover  rounded-tl-xl rounded-bl-xl  w-3/4"}
        />
        <div className="flex flex-col ml-2 ">
          <ImagesImplementor
            url={hotel.image2}
            className={"object-cover h-1/2 rounded-tr-xl pb-2 "}
          />
          <ImagesImplementor
            url={hotel.image1}
            className={"object-cover h-1/2 rounded-br-xl"}
          />
        </div>
      </div>
    </div>
  );
};

export default ImagesSection;
