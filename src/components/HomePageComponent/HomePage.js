import React from "react";

import "./homePage.scss";

import HotelsGrid from "./HotelsGrid";
import IconHr from "./IconHr";
import ContactSection from "./ContactSection";

import GetAllFacilites from "../FacilityComponent/GetAllFacilites";
import VideoAndText from "./VideoAndText";
import GetAllLocations from "../LocationComponent/GetAllLocations";

function HomePage() {
  return (
    <div className=" font-euclidRegular  bg mx-auto  ">
      <div className="relative overflow-hidden bg-[#F3F0EA] sm:px-2 lg:px-6 dark:bg-gray-900 ">
        <VideoAndText />
        <GetAllLocations />
        <HotelsGrid />
        <GetAllFacilites />
        <IconHr />

        {/* <AnimationGallery /> */}
        <ContactSection />
      </div>
    </div>
  );
}

export default HomePage;
