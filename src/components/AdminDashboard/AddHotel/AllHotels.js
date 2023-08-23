import React, { useState } from "react";
import AllHotelsTable from "../../DataTables/AllHotelsTable";
import AddHotel from "./AddHotel";
import Modal from "./Modal";
import { AiOutlineLogout } from "react-icons/ai";

const AllHotels = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };
  return (
    <div className="mx-auto max-w-[1100px]   ">
      <button
        onClick={toggleModal}
        className="flex items-end text-white bg-teal-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-200 dark:hover:bg-orange-300 dark:focus:ring-orange-500 dark:text-slate-900 ml-auto"
        type="button">
        Add Hotel
      </button>

      <AllHotelsTable />
      <div className=" bg-slate-900">
        <Modal isModalOpen={isModalOpen} toggleModal={toggleModal} />
      </div>
    </div>
  );
};

export default AllHotels;
