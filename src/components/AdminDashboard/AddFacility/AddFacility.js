import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import baseURL from "../../../apiConfig";

const AddFacility = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [facilities, setFacilities] = useState([]);

  const fetchFacilities = async () => {
    try {
      const response = await axios.get(`${baseURL}/api/facility/fetch`);
      return response.data;
    } catch (error) {
      console.log("Error fetching facilities", error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      const fetchedFacilities = await fetchFacilities();
      if (fetchedFacilities) {
        setFacilities(fetchedFacilities.facilities);
      }
    };
    fetchData();
  }, [navigate]);

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
    </div>
  );
};

export default AddFacility;
