import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";
import BookingStatus from "../AdminDashboard/ViewAllBookings/BookingStatus";
import { useNavigate } from "react-router-dom";

const CustomerAllBookings = () => {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const customer = JSON.parse(sessionStorage.getItem("active-customer"));
  useEffect(() => {
    if (!customer) {
      navigate("/");
    }
  }, [navigate, customer]);
  const retrieveAllBookings = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/book/hotel/fetch?userId=" + customer.id
    );
    return response.data;
  };
  useEffect(() => {
    const getAllBookings = async () => {
      const allbookings = await retrieveAllBookings();
      if (allbookings) {
        setBookings(allbookings.bookings);
        setIsLoading(false);
      }
      console.log(allbookings.bookings);
    };
    getAllBookings();
  }, []);

  console.log("Bookings:", bookings);
  const getBgColorByStatus = (status) => {
    const lowerCaseStatus = status.toLowerCase();
    if (lowerCaseStatus === "confirmed") {
      return "bg-green-900/70 dark:bg-green-100/80"; // CSS class for confirmed status background color
    } else if (lowerCaseStatus === "pending") {
      return "bg-yellow-900/70 dark:bg-yellow-100/80"; // CSS class for pending status background color
    } else if (lowerCaseStatus === "cancelled") {
      return "bg-red-900/70 dark:bg-red-300"; // CSS class for canceled status background color
    } else {
      return "bg-red-900/70 dark:bg-red-700";
    }
  };

  return (
    <div className="w-full bg-defaultWhite dark:bg-gray-900">
      <div className="pt-10 pb-20">
        {isLoading ? (
          <p className="text-2xl"> Please wait!</p>
        ) : (
          <div className="">
            <h2 className="py-5 text-4xl font-bold text-center text-defaultGreen dark:text-orange-200 ">
              Welcome {customer.firstName}
            </h2>
            <h2 className="pb-12 text-2xl text-center text-defaultGreen dark:text-orange-200">
              Your Personalized Hotel Bookings.
            </h2>
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-emerald-200">
                <thead className="text-xs uppercase bg-defaultGreen text-defaultWhite dark:bg-emerald-200 dark:text-gray-900">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      hotel Name
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
                  {bookings.map((item) => {
                    return (
                      <tr
                        key={item.id}
                        className={`    dark:text-gray-900 text-gray-200 border-b ${getBgColorByStatus(
                          item.status
                        )} dark:border-gray-700`}>
                        <td className="px-6 py-4">{item.hotelName}</td>
                        <td className="px-6 py-4">{item.bookingId}</td>
                        <td className="px-6 py-4">{item.checkIn}</td>
                        <td className="px-6 py-4">{item.checkOut}</td>

                        <td className="px-6 py-4"> {item.hotelContact}</td>
                        <td className="px-6 py-4">{item.hotelEmail}</td>
                        <td className="px-6 py-4">
                          <div className="flex px-2 py-2 border rounded-lg w-fit p y-2 dark:border-emerald-300 dark:bg-emerald-100/60 ">
                            <BookingStatus status={item.status} />
                            {item.status}
                          </div>
                        </td>
                        <td className="px-6 py-4">{item.totalDay}</td>
                        <td className="px-6 py-4">{item.totalRoom}</td>
                        <td className="px-6 py-4">{item.totalAmount}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerAllBookings;
