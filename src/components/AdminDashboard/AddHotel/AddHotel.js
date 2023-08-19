import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddHotel = () => {
  const navigate = useNavigate();
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
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

  const handleImage1Change = (e) => {
    setImage1(e.target.files[0]);
  };

  const handleImage2Change = (e) => {
    setImage2(e.target.files[0]);
  };

  const handleImage3Change = (e) => {
    setImage3(e.target.files[0]);
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
        "http://localhost:8080/api/hotel/add",
        formDataToSend
      );

      console.log("addHotel " + response.data); // Handle the response as needed
    } catch (error) {
      console.error(error);
    }
  };

  const [locations, setLocations] = useState([]);
  const [hotelManagers, setHotelManagers] = useState([]);
  useEffect(() => {
    const allLocations = async () => {
      const locationsData = await retrieveAllLocations();
      if (locationsData) {
        setLocations(locationsData.locations);
      }
    };
    allLocations();
  }, []);
  const retrieveAllLocations = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/location/fetch"
    );
    return response.data;
  };
  const retreiveAllHotelManagers = async () => {
    const response = await axios.get("http://localhost:8080/api/user/hotel");
    return response.data;
  };
  useEffect(() => {
    const getAllHotelManagers = async () => {
      const allHotelManagersData = await retreiveAllHotelManagers();
      if (allHotelManagersData) {
        setHotelManagers(allHotelManagersData.users);
      }
    };
    getAllHotelManagers();
  }, []);
  return (
    <div className="mx-auto max-w-[1100px]">
      <p className="text-xl text-center sm:text-3xl text-defaultGreen font-euclidSemibold dark:text-orange-200">
        Add Hotel
      </p>
      <div className="flex items-center justify-center w-full mx-auto mt-10 text-gray-900 rounded-3xl dark:text-gray-200">
        <form
          className="items-center justify-center w-full gap-4 py-2 text-orange-900 capitalize sm:grid sm:gap-5 sm:py-10 sm:grid-cols-2 sm:px-10 dark:text-orange-200"
          onSubmit={handleSubmit}>
          <div>
            <label className="block my-2 ">Hotel Name</label>
            <input
              className="w-full px-4 py-2 text-gray-900 border rounded-full border-defaultGreen/30"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label className="block my-2 ">Description</label>
            <input
              className="w-full px-4 py-2 text-gray-900 border rounded-full border-defaultGreen/30"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label className="block my-2 ">Location</label>
            <select
              className="w-full px-4 py-2 text-gray-900 border rounded-full border-defaultGreen/30"
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
            <label className="block my-2 ">Hotel Manager</label>
            <select
              className="w-full px-4 py-2 text-gray-900 border rounded-full border-defaultGreen/30"
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
            <label className="block my-2 ">Street</label>
            <input
              className="w-full px-4 py-2 text-gray-900 border rounded-full border-defaultGreen/30"
              value={formData.street}
              onChange={(e) =>
                setFormData({ ...formData, street: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label className="block my-2 ">Postal Code</label>
            <input
              className="w-full px-4 py-2 text-gray-900 border rounded-full border-defaultGreen/30"
              value={formData.postalCode}
              onChange={(e) =>
                setFormData({ ...formData, postalCode: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label className="block my-2 ">Email ID</label>
            <input
              className="w-full px-4 py-2 text-gray-900 border rounded-full border-defaultGreen/30"
              value={formData.emailId}
              onChange={(e) =>
                setFormData({ ...formData, emailId: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label className="block my-2 ">Price per Day</label>
            <input
              className="w-full px-4 py-2 text-gray-900 border rounded-full border-defaultGreen/30"
              value={formData.pricePerDay}
              onChange={(e) =>
                setFormData({ ...formData, pricePerDay: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label className="block my-2 ">Total Room</label>
            <input
              className="w-full px-4 py-2 text-gray-900 border rounded-full border-defaultGreen/30"
              value={formData.totalRoom}
              onChange={(e) =>
                setFormData({ ...formData, totalRoom: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label className="block my-2 ">Image 1</label>
            <input
              className="w-full px-4 py-2 text-gray-900 border border-orange-900 rounded-full dark:text-orange-200 dark:border-orange-200"
              type="file"
              accept="image/*"
              required
              onChange={handleImage1Change}
            />
          </div>
          <div>
            <label className="block my-2 ">Image 2</label>
            <input
              className="w-full px-4 py-2 text-gray-900 border border-orange-900 rounded-full dark:text-orange-200 dark:border-orange-200"
              type="file"
              accept="image/*"
              required
              onChange={handleImage2Change}
            />
          </div>
          <div>
            <label className="block my-2 ">Image 3</label>
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