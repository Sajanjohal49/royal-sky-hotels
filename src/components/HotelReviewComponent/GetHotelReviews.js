import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsFillStarFill } from "react-icons/bs";
import baseURL from "../../apiConfig";

const GetHotelReviews = (hotel) => {
  const { hotelId } = useParams();
  const [hotelReviews, setHotelReviews] = useState([]);
  useEffect(() => {
    const getHotelReviews = async () => {
      const allReviews = await retrieveHotelReviews();
      if (allReviews) {
        setHotelReviews(allReviews.hotelReviews);
      }
    };
    getHotelReviews();
  }, [hotelId]);

  const retrieveHotelReviews = async () => {
    const response = await axios.get(
      `${baseURL}/api/hotel/review/fetch?hotelId=` + hotelId
    );
    return response.data;
  };
  return (
    <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
      {hotelReviews.map((review) => {
        return (
          <ul className="">
            <li
              key={review.id}
              className="px-4 py-2 my-2 border border-gray-400 dark:text-slate-200 rounded-xl w-fit">
              <div className="flex gap-3">
                {" "}
                <p className="text-sm underline ">{review.user}</p>{" "}
                <div className="flex items-center">
                  <BsFillStarFill className="mr-1" />
                  <p className="font-bold ">
                    {review.star}
                    <span className="font-normal">/5</span>
                  </p>
                </div>
              </div>

              <p className="font-extrabold">{review.review}</p>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default GetHotelReviews;
