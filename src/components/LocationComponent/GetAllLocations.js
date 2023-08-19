import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import baseURL from "../../apiConfig";

const GetAllLocations = () => {
  const [locations, setLocations] = useState([]);
  const retrieveAllLocations = async () => {
    const response = await axios.get(`${baseURL}/api/location/fetch`);
    return response.data;
  };
  console.log(baseURL);
  useEffect(() => {
    const getAllLocations = async () => {
      const allLocations = await retrieveAllLocations();
      if (allLocations) {
        setLocations(allLocations.locations);
      }
    };
    getAllLocations();
  }, []);
  return (
    <div className="flex flex-wrap items-center justify-center py-4 md:py-8 ">
      <Link
        to="/home/hotel/location/allHotels"
        className="text-gray-200  hover:text-emerald-700 hover:border-emerald-500 border dark:hover:bg-transparent dark:hover:text-orange-200 dark:hover:border-orange-200 border-teal-600 dark:border-orange-200 hover:bg-transparent bg-teal-900 focus:ring-4 focus:outline-none focus:ring-emerald-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3   dark:text-gray-900 dark:bg-orange-200  dark:focus:ring-orange-300">
        All Locations
      </Link>
      {locations.map((location) => {
        return (
          <Link
            key={location.id}
            to={`/home/hotel/location/ ${location.id}/${location.city}`}
            className="text-gray-900 hover:text-gray-200 border hover:bg-gray-900 dark:hover:bg-emerald-200 dark:hover:text-gray-900 border-gray-300  hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-emerald-300">
            <span>{location.city}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default GetAllLocations;
