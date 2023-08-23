import React, { useState } from "react";
import axios from "axios";
import baseURL from "../../../apiConfig";

const RegisterHotelManager = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    password: "",
    sex: "",
    contact: "",
    age: "",
    street: "",
    city: "",
    postalCode: "",
    role: "",
  });
  if (document.URL.indexOf("admin") !== -1) {
    formData.role = "Hotel Manager";
  }

  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    const validationErrors = {};
    if (!formData.firstName) {
      validationErrors.firstName = "First Name is required";
    }
    if (!formData.lastName) {
      validationErrors.lastName = "Last Name is required";
    }
    // Add more validations for other fields

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      // Make the POST request using Axios
      const response = await axios.post(
        `${baseURL}/api/user/register`,
        formData
      );
      console.log(formData);
      console.log(response.data); // Handle the response as needed
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className=" max-w-[1000px] mx-auto ">
      <p className="text-xl text-center sm:text-3xl text-defaultGreen font-euclidSemibold dark:text-orange-200">
        Register Hotel Manager
      </p>
      <div className="flex items-center justify-center mx-auto mt-10 text-gray-900 rounded-3xl dark:text-gray-200">
        <form
          className="items-center justify-center w-full gap-4 py-2 text-orange-900 capitalize sm:grid sm:gap-4 sm:gap-x-10 sm:py-10 sm:grid-cols-2 sm:px-10 dark:text-orange-200"
          onSubmit={handleSubmit}>
          <div className="w-full mb-4 ">
            <label className="block my-2 ">First Name</label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
            />
            {errors.firstName && (
              <p className="text-red-500">{errors.firstName}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block my-2">Last Name</label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
            />
            {errors.lastName && (
              <p className="text-red-500">{errors.lastName}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block my-2">Email</label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={formData.emailId}
              onChange={(e) =>
                setFormData({ ...formData, emailId: e.target.value })
              }
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label className="block my-2">password</label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
          <div className="mb-4">
            <label className="block my-2">Gender</label>
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={formData.sex}
              onChange={(e) =>
                setFormData({ ...formData, sex: e.target.value })
              }>
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender && <p className="text-red-500">{errors.gender}</p>}
          </div>
          <div className="mb-4">
            <label className="block my-2">Contact No</label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={formData.contact}
              onChange={(e) =>
                setFormData({ ...formData, contact: e.target.value })
              }
            />
            {errors.contactNo && (
              <p className="text-red-500">{errors.contactNo}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block my-2">Age</label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="number"
              value={formData.age}
              onChange={(e) =>
                setFormData({ ...formData, age: e.target.value })
              }
            />
            {errors.age && <p className="text-red-500">{errors.age}</p>}
          </div>
          <div className="mb-4">
            <label className="block my-2">Street</label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={formData.street}
              onChange={(e) =>
                setFormData({ ...formData, street: e.target.value })
              }
            />
            {errors.street && <p className="text-red-500">{errors.street}</p>}
          </div>
          <div className="mb-4">
            <label className="block my-2">City</label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              value={formData.city}
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
            />
            {errors.city && <p>{errors.city}</p>}
          </div>
          <div className="mb-4">
            <label className="block my-2">Postal Code</label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              value={formData.postalCode}
              onChange={(e) =>
                setFormData({ ...formData, postalCode: e.target.value })
              }
            />
          </div>
          <div>
            <button
              type="submit"
              className="px-5 py-2 text-white rounded-full bg-defaultGreen dark:bg-emerald-200 dark:text-gray-900 hover:bg-blue-600">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterHotelManager;
