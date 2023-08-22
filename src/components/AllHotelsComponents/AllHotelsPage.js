import React from "react";
import HotelsGrid from "../HomePageComponent/HotelsGrid";

const AllHotelsPage = () => {
  return (
    <div className="pt-10 pb-16 bg-[#F3F0EA] dark:bg-gray-900  ">
      <div className="px-2 py-6 text-center lg:px-0">
        <p className="text-3xl font-extrabold lg:text-5xl dark:text-slate-200 ">
          <span className="px-2 text-gray-900 rounded-md dark:bg-orange-200 bg-emerald-200">
            {" "}
            Discover
          </span>{" "}
          the Best Hotels for Your Next Stay.
        </p>
      </div>

      <HotelsGrid />
    </div>
  );
};

export default AllHotelsPage;
