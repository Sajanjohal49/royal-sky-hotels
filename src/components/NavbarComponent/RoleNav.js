import React, { useEffect, useState } from "react";
import NormalNav from "./NormalNav";
import AdminNav from "./AdminNav";
import CustomerNav from "./CustomerNav";
import HotelManagerNav from "./HotelManagerNav";
import SkeletonNavbar from "./Skeleton/SkeletonNavbar";

const RoleNav = () => {
  const admin = JSON.parse(sessionStorage.getItem("active-admin"));
  const hotelManager = JSON.parse(
    sessionStorage.getItem("active-hotelManager")
  );
  const customer = JSON.parse(sessionStorage.getItem("active-customer"));

  if (admin != null) {
    return <AdminNav />;
  } else if (customer != null) {
    return <CustomerNav />;
  } else if (hotelManager != null) {
    return <HotelManagerNav />;
  } else {
    return <NormalNav />;
  }
};

export default RoleNav;
