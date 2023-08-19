import React from "react";
import Grid from "./HotelsGrid";

const HotelManagerHome = () => {
  const hotelManager = JSON.parse(
    sessionStorage.getItem("active-hotelManager")
  );
  return (
    <div className="text-gray-900 dark:bg-gray-900 dark:text-gray-200 bg-defaultWhite font-euclidRegular">
      <div>
        <p className="py-12 text-4xl text-center capitalize font-euclidBold">
          Welcome to your hotel{" "}
          <span className="uppercase  text-defaultGreen dark:text-defaultWhite">
            {hotelManager.firstName}
          </span>
        </p>
      </div>
      <div>
        <Grid />
      </div>
    </div>
  );
};

export default HotelManagerHome;
