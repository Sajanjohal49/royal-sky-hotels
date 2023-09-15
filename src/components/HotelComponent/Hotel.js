import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaHotel } from "react-icons/fa";
import ImagesSection from "./ImagesSection";
import StickySection from "./StickySection";
import AboutSection from "./AboutSection";
import AvailabilitySection from "./AvailabilitySection";
import GetHotelFacilities from "../FacilityComponent/GetHotelFacilities";
import GetHotelReviews from "../HotelReviewComponent/GetHotelReviews";

import baseURL from "../../apiConfig";
import Card from "../HomePageComponent/Card";
import { useLoading } from "../utils/customHooks";

const Hotel = () => {
  const navigate = useNavigate();
  const customer = JSON.parse(sessionStorage.getItem("active-customer"));
  const [isLoading, stopLoading, LoadingComponent] = useLoading();
  const { hotelId, locationId } = useParams();

  console.log("hotelIDD", hotelId);

  const [hotels, setHotels] = useState([]);
  const [hotel, setHotel] = useState({
    id: "",
    name: "",
    description: "",
    street: "",
    pincode: "",
    emailId: "",
    pricePerDay: "",
    totalRoom: "",
    image1: "",
    image2: "",
    image3: "",
    userId: "",
    location: { id: "", city: "", description: "" },
    facility: [{ id: "", name: "", description: "" }],
  });

  const retrieveHotel = async () => {
    const response = await axios.get(
      `${baseURL}/api/hotel/id?hotelId=` + hotelId
    );
    return response.data;
  };
  const retrieveHotelsByLocation = async () => {
    const response = await axios.get(
      `${baseURL}/api/hotel/location?locationId=` + locationId
    );
    return response.data;
  };
  useEffect(() => {
    const getHotel = async () => {
      const hotel = await retrieveHotel();
      setHotel(hotel.hotel);
    };
    const getHotelsByLocation = async () => {
      const allHotels = await retrieveHotelsByLocation();
      setHotels(allHotels.hotels);
    };
    getHotelsByLocation();
    getHotel();
    stopLoading();
  }, [hotelId]);
  const reviewPageNavigator = () => {
    navigate(
      "/hotel/" +
        hotelId +
        "/location/" +
        locationId +
        "/customer/" +
        customer.id +
        "/review"
    );
  };
  const navigateToAddReviewPage = () => {
    navigate("/hotel/" + hotelId + "/location/" + locationId + "/add/facility");
  };
  const hotelManager = JSON.parse(
    sessionStorage.getItem("active-hotelManager")
  );

  return (
    <div className=" bg-defaultWhite dark:bg-gray-900 font-euclidRegular">
      <div className="px-6 pt-4 pb-20 text-gray-800 lg:px-24 dark:bg-gray-900 bg-defaultWhite dark:text-gray-200 ">
        <div className="pb-3">
          <div className="flex items-center">
            <FaHotel className="mx-4 text-3xl " />
            <div>
              <p className="text-2xl font-semibold">{hotel.name}</p>
              <div className="flex text-sm underline capitalize ">
                <p>{hotel.street},</p>
                <p>{hotel.pincode},</p>
                <p> {hotel.location.city}</p>
              </div>
            </div>
          </div>
        </div>
        <ImagesSection hotel={hotel} />
        <div className="my-16 ">
          <div className="pr-8 text-gray-700 dark:text-gray-100">
            <div>
              <p className="my-3 text-xl font-extrabold ">Amenities</p>
              <GetHotelFacilities hotel={hotel} />
            </div>{" "}
            <div className="w-full ">
              <p className="my-3 text-xl font-extrabold ">Hotel Reviews</p>
              <GetHotelReviews hotel={hotel} />
            </div>
            <AboutSection hotel={hotel} />
            <AvailabilitySection hotel={hotel} />
          </div>
          <StickySection hotel={hotel} />
        </div>
        {(() => {
          if (customer != null) {
            return (
              <div className="flex items-center justify-center pb-12 ">
                <button
                  onClick={reviewPageNavigator}
                  className="px-5 py-2 text-gray-200 rounded-full bg-defaultGreen">
                  {" "}
                  Leave a Comment
                </button>
              </div>
            );
          }
        })()}
        {hotelManager && Number(hotelManager.hotelId) === Number(hotelId) && (
          <div className="flex items-center justify-center pb-12">
            <button
              onClick={navigateToAddReviewPage}
              className="px-5 py-2 text-gray-200 rounded-full bg-defaultGreen">
              Add Facility
            </button>
          </div>
        )}
      </div>

      <p className="my-3 text-xl font-extrabold dark:text-gray-200 text-center">
        More Hotels in this Area
      </p>
      <div className="px-2 sm:px-10   ">
        <LoadingComponent isLoading={isLoading}>
          <div className="grid items-center justify-center grid-cols-1   gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:px-10">
            {hotels.map((hotel, index) => {
              return <Card key={hotel.id} item={hotel} index={index} />;
            })}
          </div>
        </LoadingComponent>
      </div>

      <div className="w-full h-0.5 bg-gray-300 "></div>
    </div>
  );
};

export default Hotel;
