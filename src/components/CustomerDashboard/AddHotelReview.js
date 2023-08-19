import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import baseURL from "../../apiConfig";

const AddHotelReview = () => {
  const navigate = useNavigate();
  const customer = JSON.parse(sessionStorage.getItem("active-customer"));
  const { hotelId, locationId } = useParams();
  const [userId, setUserId] = useState("");
  const [star, setStar] = useState(0);
  const [review, setReview] = useState("");
  const handleRatingChange = (e) => {
    setStar(Number(e.target.value));
  };
  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const data = {
    star,
    review,
    hotelId,
    userId,
  };
  useEffect(() => {
    setUserId(customer.id);
  }, [customer]);
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const response = axios.post(`${baseURL}/api/hotel/review/add`, data);

      console.log(response.data);
      setStar(0);
      setReview("");
      navigate("/hotel/" + hotelId + "/location/" + locationId);
    } catch (error) {
      console.log("Add Review Error is: " + error);
    }
  };
  return (
    <div className="py-16 font-euclidRegular">
      <p className="text-3xl text-center">Add Hotel Review</p>
      <div className="flex items-center justify-center ">
        <div>
          <form onSubmit={handleSubmit}>
            <div className="">
              <label className="block text-lg" htmlFor="rating">
                Rating
              </label>
              <select
                id="rating"
                value={star}
                onChange={handleRatingChange}
                required>
                <option value={0}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
            </div>
            <div className="">
              <label className="block text-lg">Review</label>
              <textarea
                id="review"
                value={review}
                onChange={handleReviewChange}
                required
                className="px-2 py-2 rounded-full bg-defaultGreen text-defaultWhite "
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddHotelReview;
