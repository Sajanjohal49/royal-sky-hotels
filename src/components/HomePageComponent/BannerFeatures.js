import React from "react";
import { ReactComponent as Icon } from "../svg/Lunch.svg";
import "./homePage.scss";

import Icon1 from "../svg/VIP.svg";

import Icon2 from "../svg/Reception.svg";

const BannerFeatures = () => {
  return (
    <div>
      <div className="overflow-hidden">
        <div className="absolute inset-x-0 mx-auto overflow-auto sm:h-32 lg:w-3/4 bottom-2 sm:bottom-12 rounded-xl">
          <div className="px-10 ">
            {" "}
            <li className="flex-wrap items-center justify-between mb-6 sm:flex dark:text-white ">
              <ul className="flex items-center px-3 py-2 bg-slate-900 rounded-xl">
                <Icon className="w-8 h-8 mr-2" />{" "}
                <p className="text-sm font-semibold text-gray-100 ">
                  {" "}
                  Modern Elegance
                </p>
              </ul>
              <ul className="flex items-center px-3 py-2 my-2 text-gray-100 rainbow">
                <img
                  className="w-8 h-8 mr-2 text-white"
                  src={Icon1}
                  alt="VIP"
                />{" "}
                <p className="text-sm font-semibold "> Luxury comfort</p>
              </ul>
              <ul className="flex items-center px-3 py-2 my-2 rounded-xl bg-slate-900 ">
                <img className="w-8 h-8 mr-2" src={Icon2} alt="reception" />{" "}
                <p className="text-sm font-semibold text-slate-100">
                  {" "}
                  Best Amenities
                </p>
              </ul>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerFeatures;
