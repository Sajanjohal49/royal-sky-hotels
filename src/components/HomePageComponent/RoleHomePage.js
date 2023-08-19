import React from "react";
import HomePage from "./HomePage";
import HotelManagerHome from "./HotelManagerHome";

const RoleHomePage = () => {
  const hotelManager = JSON.parse(
    sessionStorage.getItem("active-hotelManager")
  );
  if (hotelManager != null) {
    return <HotelManagerHome />;
  } else {
    return <HomePage />;
  }
};

export default RoleHomePage;
