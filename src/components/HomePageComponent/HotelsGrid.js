import React, { useEffect, useState } from "react";
import Card from "./Card";

import axios from "axios";
import { useParams } from "react-router-dom";
import baseURL from "../../apiConfig";
import { useLoading } from "../utils/customHooks";
import { useQuery } from "react-query";
const fetchAllHotels = async () => {
  const response = await axios.get(`${baseURL}/api/hotel/fetch`);
  return response?.data || [];
};
const fetchHotelsByLocation = async (locationId) => {
  if (locationId) {
    const response = await axios.get(
      `${baseURL}/api/hotel/location?locationId=` + locationId
    );
    return response?.data || [];
  }
};

function HotelsGrid() {
  const [hotels, setHotels] = useState([]);
  const [isLoading, stopLoading, LoadingComponent] = useLoading();
  const { locationId } = useParams();

  // Use React Query to fetch hotels and cache the results
  const { data: allHotels } = useQuery("allHotels", fetchAllHotels, {
    staleTime: 3600000,
  });

  const { data: locationBasedHotels } = useQuery(
    ["hotelsByLocation", locationId],
    () => fetchHotelsByLocation(locationId),

    {
      enabled: !!locationId, // Only enable when locationId is available
    }
  );

  // Use the cached data when available
  useEffect(() => {
    if (locationId == null) {
      if (allHotels) {
        setHotels(allHotels?.hotels);
        stopLoading();
      }
    } else {
      if (locationBasedHotels) {
        setHotels(locationBasedHotels?.hotels);
        stopLoading();
      }
    }
  }, [locationId, allHotels, locationBasedHotels, stopLoading]);

  return (
    <div className="px-2 sm:px-10   ">
      <LoadingComponent isLoading={isLoading}>
        {hotels.length === 0 ? (
          <div className=""></div>
        ) : (
          <div className="grid items-center justify-center grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:px-10">
            {hotels.map((hotel, index) => {
              return <Card key={hotel.id} item={hotel} index={index} />;
            })}
          </div>
        )}
      </LoadingComponent>
    </div>
  );
}

export default HotelsGrid;
