import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SlPin } from "react-icons/sl";
import baseURL from "../../apiConfig";

const GetHotelFacilities = ({ hotel }) => {
  const { hotelId } = useParams();
  const [facilities, setFacilities] = useState([]);
  console.log(facilities);
  useEffect(() => {
    const getFacilitiesByHotelId = async () => {
      const hotelFacilities = await retrieveFacilitiesByHotelId();
      if (hotelFacilities) {
        setFacilities(hotelFacilities.facilities);
      }
    };
    getFacilitiesByHotelId();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hotelId]);
  const retrieveFacilitiesByHotelId = async () => {
    const response = await axios.get(
      `${baseURL}/api/facility/hotel?hotelId=` + hotelId
    );
    return response.data;
  };

  return (
    <div>
      <ul>
        {facilities.map((facility) => {
          console.log("These Are the facilities of hotel " + facility.id);
          return (
            <li
              key={facility.id}
              className="flex px-4 py-2 border border-gray-400 dark:text-slate-200 rounded-xl w-fit">
              <SlPin className="mr-2 text-lg text-center dark:text-slate-100 " />
              <div className="items-center ">
                <p className="text-xl font-bold capitalize ">{facility.name}</p>
                <p className="text-sm"> {facility.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default GetHotelFacilities;
