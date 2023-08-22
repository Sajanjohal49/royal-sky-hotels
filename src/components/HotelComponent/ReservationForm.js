import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import baseURL from "../../apiConfig";

const ReservationForm = () => {
  const { hotelId } = useParams();
  const navigate = useNavigate();
  const user = JSON.parse(sessionStorage.getItem("active-customer"));
  const today = new Date();
  const defaultCheckInDate = today.toISOString().split("T")[0];

  const defaultCheckOutDate = new Date(
    today.getTime() + 5 * 24 * 60 * 60 * 1000
  )
    .toISOString()
    .split("T")[0];

  const [checkInDate, setCheckInDate] = useState(defaultCheckInDate);
  const [checkOutDate, setCheckOutDate] = useState(defaultCheckOutDate);
  const [totalRooms, setTotalRooms] = useState(0);
  const [totalDays, setTotalDays] = useState(0);

  // console.log("hotel id" + hotelId);
  // console.log("checkIn " + checkInDate);
  // console.log("checkOut " + checkOutDate);
  // console.log("totalRooms " + totalRooms);
  // console.log("totalDays " + totalDays);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user == null) {
      alert("Please Login to book the hotels");
    } else if (totalRooms < 1 || totalDays < 1) {
      alert("Please select at least one room and one day");
    } else {
      // Create data object
      const formData = new FormData();
      formData.append("userId", user.id);

      formData.append("hotelId", hotelId);
      formData.append("checkIn", checkInDate);
      formData.append("checkOut", checkOutDate);
      formData.append("totalRoom", totalRooms);
      formData.append("totalDay", totalDays);
      console.log("Console for booking hotel " + formData);

      // Send data using Axios
      axios
        .post(`${baseURL}/api/book/hotel/`, formData)
        .then((response) => {
          console.log(response);
          navigate("/customer/allbookings");
          // Handle successful response
          // You can perform additional actions here, such as displaying a success message
        })

        .catch((error) => {
          console.log(error);
          // Handle error
          // You can display an error message or perform other error handling tasks here
        });
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className=" text-sm max-w-[26rem] mx-auto mb-6 px-5  ">
        <div className="flex ">
          <div className="items-center justify-center w-1/2 px-3 py-1 uppercase border-t border-l border-gray-400 rounded-tl-lg ">
            <label htmlFor="check-in-date " className="px-1 text-xs font-bold">
              Check-in
            </label>
            <input
              type="date"
              id="check-in-date"
              value={checkInDate}
              className="py-1 pl-1 text-sm font-medium "
              onChange={(e) => setCheckInDate(e.target.value)}
              required
            />
          </div>

          <div className="items-center justify-center w-1/2 py-1 pl-2 uppercase border-t border-l border-r border-gray-400 rounded-tr-lg ">
            <label htmlFor="check-out-date " className="px-1 text-xs font-bold">
              Check-out
            </label>
            <input
              type="date"
              id="check-out-date"
              className="py-1 pl-1 text-sm font-medium "
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="flex justify-center w-full ">
          <div className="w-1/2 py-2 pl-3 border-t border-b border-l border-gray-400 rounded-bl-lg ">
            <label
              htmlFor="total-rooms"
              className="text-xs font-bold uppercase ">
              Total Rooms
            </label>
            <div className="flex justify-between w-2/3 px-2 mt-1 border border-gray-400 rounded-lg ">
              <button
                type="button"
                onClick={() =>
                  setTotalRooms(totalRooms > 0 ? totalRooms - 1 : 0)
                }
                className="pl-2 text-lg bg-transparent focus:outline-none">
                -
              </button>
              <input
                type="text"
                id="total-rooms"
                value={totalRooms}
                onChange={(e) => setTotalRooms(parseInt(e.target.value, 10))}
                required
                className="flex w-16 px-2 py-1 font-semibold text-center focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setTotalRooms(totalRooms + 1)}
                className="pr-2 text-lg bg-transparent focus:outline-none">
                +
              </button>
            </div>
          </div>
          <div className="w-1/2 py-2 pl-3 border-t border-b border-l border-r border-gray-400 rounded-br-lg ">
            <label
              htmlFor="total-days"
              className="text-xs font-bold uppercase ">
              Total Days
            </label>
            <div className="flex justify-between w-2/3 px-2 mt-1 border border-gray-400 rounded-lg ">
              <button
                type="button"
                onClick={() => setTotalDays(totalDays > 0 ? totalDays - 1 : 0)}
                className="pl-2 text-lg bg-transparent focus:outline-none">
                -
              </button>
              <input
                type="text"
                id="total-days"
                value={totalDays}
                onChange={(e) => setTotalDays(parseInt(e.target.value, 10))}
                required
                className="flex w-16 px-2 py-1 font-semibold text-center focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setTotalDays(totalDays + 1)}
                className="pr-2 text-lg bg-transparent focus:outline-none">
                +
              </button>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="flex items-center justify-center px-10 py-3 mx-auto mt-3 font-semibold rounded-xl bg-gradient-to-r from-emerald-500 to-lime-500 text-slate-100">
          Hurry Up! Book Now
        </button>
      </form>
    </div>
  );
};

export default ReservationForm;
