import React, { useEffect, useState } from "react";
import axios from "axios";

import baseURL from "../../../apiConfig";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Compressor from "compressorjs";
const fetchAllHotelManagers = async () => {
  const response = await axios.get(`${baseURL}/api/user/hotel`);
  return response.data;
};
const fetchAllLocations = async () => {
  const response = await axios.get(`${baseURL}/api/location/fetch`);
  return response.data;
};

const AddHotel = () => {
  const navigate = useNavigate();
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  console.log("IMAGE2", image2);
  const [image3, setImage3] = useState(null);
  const [locations, setLocations] = useState([]);
  const [hotelManagers, setHotelManagers] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    locationId: "",
    street: "",
    postalCode: "",
    emailId: "",
    pricePerDay: "",
    totalRoom: "",
    userId: "",
  });
  const { data: allHotelManagersData } = useQuery(
    "HotelManagers",
    fetchAllHotelManagers
  );

  const { data: locationsData } = useQuery("locations", fetchAllLocations);

  const handleImage1Change = (e) => {
    const image = e.target.files[0];
    new Compressor(image, {
      quality: 0.5, // You can adjust the quality as needed
      success: (compressedResult) => {
        setImage1(compressedResult);
      },
    });
  };

  const handleImage2Change = (e) => {
    const image = e.target.files[0];
    new Compressor(image, {
      quality: 0.5,
      success: (compressedResult) => {
        setImage2(compressedResult);
      },
    });
  };

  const handleImage3Change = (e) => {
    const image = e.target.files[0];
    new Compressor(image, {
      quality: 0.5, // You can adjust the quality as needed
      success: (compressedResult) => {
        setImage3(compressedResult);
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("image1", image1);
      formDataToSend.append("image2", image2);
      formDataToSend.append("image3", image3);
      formDataToSend.append("name", formData.name);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("locationId", formData.locationId);
      formDataToSend.append("street", formData.street);
      formDataToSend.append("postalCode", formData.postalCode);
      formDataToSend.append("emailId", formData.emailId);
      formDataToSend.append("pricePerDay", formData.pricePerDay);
      formDataToSend.append("totalRoom", formData.totalRoom);
      formDataToSend.append("userId", formData.userId);

      const response = await axios.post(
        `${baseURL}/api/hotel/add`,
        formDataToSend
      );

      console.log("addHotel " + response.data);
      if (response.status === 200) {
        navigate("/"); // Replace "/" with the actual URL of your homepage
      }

      // Handle the response as needed
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (locationsData) {
      setLocations(locationsData.locations);
    }
  }, [locationsData]);

  useEffect(() => {
    if (allHotelManagersData) {
      setHotelManagers(allHotelManagersData.users);
    }
  }, [allHotelManagersData]);
  return (
    <div className=" ">
      <div className="flex items-center justify-center w-full mx-auto  text-gray-900 rounded-3xl dark:text-gray-200">
        <form
          className="items-center justify-center w-full gap-4  text-orange-900 capitalize sm:grid sm:gap-5 sm:py-10 sm:grid-cols-2 sm:px-10 dark:text-slate-200"
          onSubmit={handleSubmit}>
          <div>
            <label className="block my-1 ">Hotel Name</label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label className="block my-1 ">Description</label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label className="block my-1 ">Location</label>
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={formData.locationId}
              onChange={(e) =>
                setFormData({ ...formData, locationId: e.target.value })
              }
              required>
              <option className="capitalize ">select location</option>
              {locations.map((location) => {
                return (
                  <option key={location.id} value={location.id}>
                    {location.city}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <label className="block my-1 ">Hotel Manager</label>
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={formData.userId}
              onChange={(e) =>
                setFormData({ ...formData, userId: e.target.value })
              }>
              <option>Select Manager</option>
              {hotelManagers.map((hotelManager) => {
                return (
                  <option key={hotelManager.id} value={hotelManager.id}>
                    {" "}
                    {hotelManager.firstName + " " + hotelManager.lastName}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <label className="block my-1 ">Street</label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={formData.street}
              onChange={(e) =>
                setFormData({ ...formData, street: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label className="block my-1 ">Postal Code</label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={formData.postalCode}
              onChange={(e) =>
                setFormData({ ...formData, postalCode: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label className="block my-1 ">Email ID</label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={formData.emailId}
              onChange={(e) =>
                setFormData({ ...formData, emailId: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label className="block my-1 ">Price per Day</label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={formData.pricePerDay}
              onChange={(e) =>
                setFormData({ ...formData, pricePerDay: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label className="block my-1 ">Total Room</label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={formData.totalRoom}
              onChange={(e) =>
                setFormData({ ...formData, totalRoom: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label className="block my-1 ">Image 1</label>
            <input
              className="w-full px-4 py-2 text-gray-900 border border-orange-900 rounded-full dark:text-orange-200 dark:border-orange-200"
              type="file"
              accept="image/*"
              required
              onChange={handleImage1Change}
            />
          </div>
          <div>
            <label className="block my-1 ">Image 2</label>
            <input
              className="w-full px-4 py-2 text-gray-900 border border-orange-900 rounded-full dark:text-orange-200 dark:border-orange-200"
              type="file"
              accept="image/*"
              required
              onChange={handleImage2Change}
            />
          </div>
          <div>
            <label className="block my-1 ">Image 3</label>
            <input
              className="w-full px-4 py-2 text-gray-900 border border-orange-900 rounded-full dark:text-orange-200 dark:border-orange-200"
              type="file"
              accept="image/*"
              required
              onChange={handleImage3Change}
            />
          </div>
          <div>
            <button
              type="submit"
              className="px-5 py-2 text-white rounded-full bg-defaultGreen dark:bg-emerald-200 dark:text-gray-900 hover:bg-gray-900 dark:hover:bg-orange-200">
              {" "}
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddHotel;
