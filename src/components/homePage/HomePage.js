import React from "react";
import myVideo from "../videos/hotelVideo.mp4";
import VideoText from "./VideoText";
import cardImage from "../images/bedroom-gc90a1b79f_1920.jpg";
import "./homePage.scss";
import BannerFeatures from "./BannerFeatures";
import Grid from "./Grid";
import IconHr from "./IconHr";
import ContactSection from "./ContactSection";
import AnimationGallery from "./AnimationGallery";
import Footer from "./Footer";

function HomePage() {
  return (
    <div className="relative">
      <div className="overflow-hidden dark:bg-gray-900 font-montserrat">
        <div className="">
          <div className=" inset-0  mt-1 overflow-hidden h-[44rem] ">
            <div className="relative items-center justify-center w-full h-full">
              <video
                className="absolute top-0 object-cover w-full h-[44rem] "
                src={myVideo}
                autoPlay
                loop
                muted></video>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-300    via-transparent via-50%   to-transparent to-90%"></div>
              <VideoText />
              <BannerFeatures />
            </div>
          </div>
        </div>
        <Grid />
        <IconHr />

        <AnimationGallery />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
