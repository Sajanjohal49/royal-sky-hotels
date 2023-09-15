import React, { useEffect, useState } from "react";
import "./homePage.scss";
import AnimationCard from "./AnimationCard";
import baseURL from "../../apiConfig";
import axios from "axios";

const AnimationGallery = () => {
  const [hotelsData, setHotelsData] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.get(`${baseURL}/api/hotel/fetch`);
        setHotelsData(response.data.hotels);
      } catch (error) {
        console.error("Error fetching hotels:", error);
      }
    };

    fetchHotels();
  }, []);
  console.log(hotelsData.length);

  return (
    <div className=" pb-12">
      {hotelsData.length > 7 &&
        [1, 2, 3].map((containerIndex) => (
          <div
            key={containerIndex}
            className={`image-container image-container${containerIndex} overflow-hidden w-[7000px] `}>
            <div className="flex items-center gap-6 fullLine">
              {hotelsData.map((item, index) => {
                const { image1, image2, image3, description } = item;
                let imageUrl;
                if (containerIndex === 1) {
                  imageUrl = image1;
                } else if (containerIndex === 2) {
                  imageUrl = image2;
                } else if (containerIndex === 3) {
                  imageUrl = image3;
                }
                return (
                  <div key={index}>
                    <AnimationCard url={imageUrl} description={description} />
                  </div>
                );
              })}
            </div>
          </div>
        ))}
    </div>
  );
};

export default AnimationGallery;
