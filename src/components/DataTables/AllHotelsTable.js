import React, { useEffect, useState } from "react";
import baseURL from "../../apiConfig";
import axios from "axios";

const AllHotelsTable = () => {
  const [hotels, setHotels] = useState([]);
  const fetchHotels = async () => {
    const response = await axios.get(`${baseURL}/api/hotel/fetch`);
    return response?.data;
  };
  useEffect(() => {
    const fetchData = async () => {
      const fetchedHotels = await fetchHotels();
      setHotels(fetchedHotels.hotels);
    };
    fetchData();
  }, []);
  return (
    <div className="my-2 sm:my-8">
      {" "}
      {hotels.length > 0 ? (
        <div className="relative overflow-x-auto">
          <p className="text-xl  sm:my-6 my-2 text-center sm:text-3xl text-defaultGreen font-euclidSemibold dark:text-orange-200">
            All Hotels
          </p>
          <table className="w-full text-sm text-left text-gray-500 dark:text-emerald-200">
            <thead className="text-xs uppercase bg-defaultGreen text-defaultWhite dark:bg-emerald-200 dark:text-gray-900">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Hotel Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>
                <th scope="col" className="px-6 py-3">
                  Total Rooms
                </th>
                <th scope="col" className="px-6 py-3">
                  Price/Day
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  street
                </th>
                <th scope="col" className="px-6 py-3">
                  City
                </th>
                <th scope="col" className="px-6 py-3">
                  Postal Code
                </th>
              </tr>
            </thead>
            <tbody>
              {hotels.map((item) => {
                return (
                  <tr
                    key={item.id}
                    className={`    dark:text-gray-200 text-gray-900 border-b 
              dark:border-gray-700`}>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium whitespace-nowrap ">
                      {item?.name}
                    </th>

                    <td className="px-6 py-4">{item?.description}</td>
                    <td className="px-6 py-4">{item?.totalRoom}</td>
                    <td className="px-6 py-4">{item?.pricePerDay}</td>
                    <td className="px-6 py-4">{item?.emailId}</td>
                    <td className="px-6 py-4">{item?.street}</td>
                    <td className="px-6 py-4">{item?.location?.city}</td>
                    <td className="px-6 py-4">
                      {item?.postalCode == null ? <>N/A</> : item?.postalCode}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-xl  sm:my-6 my-2 text-center sm:text-3xl text-defaultGreen font-euclidSemibold dark:text-orange-200">
          No Hotel Available
        </p>
      )}
    </div>
  );
};

export default AllHotelsTable;
