import React, { useEffect, useRef, useState } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo2 from "../svg/LogoWhite.svg";
import logo1 from "../svg/LOGO.svg";
import { RiLogoutCircleLine } from "react-icons/ri";
import { RiHotelLine } from "react-icons/ri";

const CustomerNav = () => {
  let navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const customerLogout = () => {
    sessionStorage.removeItem("active-customer");
    window.location.reload(true);
    navigate("/");
  };
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  return (
    <div className="pb-5 dark:bg-gray-900 bg-defaultWhite ">
      <div className="flex items-center justify-between h-16 sm:h-20">
        <div className="flex items-center ml-8 bg-gray-800 md:mx-16 dark:bg-orange-100 ">
          <div className="flex-shrink-0 ">
            <Link to="/">
              <img
                className="absolute top-0 dark:visible h-16 px-2 py-4 bg-[#2C4B48] invisible rounded-b-lg dark:bg-orange-200 sm:px-4 sm:py-5 sm:h-20 "
                src={logo1}
                alt="Logo"
              />
              <img
                className="absolute top-0 visible h-16 px-2 py-4 bg-[#2C4B48] rounded-b-lg dark:invisible dark:bg-orange-200 sm:px-4 sm:py-5 sm:h-20 "
                src={logo2}
                alt="Logo"
              />
            </Link>
          </div>
          <div className="absolute hidden right-20 md:block">
            <div className="flex pt-3 ml-10 space-x-4 text-gray-900 dark:text-gray-200 ">
              <Link
                to="/customer/allbookings"
                className={` flex items-center justify-center px-4 py-2 font-medium dark:border-emerald-300 border border-gray-900 hover:border-orange-200 rounded-full hover:bg-gray-900 dark:hover:text-gray-900 dark:hover:bg-orange-200 hover:text-white   ${
                  location.pathname === "/customer/allbookings"
                    ? "bg-defaultGreen text-white dark:bg-emerald-200 dark:text-gray-900"
                    : "dark:text-emerald-300"
                }`}>
                {" "}
                <span>
                  <RiHotelLine className="mr-2 text-xl " />
                </span>
                <p>Booked Hotels</p>
              </Link>
              <button
                onClick={customerLogout}
                className={` flex items-center justify-center px-4 py-2 font-medium dark:border-emerald-300 border border-gray-900 hover:border-orange-200 rounded-full hover:bg-gray-900 dark:hover:text-gray-900 dark:hover:bg-orange-200 hover:text-white   ${
                  location.pathname === "/"
                    ? "bg-defaultGreen text-white dark:bg-emerald-200 dark:text-gray-900"
                    : "dark:text-emerald-300"
                }`}>
                {" "}
                <RiLogoutCircleLine className="mr-2 text-lg font-bold " />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex mr-4 md:top-5 top-3 right-5 md:hidden">
        <button
          type="button"
          className="inline-flex items-center justify-center p-3.5 text-gray-200 bg-teal-900   dark:bg-orange-200 rounded-full dark:text-gray-900  focus:outline-none focus:ring-0   focus:ring-offset-2 dark:focus:ring-offset-orange-200 focus:ring-offset-gray-200 focus:ring-orange-100"
          aria-controls="mobile-menu"
          aria-expanded={isOpen ? "true" : "false"}>
          <span className="sr-only">Open main menu</span>
          <svg
            onClick={toggleNavbar}
            className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden={isOpen ? "false" : "true"}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div
        className={`md:hidden ${isOpen ? "block" : "hidden"} `}
        ref={navbarRef}
        id="mobile-menu">
        <div className="absolute z-20 text-gray-200 origin-top transform bg-teal-900 right-2 dark:bg-orange-200 w-fit rounded-3xl top-20 md:hidden">
          <div className="px-3 pt-2 space-y-1 text-gray-200 dark:text-gray-900 sm:px-3">
            <Link
              to="/customer/allbookings"
              className="flex items-center justify-center px-4 py-2 text-base font-medium cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 rounded-3xl hover:text-white">
              <span>
                <RiHotelLine className="mr-2 text-xl " />
              </span>
              <p>booked Hotel</p>
            </Link>
          </div>
          <div className="px-2 pb-3 space-y-1 text-gray-200 sm:px-3 dark:text-gray-900">
            <button
              onClick={customerLogout}
              className="flex items-center justify-center px-4 py-2 text-base font-medium cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 rounded-3xl hover:text-white">
              <AiOutlineLogout className="mr-3 text-lg " />
              <p>Logout</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerNav;
