import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import baseURL from "../../apiConfig";

const GetAllFacilites = () => {
  const [facilities, setFacilities] = useState([]);
  const retrieveAllFacilities = async () => {
    const response = await axios.get(`${baseURL}/api/facility/fetch`);
    return response.data;
  };
  useEffect(() => {
    const getAllFacilities = async () => {
      const allFacilities = await retrieveAllFacilities();
      if (allFacilities) {
        setFacilities(allFacilities.facilities);
      }
    };
    getAllFacilities();
  }, []);

  return (
    // bg-gradient-to-r from-violet-200 to-pink-200
    <div className="max-w-3xl py-8 mx-auto my-10 text-center dark:bg-orange-200 bg-emerald-200 rounded-3xl bg-emerald-200:bg-gradient-to-r text-slate-100">
      <Link to="#" className="text-4xl text-gray-800 font-euclidBold ">
        All Facilities For You!
      </Link>

      <div className="grid grid-cols-2 gap-4 mt-4 mx-7">
        {facilities.map((facility) => {
          return (
            <Link
              key={facility.id}
              to="#"
              className="flex items-center p-2 border-2 border-gray-900 rounded-full hover:border-white ">
              <svg
                className="flex-shrink-0 w-5 h-5 text-gray-900 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"></path>
              </svg>
              <span className="ml-2 text-sm font-bold text-gray-900 capitalize">
                {facility.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default GetAllFacilites;
