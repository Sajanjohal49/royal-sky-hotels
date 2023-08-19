import React, { useEffect, useState } from "react";
import Card from "./Card";

import image1 from "../images/ciudad-maderas-MXbM1NrRqtI-unsplash.jpg";
import axios from "axios";
import { useParams } from "react-router-dom";
import GetAllLocations from "../LocationComponent/GetAllLocations";
import baseURL from "../../apiConfig";

function HotelsGrid() {
  const [hotels, setHotels] = useState([]);
  const { locationId } = useParams();
  useEffect(() => {
    const getAllHotels = async () => {
      const recieveAllHotels = await retrieveHotels();
      if (recieveAllHotels) {
        setHotels(recieveAllHotels.hotels);
      }
    };
    const getHotelsByLocation = async () => {
      const locationBasedHotels = await retrieveHotelsByLocation();
      if (locationBasedHotels) {
        setHotels(locationBasedHotels.hotels);
      }
    };
    if (locationId == null) {
      console.log("location id is null means we gonna fetch hotels");
      getAllHotels();
    } else {
      console.log(locationId);
      getHotelsByLocation();
    }
  }, [locationId]);

  const retrieveHotels = async () => {
    const response = await axios.get(`${baseURL}/api/hotel/fetch`);
    return response.data;
  };
  const retrieveHotelsByLocation = async () => {
    const response = await axios.get(
      `${baseURL}/api/hotel/location?locationId=` + locationId
    );
    return response.data;
  };
  // In your JavaScript file
  console.log(process.env.REACT_APP_BASE_URL); // This should log the URL

  // Rest of your code...

  return (
    <div className="px-2 sm:px-10">
      <div className="grid items-center justify-center grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:px-10">
        {hotels.map((hotel) => {
          return <Card key={hotel.id} item={hotel} />;
        })}
      </div>
    </div>
  );
}

export default HotelsGrid;
