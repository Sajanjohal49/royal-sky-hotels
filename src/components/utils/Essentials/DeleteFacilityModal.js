import React from "react";
import { TiWarning } from "react-icons/ti";

const DeleteFacilityModal = ({ handleCancelDelete, handleConfirmDelete }) => {
  return (
    <div className=" overflow-y-auto overflow-x-hidden fixed inset-0 flex items-center justify-center z-30">
      <div className="bg-red-100  max-w-md  dark:bg-gray-800 dark:text-gray-200 text-gray-800 rounded-lg p-6  ">
        <p className="text-center  font-euclidBold text-lg py-2 ">
          Confirm Facility removal
        </p>
        <p className="text-center">
          Are you sure you want to delete this{" "}
          <span className="text-red-400  font-euclidBold">Facility</span>{" "}
          permanently?
        </p>

        <div className=" text-orange-400 text-sm px-4 py-2 bg-gray-700 my-3 rounded-lg">
          <p className=" font-euclidBold flex items-center ">
            {" "}
            <TiWarning className="mr-2" />
            Warning
          </p>
          <p className=" font-euclidRegular">
            By deleting this Facility bookings,pictures,reviews,and everything
            will also be permanently deleted.
          </p>
        </div>
        <div className="mt-4 flex justify-center w-full items-center  space-x-4 ">
          <button
            onClick={handleCancelDelete}
            className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
            No,Cancel
          </button>
          <button
            onClick={handleConfirmDelete}
            className="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900">
            Yes,confirm delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteFacilityModal;
