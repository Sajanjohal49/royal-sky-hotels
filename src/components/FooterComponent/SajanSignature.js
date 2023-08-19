import React from "react";

import icon from "../svg/Heart Rainbow.svg";
const SajanSignature = () => {
  return (
    <div className="flex items-center justify-center w-full py-4 ">
      <div className="flex items-center mx-auto ">
        <p className="text-gray-900 md:text-lg dark:text-gray-100">
          {" "}
          &#169; 2023 Built with{" "}
        </p>
        <img src={icon} className="w-10 h-10 mx-2 " alt="" />
        <p className="text-gray-800 dark:text-gray-100">by </p>
        <p className="mx-2 text-2xl text-gray-900 md:text-3xl dark:text-gray-100 font-greatVibes ">
          Sajandeep Singh
        </p>
      </div>
    </div>
  );
};

export default SajanSignature;
