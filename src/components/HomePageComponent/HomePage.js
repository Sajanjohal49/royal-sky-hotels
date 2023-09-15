import React from "react";

import "./homePage.scss";

import HotelsGrid from "./HotelsGrid";
import IconHr from "./IconHr";
import ContactSection from "./ContactSection";
import GetAllLocations from "../LocationComponent/GetAllLocations";
import GetAllFacilites from "../FacilityComponent/GetAllFacilites";
import VideoAndText from "./VideoAndText";

function HomePage() {
  return (
    <div className=" font-euclidRegular max-w-[1500px]">
      <div className="relative overflow-hidden bg-[#F3F0EA] sm:px-2 lg:px-6 dark:bg-gray-900">
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
