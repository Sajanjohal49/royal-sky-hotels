import React from "react";
import AddHotel from "./AddHotel";

const Modal = ({ toggleModal, isModalOpen }) => {
  return (
    <div className="">
      <div
        className={`${
          isModalOpen ? "block" : "hidden"
        } fixed inset-0 bg-black  opacity-80`}
        onClick={toggleModal}></div>
      <div
        tabIndex="-1"
        aria-hidden="true"
        className={`fixed top-0 left-0 right-0  z-50 ${
          isModalOpen ? "block" : "hidden"
        } w-full p-10 overflow-x-hidden overflow-y-auto  md:inset-0 h-[calc(100%)]  max-h-full  max-w-[1100px] mx-auto `}>
        <div className="  dark:bg-gray-800 bg-gray-200 rounded-xl">
          <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl text-center sm:text-3xl text-defaultGreen font-euclidSemibold dark:text-orange-200">
              Add Hotel
            </h3>
            <button
              onClick={toggleModal}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="defaultModal">
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          <AddHotel />
        </div>
      </div>
    </div>
  );
};

export default Modal;
