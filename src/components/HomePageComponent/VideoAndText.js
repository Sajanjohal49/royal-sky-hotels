import React, { useEffect, useRef } from "react";
import HeroText from "./HeroText";
import myVideo from "../videos/hotelVideo.mp4";
const VideoAndText = () => {
  const videoRef = useRef(undefined);
  useEffect(() => {
    videoRef.current.defaultMuted = true;
  });
  return (
    <div>
      <div className="items-center justify-center pt-2 pb-16 sm:h-screen sm:flex rounded-3xl ">
        <HeroText />
        <video
          className="  h-96 sm:relative object-cover sm:w-[56%] w-full sm:h-[34rem] rounded-bl-md  sm:rounded-bl-2xl sm:rounded-tl-[10rem] rounded-tl-[4rem] ml-10 sm:ml-0  "
          src={myVideo}
          ref={videoRef}
          autoPlay
          muted></video>
        {/* <video
            className="absolute top-0 right-0 z-10 object-cover h-screen sm:invisible rounded-3xl "
            src={smallScreenVideo}
            ref={videoRef}
            autoPlay
            loop
            muted></video> */}
      </div>
    </div>
  );
};

export default VideoAndText;
