import React, { useState } from "react";
import ImageWithUrl from "./ImageWithUrl";
import { Link } from "react-router-dom";

function Card(hotel) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="py-4 mx-auto sm:mx-0">
      <div className="w-full max-w-sm pb-6 min-w-[80vw] sm:min-w-full border-gray-200 rounded-xl dark:bg-transparent dark:border-gray-700">
        {/* <Link to={`/hotel/${hotel.item.id}/location/${hotel.item.location.id}`}>
          {" "} */}
        <ImageWithUrl
          currentImageIndex={currentImageIndex}
          setCurrentImageIndex={setCurrentImageIndex}
          url={
            currentImageIndex === 0
              ? hotel.item.image1
              : currentImageIndex === 1
              ? hotel.item.image2
              : hotel.item.image3
          }
        />
        {/* </Link> */}

        <div className="pt-5 ">
          <div className="font-semibold tracking-tight text-gray-900 capitalize te dark:text-white">
            <Link
              to={`/hotel/${hotel.item.id}/location/${hotel.item.location.id}`}>
              <span className="">{hotel.item.name}</span>
            </Link>
            {/* <LocationBasedNavigator
                item={{
                  id: hotel.item.location.id,
                  city: hotel.item.location.city,
                }}
              /> */}
          </div>

          <div>
            <div>
              <div className="">
                <p className="text-sm font-medium tracking-tight text-gray-600 capitalize dark:text-white">
                  {hotel.item.location.city}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center mt-2.5 mb-5 ">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <title>First star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <title>Second star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <title>Third star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <title>Fourth star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <title>Fifth star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              5.0
            </span>
          </div>
          <div className="flex items-center justify-between ">
            <Link
              to={`/hotel/${hotel.item.id}/location/${hotel.item.location.id}`}
              className="px-4 py-1.5 text-sm font-medium text-center text-gray-100 dark:text-gray-900  border-2 bg-teal-900 rounded-full border-teal-900  hover:text-gray-200 hover:bg-gray-900  hover:border-gray-900 dark:bg-orange-200 dark:hover:border-emerald-300 dark:hover:bg-transparent hover:border-transparent dark:border-orange-200 dark:hover:text-emerald-200 focus:ring-4 focus:outline-none focus:ring-teal-600 dark:focus:ring-emerald-800">
              Book Now
            </Link>
            <div className="flex items-baseline text-gray-900 dark:text-white">
              <span className="text-xl font-light ">$</span>
              <span className="text-2xl font-extrabold tracking-tight font-euclidSemibold ">
                {hotel.item.pricePerDay}
              </span>
              <span className="ml-1 text-sm font-bold text-gray-500 dark:text-gray-400">
                /night
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
