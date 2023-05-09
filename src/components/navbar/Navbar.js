import React, { useState } from "react";
import logo1 from "../svg/Rating Circled.png";

function Navbar() {
  const [clicked, setClicked] = useState(true);
  return (
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" class="flex items-center">
          <img src={logo1} alt="" className="mr-1 md:mr-3 w-11 h-11 " />

          <span class="self-center text-xl md:text-3xl font-semibold whitespace-nowrap dark:text-white font-montserrat ">
            Royal Sky Hotels
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          onClick={() => setClicked(!clicked)}
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
        <div
          class={`${clicked ? "hidden" : ""} w-full md:block md:w-auto`}
          id="navbar-default">
          <ul class="font-medium flex lg:text-base text-sm flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="/"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-emerald-600 md:p-0 dark:text-white md:dark:hover:text-emerald-500 dark:hover:bg-gray-700 dark:hover:text-emerald-500 md:dark:hover:bg-transparent">
                Home
              </a>
            </li>
            <li>
              <a
                href="/gallery"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-emerald-600 md:p-0 dark:text-white md:dark:hover:text-emerald-500 dark:hover:bg-gray-700 dark:hover:text-emerald-500 md:dark:hover:bg-transparent">
                Gallery
              </a>
            </li>
            <li>
              <a
                href="/allHotels"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-emerald-600 md:p-0 dark:text-white md:dark:hover:text-emerald-500 dark:hover:bg-gray-700 dark:hover:text-emerald-500 md:dark:hover:bg-transparent">
                All Hotels
              </a>
            </li>

            <li>
              <a
                href="/login"
                className="px-3 py-2 mr-4 text-white rounded-lg bg-emerald-600">
                Sign In
              </a>

              <a
                href="/user/register"
                className="px-3 py-2 text-white rounded-lg bg-emerald-600">
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
