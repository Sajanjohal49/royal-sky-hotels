import React, { useState } from "react";
import AllHotelsTable from "../DataTables/AllHotelsTable";

import Modal from "./Modal";

const AllHotels = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };
  return (
    <div className="mx-auto max-w-[1100px]   ">
      <button
        onClick={toggleModal}
        className="flex items-end   text-green-800 border-green-700 border-2 dark:text-green-500 dark:border-green-600 rounded-lg text-sm px-5 py-2.5 text-center   ml-auto"
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
