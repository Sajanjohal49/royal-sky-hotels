import React from "react";
import { Link } from "react-router-dom";

const LocationBasedNavigator = (location) => {
  console.log(location);
  return (
    <Link
      to={`/home/hotel/location/${location.item.id}/${location.item.city}`}
      style={{
        textDecoration: "none",
      }}
      className="text-color">
      <b>
        {" "}
        <i>{location.item.city}</i>
      </b>
    </Link>
  );
};

export default LocationBasedNavigator;
