import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import baseURL from "../../../apiConfig";
import { useQuery } from "react-query";
import DeleteFacilityModal from "../../utils/Essentials/DeleteFacilityModal";
const fetchFacilities = async () => {
  try {
    const response = await axios.get(`${baseURL}/api/facility/fetch`);
    return response.data;
  } catch (error) {
    console.log("Error fetching facilities", error);
  }
};
const AddFacility = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const [facilities, setFacilities] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false); // State to control modal visibility
  const [facilityToDelete, setFacilityToDelete] = useState(null);

  const [bodyOverflow, setBodyOverflow] = useState("auto");
  const { data: fetchedFacilities } = useQuery("facilities", fetchFacilities);

  useEffect(() => {
    if (fetchedFacilities) {
      setFacilities(fetchedFacilities.facilities);
    }
  }, [fetchedFacilities]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      description,
    };
    try {
      const response = await axios.post(`${baseURL}/api/facility/add`, data);

      setDescription("");
      setName("");
      console.log("Location Data Added Successfully " + response.data);
      navigate("/");
    } catch (error) {
      console.log("Error saving Facilty " + error);
    }
  };
  const handleDelete = (itemId) => {
    // Set the hotel to be deleted and show the delete confirmation modal
    setFacilityToDelete(itemId);
    setShowDeleteModal(true);
    setBodyOverflow("hidden");
  };
  const handleConfirmDelete = async () => {
    console.log("fac2", facilityToDelete);
    try {
      await axios.delete(`${baseURL}/api/facility/delete/${facilityToDelete}`);
      console.log(facilityToDelete);
      //  Update the local state to remove the deleted item
      setFacilities((prevFacilities) =>
        prevFacilities.filter((item) => item.id !== facilityToDelete)
      );

      // // Close the delete confirmation modal
      setShowDeleteModal(false);
    } catch (error) {
      console.error("Error deleting item:", error);
    }
    setBodyOverflow("auto");
  };

  const handleCancelDelete = () => {
    // Clear the hotel to be deleted and close the delete confirmation modal
    setFacilityToDelete(null);
    setShowDeleteModal(false);
    setBodyOverflow("auto");
  };
  return (
    <div className=" mx-auto  w-full max-w-[700px] ">
      <div>
        <p className="text-xl text-center sm:text-3xl text-defaultGreen font-euclidSemibold dark:text-orange-200">
          Add Facility
        </p>
        <form
          onSubmit={handleSubmit}
          className="mx-16 text-orange-900 md:mx-2 dark:text-orange-200">
          <div className="mb-4">
            <label className="block my-2 ">Name</label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            />
          </div>
          <div className="mb-4">
            <label className="block my-2 ">Description</label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              value={description}
            />
          </div>
          <button className="px-5 py-2 text-white rounded-full bg-defaultGreen dark:bg-emerald-200 dark:text-gray-900 hover:bg-blue-600">
            Submit
          </button>
        </form>
      </div>
      <div className=" sm:my-12  my-2  ">
        {facilities.length > 0 ? (
          <div className="relative overflow-x-auto">
            <p className="text-xl  sm:my-6 my-2 text-center sm:text-3xl text-defaultGreen font-euclidSemibold dark:text-orange-200">
              All Facilities
            </p>
            <table className="w-full text-sm text-left text-gray-500 dark:text-emerald-200">
              <thead className="text-xs uppercase bg-defaultGreen text-defaultWhite dark:bg-emerald-200 dark:text-gray-900">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Facility Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Description
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {facilities.map((item) => {
                  return (
                    <tr
                      key={item.id}
                      className={`    dark:text-gray-200 text-gray-900 border-b 
                   dark:border-gray-700`}>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium whitespace-nowrap ">
                        {item.name}
                      </th>

                      <td className="px-6 py-4">{item.description}</td>
                      <td className="px-6 py-4">
                        {" "}
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg ">
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-xl  sm:my-6 my-2 text-center sm:text-3xl text-defaultGreen font-euclidSemibold dark:text-orange-200">
            No Facility
          </p>
        )}
      </div>
      {showDeleteModal && (
        <DeleteFacilityModal
          handleConfirmDelete={handleConfirmDelete}
          handleCancelDelete={handleCancelDelete}
        />
      )}
      <style>{`body { overflow: ${bodyOverflow}; }`}</style>
    </div>
  );
};

export default AddFacility;
