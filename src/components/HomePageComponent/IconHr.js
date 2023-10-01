import React from "react";
import image from "../images/window-g10248cf68_1920.jpg";

const IconHr = () => {
  return (
    <div className="mx-2 sm:my-24  my-10 text-center lg:mx-24 px-1 ">
      <div className="flex items-center justify-center mb-10 max-w-5">
        <div>
          <h1 className="mb-4 text-4xl font-extrabold    leading-relaxed text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
            <mark className="px-2 rounded dark:bg-orange-200 text-white dark:text-slate-900 bg-teal-900">
              Take Charge
            </mark>{" "}
            of your vacation days
          </h1>
          <p className="max-w-4xl font-bold text-gray-600 lg:text-md px-9 dark:text-gray-400">
            we concentrate on providing a unique experience where comfort,
            luxury, and innovation come together to create unforgettable
            memories that add long-term value to your travels.
          </p>
        </div>
      </div>

      <div className="items-center justify-center space-x-4 border border-gray-300 lg:flex rounded-xl dark:bg-transparent dark:border-gray-700">
        <img
          className="h-auto rounded-lg lg:max-w-2xl "
          src={image}
          alt="imageDescription"
        />
        <div className="px-3 py-3 ">
          <p className="max-w-3xl text-gray-600 dark:text-gray-400">
            Immerse yourself in the beauty of our stylishly designed rooms and
            suites, each offering breathtaking views of the surrounding
            landscape. Unwind in our serene spa, or indulge in a culinary
            adventure at one of our world-class restaurants.
          </p>
          <div className="grid items-center w-full mt-8 ">
            <div className="mx-auto bg-white dark:bg-gray-900">
              <svg
                aria-hidden="true"
                className="w-5 h-5 mx-auto text-gray-700 dark:text-gray-300"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            <hr className="h-1 mx-auto my-8 bg-gray-200 border-0 rounded w-44 dark:bg-gray-700" />
          </div>
          <p className="max-w-3xl text-gray-600 dark:text-gray-400">
            Our attentive staff are dedicated to ensuring that your every need
            is met, whether you're here for business or pleasure. With a wide
            range of amenities and services at your fingertips, you'll feel
            right at home in our luxurious surroundings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IconHr;
