import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo1 from "../svg/LOGO.svg";
import logo2 from "../svg/LogoWhite.svg";
import "./Navbar.css";

const NormalNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navbarRef = useRef();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
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
    <nav className="pb-2 dark:bg-gray-900 font-euclidRegular bg-defaultWhite">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center bg-gray-800 dark:bg-orange-100">
            <div className="">
              <NavLink to="/">
                <img
                  className="absolute top-0 visible h-16 px-2 py-4 bg-teal-900 rounded-b-lg dark:bg-orange-200 sm:px-4 sm:py-5 sm:h-20"
                  src={logo2}
                  alt="Logo"
                />
                <img
                  className="absolute top-0 invisible h-16 px-2 py-4 dark:visible sm:px-4 sm:py-5 sm:h-20"
                  src={logo1}
                  alt="Logo"
                />
              </NavLink>
            </div>
            <div className="absolute hidden right-20 md:block">
              <div className="flex items-baseline pt-3 ml-10 space-x-4 text-gray-900 dark:text-gray-200">
                <NavLink
                  to="/"
                  className={`px-4 py-2 font-medium rounded-full hover:bg-gray-900 dark:hover:text-gray-900 dark:hover:bg-orange-200 hover:text-white ${
                    location.pathname === "/"
                      ? "bg-defaultGreen text-white  dark:bg-emerald-200 dark:text-gray-900"
                      : ""
                  }`}>
                  Home
                </NavLink>

                <NavLink
                  to="/gallery"
                  className={`px-4 py-2 font-medium rounded-full hover:bg-gray-900 dark:hover:text-gray-900 dark:hover:bg-orange-200 hover:text-white ${
                    location.pathname === "/gallery"
                      ? "bg-defaultGreen text-white dark:bg-emerald-200 dark:text-gray-900"
                      : ""
                  }`}>
                  {" "}
                  Gallery
                </NavLink>
                <NavLink
                  to="/allHotels"
                  activeclassname="bg-gray-900 dark:text-gray-900 dark:bg-orange-200 text-white"
                  className={`px-4 py-2 font-medium rounded-full hover:bg-gray-900  dark:hover:text-gray-900 dark:hover:bg-orange-200 hover:text-white ${
                    location.pathname === "/allHotels"
                      ? "bg-defaultGreen text-white dark:bg-emerald-200 dark:text-gray-900"
                      : ""
                  }`}>
                  {" "}
                  All Hotels
                </NavLink>
                <NavLink
                  to="/login"
                  activeclassname="ring-orange-100"
                  className={`px-4 py-2 font-medium dark:border-emerald-300 border border-gray-900 hover:border-orange-200 rounded-full hover:bg-gray-900 dark:hover:text-gray-900 dark:hover:bg-orange-200 hover:text-white   ${
                    location.pathname === "/login"
                      ? "bg-defaultGreen text-white dark:bg-emerald-200 dark:text-gray-900"
                      : "dark:text-emerald-300"
                  }`}>
                  {" "}
                  Sign In
                </NavLink>
                <NavLink
                  to="/customer/register"
                  activeclassname="ring-emerald-200"
                  className={`px-4 py-2 font-medium dark:border-emerald-300 border border-gray-900 hover:border-orange-200 rounded-full hover:bg-gray-900 dark:hover:text-gray-900 dark:hover:bg-orange-200 hover:text-white   ${
                    location.pathname === "/customer/register"
                      ? "bg-defaultGreen text-white dark:bg-emerald-200 dark:text-gray-900"
                      : "dark:text-emerald-300"
                  }`}>
                  {" "}
                  Sign Up
                </NavLink>
              </div>
            </div>
          </div>
          <div className="flex mr-4 md:hidden">
            <button
              type="button"
              className="inline-flex items-center rounded-full justify-center p-3.5 text-gray-200 bg-teal-900   dark:bg-orange-200  dark:text-gray-900  focus:outline-none focus:ring-0   focus:ring-offset-2 dark:focus:ring-offset-orange-200 focus:ring-offset-gray-200 focus:ring-orange-100"
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
        </div>
      </div>
      <div
        className={`md:hidden ${isOpen ? "block" : "hidden"} `}
        ref={navbarRef}
        id="mobile-menu">
        <div className="absolute z-20 origin-top transform text-defaultWhite bg-defaultGreen right-2 dark:bg-orange-100 w-fit rounded-3xl top-20 md:hidden">
          <div className="px-3 pt-2 space-y-1 text-gray-200 dark:text-gray-900 sm:px-3">
            <NavLink
              to="/"
              activeclassname="bg-gray-700 text-white"
              className="flex items-center justify-center px-4 py-2 text-base  font-medium cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-300 rounded-3xl hover:text-gray-900">
              Home
            </NavLink>
            <NavLink
              to="/gallery"
              activeclassname="bg-gray-700 text-white"
              className="flex items-center justify-center px-4 py-2 text-base font-medium cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-300rounded-3xl hover:text-gray-900">
              Gallery
            </NavLink>
            <NavLink
              to="/allHotels"
              activeclassname="bg-gray-700 text-white"
              className="flex items-center justify-center px-4 py-2 text-base font-medium cursor-pointer hover:bg-gray-200 dark:hover:text-gray-300 dark:hover:bg-gray-800 rounded-3xl hover:text-gray-900">
              All Hotels
            </NavLink>
          </div>
          <div className="px-2 pb-3 space-y-1 text-gray-200 sm:px-3 dark:text-gray-900">
            <NavLink
              to="/login"
              activeclassname="bg-gray-700 text-white"
              className="flex items-center justify-center px-4 py-2 text-base font-medium cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-300 rounded-3xl hover:text-gray-900">
              Sign In
            </NavLink>
            <NavLink
              to="/customer/register"
              activeclassname="bg-gray-700 text-white"
              className="flex items-center justify-center px-4 py-2 text-base font-medium cursor-pointer hover:bg-gray-200 dark:hover:text-gray-300 dark:hover:bg-gray-800 rounded-3xl hover:text-gray-900">
              Sign Up
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NormalNav;
