import React, { useEffect, useState } from "react";
import baseURL from "../../apiConfig";

const AnimationCard = ({ url, description }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  const filename = url.substring(url.lastIndexOf("/") + 1);

  useEffect(() => {
    fetch(`${baseURL}/api/hotel/images/${filename}`)
      .then((response) => {
        if (response.ok) {
          return response.blob();
        }
        throw new Error("Network response was not ok.");
      })
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        if (url) {
          setImageUrl(url);
        }
      })
      .catch((error) => {
        console.error("Error fetching image:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="w-full py-3">
      <div className="flex items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div className=" w-[220px] h-[160px] object-cover">
          {loading ? (
            <div
              className="  bg-gray-200  rounded-xl animate-pulse"
              style={{
                objectFit: "cover",
                width: "200px",
                height: "100%",
              }}></div>
          ) : (
            <img
              src={imageUrl}
              alt=""
              style={{
                objectFit: "cover",
                width: "200px",
                height: "100%",
              }}
              className="rounded-l-lg "
            />
          )}
        </div>

        <div className="flex flex-col leading-normal w-96">
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-400">
            Brandon from XYZ location
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnimationCard;
