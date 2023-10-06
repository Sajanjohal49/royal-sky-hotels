import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import baseURL from "../../apiConfig";

const AddHotelFacilities = () => {
  const { hotelId } = useParams();
  const [hoteFacilities, setHoteFacilities] = useState([]); // hotel facilities
  const [facilityId, setFacilityId] = useState([]);

  const [allFacilities, setAllFacilities] = useState([]);

  const retrieveHotelFacilities = async () => {
    const response = await axios.get(
      `${baseURL}/api/facility/hotel?hotelId=` + hotelId
    );
    return response.data;
  };

  useEffect(() => {
    const getHotelFacilities = async () => {
      const allHotelFacilities = await retrieveHotelFacilities();
      if (allHotelFacilities) {
        setHoteFacilities(allHotelFacilities.facilities);
      }
    };

    getHotelFacilities();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const retrieveAllFacilities = async () => {
    const response = await axios.get(`${baseURL}/api/facility/fetch`);
    return response.data;
  };

  useEffect(() => {
    const getAllFacilities = async () => {
      const allFacilities = await retrieveAllFacilities();
      if (allFacilities) {
        setAllFacilities(allFacilities.facilities);
      }
    };

    getAllFacilities();
  }, []);

  const saveHotelFacility = (e) => {
    e.preventDefault();
    let data = { hotelId, facilityId };

    fetch(`${baseURL}/api/facility/hotel/add`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      result.json().then((res) => {
        console.log(res);

        console.log(res.responseMessage);
      });
    });

    window.location.reload(true);
  };

  return (
    <div>
      <div className=" font-euclidRegular   bg-defaultWhite dark:bg-slate-900 dark:text-gray-200 flex justify-center items-center ">
        <div className=" max-w-5xl ">
          <div className="text-center card-header bg-color custom-bg-text">
            <p className=" font-euclidBold text-2xl  ">Add Facility</p>
          </div>
          <div className="card-body text-color">
            <form onSubmit={saveHotelFacility}>
              <div className="mb-3">
                <label className=" block  py-2 form-label">
                  <b>Facility</b>
                </label>

                <select
                  name="facilityId"
                  onChange={(e) => {
                    setFacilityId(e.target.value);
                  }}
                  className="dark:text-gray-600 py-1 px-1 rounded-lg dark:bg-gray-300">
                  <option value="" className="dark:text-gray-600">
                    Select Facility
                  </option>

                  {allFacilities.map((facility) => {
                    return (
                      <option value={facility.id} key={facility.id}>
                        {" "}
                        {facility.name}{" "}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="mt-3 d-flex justify-content-center">
                <input
                  type="submit"
                  className="bg-teal-800 hover:bg-teal-900 dark:bg-orange-300 dark:text-gray-700 text-white font-bold py-1.5 px-4 rounded-lg "
                  value="Add Facility"
                />
              </div>
            </form>

            <div className="my-5 text-center">
              <h3>Selected Hotel Facilities</h3>
            </div>

            <div className="my-4 ">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-6 py-3 bg-gray-800 text-white">
                      Facility Name
                    </th>
                    <th className="px-6 py-3 bg-gray-800 text-white">
                      Facility Description
                    </th>
                  </tr>
                </thead>
                <tbody className="text-color">
                  {hoteFacilities.map((f) => {
                    return (
                      <tr key={f.id} className="border-t">
                        <td className="px-6 py-4">{f.name}</td>
                        <td className="px-6 py-4">{f.description}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddHotelFacilities;
