import React from "react";

const AboutSection = ({ hotel }) => {
  return (
    <div className="" key={hotel.id}>
      <div className="w-full h-0.5 bg-gray-300 my-5"></div>
      <p className="mb-1 text-xl font-bold">Description</p>
      <p className="text-sm font-semibold ">{hotel.description}</p>
      <div className="w-full h-0.5 bg-gray-300 my-5"></div>
    </div>
  );
};

export default AboutSection;
