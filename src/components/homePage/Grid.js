import React from "react";
import Card from "./Card";

import image1 from "../images/ciudad-maderas-MXbM1NrRqtI-unsplash.jpg";

import image2 from "../images/apartment-1822409_1920.jpg";

import image3 from "../images/apartment-2558277_1920.jpg";

import image4 from "../images/bed-1834327_1920.jpg";

import image5 from "../images/bedroom-gc90a1b79f_1920.jpg";

import image6 from "../images/hotel-1979406_1920.jpg";

import image7 from "../images/room-4768551_1920.jpg";

import image8 from "../images/wall-416060_1280.jpg";

function Grid(props) {
  return (
    <div className="px-2 sm:px-10">
      <div className="flex flex-wrap items-center justify-center py-4 md:py-8 ">
        <button
          type="button"
          className="text-emerald-600 hover:text-white border border-emerald-500 bg-white hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-emerald-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-emerald-500 dark:text-emerald-500 dark:hover:text-white dark:hover:bg-emerald-500 dark:bg-gray-900 dark:focus:ring-emerald-800">
          All Locations
        </button>
        <button
          type="button"
          className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">
          Toronto
        </button>
        <button
          type="button"
          className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">
          Mississauga
        </button>
        <button
          type="button"
          className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">
          Etobicoke
        </button>
        <button
          type="button"
          className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">
          London
        </button>
      </div>
      <div className="grid items-center justify-center grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:px-10">
        <Card
          cardImage={image1}
          name="Holiday Inn"
          location="Toronto"
          price="39"
        />
        <Card
          cardImage={image2}
          name="Holiday Inn"
          location="Toronto"
          price="39"
        />
        <Card
          cardImage={image3}
          name="Holiday Inn"
          location="Toronto"
          price="39"
        />
        <Card
          cardImage={image4}
          name="Holiday Inn"
          location="Toronto"
          price="39"
        />
        <Card
          cardImage={image5}
          name="Holiday Inn"
          location="Toronto"
          price="39"
        />
        <Card
          cardImage={image6}
          name="Holiday Inn"
          location="Toronto"
          price="39"
        />
        <Card
          cardImage={image7}
          name="Holiday Inn"
          location="Toronto"
          price="39"
        />
        <Card
          cardImage={image8}
          name="Holiday Inn"
          location="Toronto"
          price="39"
        />
      </div>
    </div>
  );
}

export default Grid;
