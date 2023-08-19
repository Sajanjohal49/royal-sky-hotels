import React from "react";

const AnimationCard = ({ cardImage }) => {
  return (
    <div className="w-full">
      <div className="flex items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div className=" w-[220px] h-[160px] object-cover">
          <img
            src={cardImage}
            alt=""
            style={{
              objectFit: "cover",
              width: "200px",
              height: "100%",
            }}
            className="rounded-l-lg "
          />
        </div>

        <div className="flex flex-col leading-normal w-96">
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            "During my recent business trip to Bandon, I had the pleasure of
            staying at a Sky hill hotel."
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-400">
            Brandon from XYZ location
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnimationCard;
