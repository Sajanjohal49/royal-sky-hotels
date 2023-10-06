import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";
import BookingStatus from "../AdminDashboard/ViewAllBookings/BookingStatus";
import { Link, useNavigate } from "react-router-dom";
import baseURL from "../../apiConfig";
import { useQuery } from "react-query";

const fetchAllBookings = async (hotelManager) => {
  if (hotelManager != null) {
    const response = await axios.get(
      `${baseURL}/api/book/hotel/fetch/bookings?hotelId=` + hotelManager.hotelId
    );
    return response.data;
  }
};

const HotelManagerDashboard = () => {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const hotelManager = JSON.parse(
    sessionStorage.getItem("active-hotelManager")
  );
  const { data: allBookings } = useQuery(["allBookings", hotelManager], () =>
    fetchAllBookings(hotelManager)
  );

  useEffect(() => {
    if (!hotelManager) {
      navigate("/");
    }
  }, [navigate, hotelManager]);

  useEffect(() => {
    if (allBookings) {
      setBookings(allBookings.bookings);
      setIsLoading(false);
    }
  }, [allBookings]);

  const getBgColorByStatus = (status) => {
    const lowerCaseStatus = status.toLowerCase();
    if (lowerCaseStatus === "confirmed") {
      return "bg-green-900/70 dark:bg-green-100/80"; // CSS class for confirmed status background color
    } else if (lowerCaseStatus === "pending") {
      return "bg-yellow-900/70 dark:bg-yellow-100/80";
    } else if (lowerCaseStatus === "cancelled") {
      return "bg-red-900/70 dark:bg-red-200";
    }
  };
  const handleConfirmDelete = async (id) => {
    try {
      await axios.delete(`${baseURL}/api/book/hotel/delete/${id}`);

      //  Update the local state to remove the deleted item
      setBookings((prevBookings) =>
        prevBookings.filter((item) => item.id !== id)
      );

      // // Close the delete confirmation modal
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <div className="w-full bg-defaultWhite dark:bg-gray-900">
      <div className="pt-10 pb-20">
        {isLoading ? (
          <p className="text-2xl text-center dark:text-gray-200">
            {" "}
            Please wait!
          </p>
        ) : (
          <div className="">
            <h2 className="py-5 text-4xl font-bold text-center text-defaultGreen dark:text-orange-200 ">
              Welcome {hotelManager.firstName}
            </h2>
            <h2 className="pb-12 text-2xl text-center text-defaultGreen dark:text-orange-200">
              Your Personalized Hotel Bookings.
            </h2>
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-emerald-200">
                <thead className="text-xs uppercase bg-defaultGreen text-defaultWhite dark:bg-emerald-200 dark:text-gray-900">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      customer Name
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
                      customer Contact
                    </th>
                    <th scope="col" className="px-6 py-3">
                      hotel Email
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
                    <th scope="col" className="px-6 py-3">
                      Update booking Status
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
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
                        <td className="px-6 py-4">{item.customerName}</td>
                        <td className="px-6 py-4">{item.bookingId}</td>
                        <td className="px-6 py-4">{item.checkIn}</td>
                        <td className="px-6 py-4">{item.checkOut}</td>

                        <td className="px-6 py-4"> {item.customerContact}</td>
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
                        <td>
                          {" "}
                          <Link to={`/booking/${item.id}`}>
                            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg ">
                              Edit
                            </button>
                          </Link>
                        </td>
                        <td>
                          <button
                            onClick={() => handleConfirmDelete(item.id)}
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg ">
                            delete
                          </button>
                        </td>
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

export default HotelManagerDashboard;
