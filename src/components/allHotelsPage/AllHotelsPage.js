import React from "react";
import Grid from "../homePage/Grid";

const AllHotelsPage = () => {
  return (
    <div className="pt-10 pb-16 dark:bg-gray-900">
      <div className="px-2 py-6 text-center lg:px-0">
        <p className="text-4xl font-extrabold lg:text-5xl dark:text-slate-200 ">
          <span className="px-2 text-gray-200 rounded-md bg-emerald-600 ">
            {" "}
            Discover
          </span>{" "}
          the Best Hotels for Your Next Stay
        </p>
      </div>
      <Grid />
    </div>
  );
};

export default AllHotelsPage;
