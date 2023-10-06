import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import baseURL from "../../apiConfig";

const UserRegister = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    sex: "",
    emailId: "",
    contact: "",
    street: "",
    password: "",
    city: "",
    role: "",
    postalCode: "",
  });

  if (document.URL.indexOf("admin") !== -1) {
    formData.role = "Admin";
  } else if (document.URL.indexOf("hotelManager") !== -1) {
    formData.role = "Hotel Manager";
  } else if (document.URL.indexOf("customer") !== -1) {
    formData.role = "Customer";
  }

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${baseURL}/api/user/register`,
        formData
      );
      console.log("User Registered Successfully", response.data);

      fetch(`${baseURL}/api/user/login`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          emailId: formData.emailId,
          password: formData.password,
          role: formData.role,
        }),
      })
        .then((result) => {
          console.log("result", result);
          if (result.ok) {
            return result.json();
          } else {
            throw new Error("Invalid email or password ");
          }
        })
        .then((res) => {
          console.log(res);

          if (res.role === "Admin") {
            sessionStorage.setItem("active-admin", JSON.stringify(res));
          } else if (res.role === "Customer") {
            sessionStorage.setItem("active-customer", JSON.stringify(res));
          } else if (res.role === "Hotel") {
            sessionStorage.setItem("active-hotelManager", JSON.stringify(res));
          }

          navigate("/home");
          window.location.reload(true);
        });
    } catch (error) {
      console.log("Error for registering the user " + error);
    }
  };

  return (
    <section
      className="bg-gray-50 dark:bg-gray-900 bg-luggage font-euclidRegular "
      onSubmit={submitForm}>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="flex justify-center text-center ">
          {" "}
          <div className="flex items-center pl-2 mb-6 text-lg text-gray-100 md:text-3xl font-euclidBold dark:text-white">
            Welcome to{" "}
            <span className="px-3 py-1 mx-2 bg-green-600 rounded-full text-slate-50">
              Royal Sky Hotels
            </span>
          </div>
        </div>
        <div className=" bg-white lg:min-w-[800px] min-w-full   rounded-3xl shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800/70 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Please Register Here!
            </h1>
            <form className="space-y-4 md:space-y-6 " action="#">
              <div className="grid gap-3 md:grid-cols-2 ">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInput}
                    id="firstName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInput}
                    id="lastName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Last Name"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your email
                  </label>
                  <input
                    value={formData.emailId}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={(e) =>
                      setFormData({ ...formData, emailId: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInput}
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Contact
                  </label>
                  <input
                    type="tel"
                    name="contact"
                    onChange={handleInput}
                    value={formData.contact}
                    id="contact"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Contact"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="street"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Street
                  </label>
                  <input
                    type="text"
                    name="street"
                    onChange={handleInput}
                    value={formData.street}
                    id="street"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Street"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="city"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInput}
                    id="city"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="City"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="postalCode"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInput}
                    id="postalCode"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Postal Code"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="gender"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Gender
                  </label>
                  <select
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={formData.sex}
                    onChange={(e) =>
                      setFormData({ ...formData, sex: e.target.value })
                    }>
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="age"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Age
                  </label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleInput}
                    id="age"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Age"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full text-white bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserRegister;
