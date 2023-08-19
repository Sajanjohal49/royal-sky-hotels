import React from "react";
import { MdPendingActions } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";

const BookingStatus = ({ status }) => {
  let icon;
  const lowerCaseStatus = status.toLowerCase();

  // Set the appropriate icon based on the status
  if (lowerCaseStatus === "pending") {
    icon = <MdPendingActions className="w-5 h-5 mr-2 " />;
  } else if (lowerCaseStatus === "cancelled") {
    icon = <MdOutlineCancel className="w-5 h-5 mr-2 " />;
  } else if (lowerCaseStatus === "confirmed") {
    icon = <GiConfirmed className="w-5 h-5 mr-2 " />;
  }

  return <div className="">{icon}</div>;
};

export default BookingStatus;
