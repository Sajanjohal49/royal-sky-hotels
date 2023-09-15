import axios from "axios";
import React, { useEffect, useState } from "react";

import BookingStatus from "./BookingStatus";
import baseURL from "../../../apiConfig";

const ViewAllBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const retrieveBookings = async () => {
      const bookingsData = await retrieveAllBookings();

      if (bookingsData.bookings.length > 0) {
        setBookings(bookingsData.bookings);
        setIsLoading(false);
      }
    };
    retrieveBookings();
  }, []);

  const retrieveAllBookings = async () => {
    const response = await axios.get(`${baseURL}/api/book/hotel/fetch/all`);
    console.log("Response:", response.data);
    return response.data;
  };

  const getBgColorByStatus = (status) => {
    const lowerCaseStatus = status.toLowerCase();
    if (lowerCaseStatus === "confirmed") {
      return " text-green-800 border-green-700 border-2 dark:text-green-500 dark:border-green-600"; // CSS class for confirmed status background color
    } else if (lowerCaseStatus === "pending") {
      return "text-blue-800 border-blue-700 border-2 dark:text-blue-500 dark:border-blue-600"; // CSS class for pending status background color
    } else if (lowerCaseStatus === "cancelled") {
      return "text-red-700 border-red-700 border-2 dark:text-red-500 dark:border-red-600"; // CSS class for canceled status background color
    }
  };

  return (
    <div className="w-full bg-defaultWhite dark:bg-gray-900 ">
      <div className=" pb-20  text-red">
        <h2 className="sm:py-6 py-2 text-4xl font-bold text-center text-defaultGreen dark:text-orange-200 ">
          All Bookings
        </h2>

        {isLoading ? (
          <p className="text-2xl text-center"> Please wait!</p>
        ) : (
          <>
            {bookings.length > 0 && (
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-emerald-200">
                  <thead className="text-xs uppercase bg-defaultGreen text-defaultWhite dark:bg-emerald-200 dark:text-gray-900">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Customer Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        user Id
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Booking ID
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Check In
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Check Out
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Customer Contact
                      </th>
                      <th scope="col" className="px-6 py-3">
                        hotel Id
                      </th>
                      <th scope="col" className="px-6 py-3">
                        hotel Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        hotel Contact
                      </th>
                      <th scope="col" className="px-6 py-3">
                        hotel EMail
                      </th>
                      <th scope="col" className="px-6 py-3">
                        status
                      </th>
                      <th scope="col" className="px-6 py-3">
                        total day
                      </th>
                      <th scope="col" className="px-6 py-3">
                        total room
                      </th>
                      <th scope="col" className="px-6 py-3">
                        total amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings?.map((item) => {
                      return (
                        <tr
                          key={item?.id}
                          className={` text-gray-800     dark:text-gray-300 border-b  dark:border-gray-700`}>
                          <th
                            scope="row"
                            className="px-6 py-2
          font-medium whitespace-nowrap ">
                            {item?.customerName}
                          </th>
                          <td className="px-6 py-2 ">{item?.userId}</td>
                          <td className="px-6 py-2">{item?.bookingId}</td>
                          <td className="px-6 py-2">{item?.checkIn}</td>
                          <td className="px-6 py-2">{item?.checkOut}</td>
                          <td className="px-6 py-2">{item?.customerContact}</td>
                          <td className="px-6 py-2">{item?.hotelId}</td>
                          <td className="px-6 py-2">{item?.hotelName}</td>
                          <td className="px-6 py-2"> {item?.hotelContact}</td>
                          <td className="px-6 py-2">{item?.hotelEmail}</td>
                          <td className="px-6 py-2">
                            <div
                              className={`flex px-2 py-2 border rounded-lg w-fit   y-2 ${getBgColorByStatus(
                                item?.status
                              )} `}>
                              <BookingStatus status={item?.status} />
                              {item?.status}
                            </div>
                          </td>
                          <td className="px-6 py-2">{item?.totalDay}</td>
                          <td className="px-6 py-2">{item?.totalRoom}</td>
                          <td className="px-6 py-2">{item?.totalAmount}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ViewAllBookings;
