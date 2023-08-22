import React from "react";
import { FaSpinner } from "react-icons/fa";

const SkeletonNavbar = () => {
  return (
    <div className="pb-5 dark:bg-gray-900 bg-defaultWhite h-screen overflow-hidden  ">
      <div className="flex items-center justify-between h-16 sm:h-20 relative">
        <div className=" relative flex items-center  px-4 py-2 mx-7  w-full sm:mx-20 ">
          <div className="flex items-center space-x-4 sm:ml-8  animate-pulse  ">
            <div className="px-10 py-4  rounded-sm bg-gray-500 "></div>
          </div>
          <div className="flex items-center space-x-8 animate-pulse absolute right-0   ">
            <div className="px-10 py-4 rounded-full bg-gray-500  sm:block hidden"></div>
            <div className="px-10 py-4 rounded-full bg-gray-500  hidden  sm:block"></div>
            <div className="sm:px-10  px-5 py-5 sm:py-4 rounded-full bg-gray-500 sm:w-20"></div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center h-screen">
        <FaSpinner className="animate-spin text-4xl text-gray-500" />
      </div>
    </div>
  );
};

export default SkeletonNavbar;
