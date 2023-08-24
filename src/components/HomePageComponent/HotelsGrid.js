import React, { useEffect, useState } from "react";
import Card from "./Card";

import axios from "axios";
import { useParams } from "react-router-dom";
import baseURL from "../../apiConfig";
import { useLoading } from "../utils/customHooks";

function HotelsGrid() {
  const [hotels, setHotels] = useState([]);
  const [isLoading, stopLoading, LoadingComponent] = useLoading();
  const { locationId } = useParams();
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
    stopLoading();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locationId]);

  return (
    <div className="px-2 sm:px-10   ">
      <LoadingComponent isLoading={isLoading}>
        <div className="grid items-center justify-center grid-cols-1   gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:px-10">
          {hotels.map((hotel, index) => {
            return <Card key={hotel.id} item={hotel} index={index} />;
          })}
        </div>
      </LoadingComponent>
    </div>
  );
}

export default HotelsGrid;
