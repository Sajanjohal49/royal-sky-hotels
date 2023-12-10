import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import baseURL from "../../apiConfig";
import { useLoading } from "../utils/customHooks";
import { useQuery } from "react-query";
const fetchAllFacilities = async () => {
  const response = await axios.get(`${baseURL}/api/facility/fetch`);

  return response.data;
};
const GetAllFacilites = () => {
  const [facilities, setFacilities] = useState([]);
  console.log(facilities);
  const [isLoading, stopLoading, LoadingComponent] = useLoading();
  const { data: allFacilities } = useQuery(
    "allFacilities",
    fetchAllFacilities,
    {
      staleTime: 3600000,
    }
  );

  useEffect(() => {
    if (allFacilities) {
      setFacilities(allFacilities.facilities);
      stopLoading();
    }
  }, [fetchAllFacilities, stopLoading]);

  return (
    <>
      {facilities.length > 0 && (
        <div className="max-w-3xl sm:py-8 py-2 px-2 mx-auto sm:my-10 my-2 text-center dark:bg-orange-200 bg-teal-900 rounded-3xl  text-slate-100 dark:text-slate-900">
          <Link to="#" className="text-3xl sm:text-4xl  px-3  font-euclidBold ">
            Here are the Facilities For You!
          </Link>
          <LoadingComponent isLoading={isLoading}>
            <div className="grid grid-cols-2 gap-4 mt-4 sm:mx-7">
              {facilities.map((facility) => {
                const displayName =
                  facility.name.length > 18
                    ? `${facility.name.slice(0, 18)}...`
                    : facility.name;
                return (
                  <Link
                    key={facility.id}
                    to="#"
                    className="flex items-center hover:text-slate-200 sm:p-2 p-1.5 border-2 dark:border-gray-900 border-gray-300 rounded-full hover:bg-slate-800 hover:border-slate-800 ">
                    <svg
                      className="flex-shrink-0 w-5 h-5  sm:visible  hidden "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"></path>
                    </svg>
                    <span className="md:ml-2 text-sm font-bold  capitalize">
                      {displayName}
                    </span>
                  </Link>
                );
              })}
            </div>
          </LoadingComponent>
        </div>
      )}
    </>
  );
};

export default GetAllFacilites;
