import React from "react";
import { IoIosBed } from "react-icons/io";

const AvailabilitySection = ({ hotel }) => {
  return (
    <div className="my-5" key={hotel.id}>
      <p className="my-3 text-xl font-bold ">Availability</p>
      <div className="flex items-center px-4 py-2 text-sm border border-gray-300 dark:border-gray-100 w-fit rounded-xl ">
        <IoIosBed className="mr-3 text-lg" />
        <p className="font-semibold ">
          Total Rooms:
          <span className="ml-2 font-bold ">{hotel.totalRoom}</span>{" "}
        </p>
      </div>
      <div className="w-full h-0.5 bg-gray-300/80 my-2 sm:my-5"></div>
    </div>
  );
};

export default AvailabilitySection;
