import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import baseURL from "../../apiConfig";

import { useQuery } from "react-query";
import { useLoading } from "../utils/customHooks";

const fetchAllLocations = async () => {
  const response = await axios.get(`${baseURL}/api/location/fetch`);
  return response.data?.locations || [];
};

const GetAllLocations = () => {
  const [isLoading, stopLoading, LoadingComponent] = useLoading();
  const { data } = useQuery("allLocations", fetchAllLocations, {
    staleTime: Infinity, // Set staleTime to Infinity to prevent automatic refetching
  });

  const [fetchedLocations, setFetchedLocations] = useState([]);

  useEffect(() => {
    if (data && data.length > 0) {
      setFetchedLocations(data);
    }
    stopLoading();
  }, [data, stopLoading]);

  return (
    <div className="flex flex-wrap items-center justify-center py-4 md:py-4 ">
      <LoadingComponent isLoading={isLoading}>
        <Link
          to="/home/hotel/location/allHotels"
          className="text-gray-200  hover:text-emerald-700 hover:border-emerald-500 border dark:hover:bg-transparent dark:hover:text-orange-200 dark:hover:border-orange-200 border-teal-600 dark:border-orange-200 hover:bg-transparent bg-teal-900 focus:ring-4 focus:outline-none focus:ring-emerald-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3   dark:text-gray-900 dark:bg-orange-200  dark:focus:ring-orange-300">
          All Locations
        </Link>

        {fetchedLocations?.length > 0
          ? fetchedLocations?.map((location) => {
              return (
                <Link
                  key={location.id}
                  to={`/home/hotel/location/ ${location.id}/${location.city}`}
                  className="text-gray-900 hover:text-gray-200 border hover:bg-gray-900 dark:hover:bg-emerald-200 dark:hover:text-gray-900 border-gray-300  hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-emerald-300">
                  <span>{location.city}</span>
                </Link>
              );
            })
          : null}
      </LoadingComponent>
    </div>
  );
};

export default GetAllLocations;
