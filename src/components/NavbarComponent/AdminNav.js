import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo2 from "../svg/LogoWhite.svg";
import logo1 from "../svg/LOGO.svg";
import { MdSpaceDashboard } from "react-icons/md";
import { RiShareForwardFill } from "react-icons/ri";
import { AiOutlineLogout } from "react-icons/ai";

const AdminNav = () => {
  let navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const adminLogout = () => {
    sessionStorage.removeItem("active-admin");
    window.location.reload(true);
    navigate("/home");
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
                to="/admin/dashboard"
                className="flex items-center justify-center px-4 py-2 text-gray-100 bg-teal-900 rounded-full dark:text-gray-900 dark:bg-orange-200 hover:ring-4 ring-orange-100 ">
                {" "}
                <span>
                  <MdSpaceDashboard className="mr-2 text-xl " />
                </span>
                <p>Go to Dashboard</p>
                <RiShareForwardFill className="ml-2 text-lg " />
              </Link>
              <button
                onClick={adminLogout}
                className="flex items-center justify-center px-4 py-2 text-gray-200 bg-teal-900 rounded-tl-xl rounded-br-xl dark:text-gray-900 dark:ring-emerald-200 dark:bg-emerald-100 hover:ring-4 ring-emerald-200">
                Logout
                <AiOutlineLogout className="ml-2 text-lg " />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex mr-4 md:top-5 top-3 right-5 md:hidden">
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
      <div
        className={`md:hidden ${isOpen ? "block" : "hidden"} `}
        id="mobile-menu"
        ref={navbarRef}>
        <div className="absolute z-20 text-gray-200 origin-top transform bg-teal-900 right-2 dark:bg-orange-200 w-fit rounded-3xl top-20 md:hidden">
          <div className="px-3 pt-2 space-y-1 text-gray-200 dark:text-gray-900 sm:px-3">
            <Link
              to="/admin/dashboard"
              className="flex px-4 py-2 text-base font-medium rounded-full cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-900 hover:text-white">
              <p>Go to Dashboard</p>
              <RiShareForwardFill className="ml-2 text-lg " />
            </Link>
          </div>
          <div className="px-2 pb-3 space-y-1 text-gray-200 sm:px-3 dark:text-gray-900">
            <button
              onClick={adminLogout}
              className="flex items-center justify-center px-4 py-2 text-base font-medium rounded-full hover:bg-gray-700 dark:hover:bg-gray-900 hover:text-white">
              <p>Logout</p>
              <AiOutlineLogout className="ml-2 text-lg " />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNav;
