import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditBookingStatus = () => {
  const { bookingId } = useParams();
  const navigate = useNavigate();
  const hotelManager = JSON.parse(
    sessionStorage.getItem("active-hotelManager")
  );
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const retrieveDetails = async () => {
      const bookingDetails = await retrieveBookingDetails();
      console.log(bookingDetails);
      if (bookingDetails) {
        const bookingsArray = Array.isArray(bookingDetails)
          ? bookingDetails
          : [bookingDetails];
        setBookings(bookingsArray);
      }
    };
    retrieveDetails();
  }, []);
  const handleFieldChange = (id, field, value) => {
    setBookings(
      bookings.map((booking) =>
        booking.bookingId === id ? { ...booking, [field]: value } : booking
      )
    );
  };

  const handleUpdate = (id) => {
    const booking = bookings.find((booking) => booking.bookingId === id);
    axios
      .post(`http://localhost:8080/api/book/hotel/update/status`, {
        bookingId: booking.id,
        status: booking.status,
        checkIn: booking.checkIn,
      })
      .then(
        (response) => console.log(response),
        navigate("/hotelManager/allbookings")
      )
      .catch((error) => console.log(error));
  };
  const retrieveBookingDetails = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/book/hotel/fetch/id?bookingId=" + bookingId
      );
      return response.data;
    } catch (error) {
      // Handle the error (e.g., display an error message)
      console.error(error);
    }
  };

  return (
    <div className=" font-euclidRegular max-w-[1100px] mx-auto flex justify-center w-full dark:bg-gray-900">
      {/* <p>Update the Status {bookingId}</p> */}
      {/* <p>{hotelManager && hotelManager.Id}</p> */}
      {bookings.map((booking) => {
        return (
          <div className="py-10 text-gray-900 dark:text-orange-200 ">
            <div>
              <div className="">
                <p className="mx-auto my-2 text-3xl text-center dark:text-orange-200 sm:my-10 font-euclidSemibold text-defaultGreen">
                  {booking.customerName} 's Booking
                </p>
              </div>
              <label
                htmlFor={`status-${booking.bookingId}`}
                className="block mb-3">
                Status:
              </label>

              <select
                className="w-full px-4 py-2 mb-4 text-gray-900 border border-orange-900 rounded-full dark:border-orange-200"
                id={`status-${booking.bookingId}`}
                name={`status-${booking.bookingId}`}
                value={booking.status}
                onChange={(event) =>
                  handleFieldChange(
                    booking.bookingId,
                    "status",
                    event.target.value
                  )
                }
                required>
                <option value="">Select Status</option>
                <option value="confirmed">Confirmed</option>
                <option value="cancelled">Cancelled</option>
                <option value="pending">Pending</option>
              </select>
              <div className="form-group">
                <button
                  type="submit"
                  className="px-5 py-2 text-white rounded-full bg-defaultGreen dark:bg-emerald-200 dark:text-gray-900 hover:bg-blue-600"
                  onClick={() => handleUpdate(booking.bookingId)}>
                  {" "}
                  Update
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EditBookingStatus;
