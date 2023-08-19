import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddFacility = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      description,
    };
    try {
      const response = await axios.post(
        "http://localhost:8080/api/facility/add",
        data
      );

      setDescription("");
      setName("");
      console.log("Location Data Added Successfully " + response.data);
      navigate("/");
    } catch (error) {
      console.log("Error saving Facilty " + error);
    }
  };
  return (
    <div className="max-w-[700px] mx-auto ">
      <p className="text-xl text-center sm:text-3xl text-defaultGreen font-euclidSemibold dark:text-orange-200">
        Add Facility
      </p>
      <form
        onSubmit={handleSubmit}
        className="mx-16 text-orange-900 md:mx-2 dark:text-orange-200">
        <div className="mb-4">
          <label className="block my-2 ">Name</label>
          <input
            className="w-full px-4 py-2 text-gray-900 border rounded-full border-defaultGreen/30"
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
            className="w-full px-4 py-2 text-gray-900 border rounded-full border-defaultGreen/30"
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
  );
};

export default AddFacility;
