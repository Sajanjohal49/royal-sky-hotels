// AdminDashboard.jsx

import React, { useEffect } from "react";
import "./AdminDashboard.css";

import AddLocation from "./AddLocation/AddLocation";
import AddFacility from "./AddFacility/AddFacility";
import RegisterHotelManager from "./RegisterHotelManager/RegisterHotelManager";
import AddHotel from "./AddHotel/AddHotel";
import ViewAllBookings from "./ViewAllBookings/ViewAllBookings";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import { GiArchiveRegister } from "react-icons/gi";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaHotel } from "react-icons/fa";
import { BsReverseListColumnsReverse } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import AllHotels from "./AddHotel/AllHotels";

const AdminDashboard = () => {
  // State to track the currently active section
  const [activeSection, setActiveSection] = React.useState("view-all-bookings");

  // Function to handle section change
  const handleSectionChange = (section) => {
    setActiveSection(section);
  };
  const navigate = useNavigate();
  const admin = JSON.parse(sessionStorage.getItem("active-admin"));
  useEffect(() => {
    if (!admin) {
      navigate("/");
    }
  }, [admin, navigate]);
  const sectionsCSS = (section) => {
    return `flex mt-3  w-fit px-3 py-4 rounded-2xl items-center  justify-center     cursor-pointer ${
      activeSection === section
        ? "dark:bg-emerald-200 bg-defaultGreen text-defaultWhite dark:text-gray-900"
        : " dark:bg-orange-200 bg-defaultOrange/90   dark:text-gray-900  "
    }`;
  };

  // Render the currently active section
  const renderActiveSection = () => {
    switch (activeSection) {
      case "add-location":
        return <AddLocation />;
      case "add-facility":
        return <AddFacility />;
      case "register-hotel-manager":
        return <RegisterHotelManager />;
      case "add-hotel":
        return <AllHotels />;
      case "view-all-bookings":
        return <ViewAllBookings />;
      default:
        return null;
    }
  };
  if (admin != null) {
    return (
      <div className=" font-euclidRegular bg-defaultWhite dark:bg-gray-900">
        <p className="pb-6 text-2xl text-center text-teal-900 dark:text-emerald-200">
          Welcome, Admin!
        </p>
        <p className="text-4xl text-center text-defaultGreen font-euclidBold dark:text-orange-200 ">
          Dashboard Overview
        </p>
        <nav className="flex flex-wrap justify-between px-2 py-16 text-white lg:px-20 ">
          <div
            onClick={() => handleSectionChange("view-all-bookings")}
            className={sectionsCSS("view-all-bookings")}>
            <button className="flex items-center justify-center text-center">
              <BsReverseListColumnsReverse className="mr-2 text-2xl" />
              View All Bookings
            </button>
          </div>
          <div
            onClick={() => handleSectionChange("add-location")}
            className={sectionsCSS("add-location")}>
            <button className="flex items-center justify-center text-center">
              <MdOutlineAddLocationAlt className="mr-2 text-2xl" />
              Add Location
            </button>
          </div>
          <div
            onClick={() => handleSectionChange("register-hotel-manager")}
            className={sectionsCSS("register-hotel-manager")}>
            <button className="flex items-center justify-center text-center">
              <GiArchiveRegister className="mr-2 text-2xl" />
              Register Hotel Manager
            </button>
          </div>
          <div
            onClick={() => handleSectionChange("add-hotel")}
            className={sectionsCSS("add-hotel")}>
            <button className="flex items-center justify-center text-center">
              <FaHotel className="mr-2 text-2xl" />
              View All Hotels
            </button>
          </div>

          <div
            onClick={() => handleSectionChange("add-facility")}
            className={sectionsCSS("add-facility")}>
            <button className="flex items-center justify-center text-center">
              <IoIosAddCircleOutline className="mr-2 text-2xl" />
              Add Facility
            </button>
          </div>
        </nav>
        <main className="flex-1 p-4 ">{renderActiveSection()}</main>
      </div>
    );
  } else {
    return <div>Please Visit home</div>;
  }
};

export default AdminDashboard;
