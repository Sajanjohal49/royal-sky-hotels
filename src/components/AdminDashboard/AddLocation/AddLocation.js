import React, { useState } from "react";
import axios from "axios";

function AddLocation() {
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");
  const [cityError, setCityError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formIsValid = true;

    if (!city) {
      setCityError("City field is required.");
      formIsValid = false;
    } else {
      setCityError("");
    }

    if (!description) {
      setDescriptionError("Description field is required.");
      formIsValid = false;
    } else {
      setDescriptionError("");
    }

    if (!formIsValid) {
      return;
    }
    const data = {
      city: city,
      description: description,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/api/location/add",
        data
      );

      console.log("Location data saved successfully:", response.data);

      // Reset the form fields and error messages after successful submission
      setCity("");
      setDescription("");
      setCityError("");
      setDescriptionError("");
    } catch (error) {
      console.error("Error saving location data:", error);
    }
  };

  return (
    <div className="flex items-center justify-center max-w-[800px] mx-auto mb-8 sm:mb-10">
      <div className="w-full sm:mx-20">
        {" "}
        <p className="mx-auto my-2 text-3xl text-center dark:text-orange-200 sm:my-10 font-euclidSemibold text-defaultGreen">
          Add Location
        </p>
        <form
          onSubmit={handleSubmit}
          className="text-yellow-900/70 dark:text-gray-200">
          <div className="mb-4">
            <label htmlFor="city" className="block mb-1">
              City:
            </label>
            <input
              className={`px-4 py-2 border text-gray-900 w-full rounded-full ${
                cityError ? "border-red-500" : "border-gray-300"
              } rounded`}
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            {cityError && <p className="text-red-500">{cityError}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block mb-1">
              Description:
            </label>
            <textarea
              id="description"
              className={`px-4 py-2 w-full text-gray-900 border rounded-3xl ${
                descriptionError ? "border-red-500" : "border-gray-300"
              } rounded`}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            {descriptionError && (
              <p className="text-red-500">{descriptionError}</p>
            )}
          </div>
          <button
            type="submit"
            className="px-5 py-2 text-white rounded-full bg-defaultGreen dark:bg-emerald-200 dark:text-gray-900 hover:bg-blue-600">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddLocation;
