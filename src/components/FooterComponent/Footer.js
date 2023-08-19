import React, { useEffect, useRef } from "react";

import video from "../videos/motor-boat-23011.mp4";
import FooterContent from "./FooterContent";
import Subscribe from "./Subscribe";

function Footer() {
  const videoRef = useRef(undefined);
  useEffect(() => {
    videoRef.current.defaultMuted = true;
  });
  return (
    <footer className="relative min-h-[890px]  sm:min-h-[780px]">
      <div className="items-center justify-center w-full h-full">
        <div className="absolute bottom-0 inset-0 bg-gradient-to-t  dark:from-black from-gray-100 from-30% z-50 via-transparent via-70%   to-transparent to-90%"></div>

        <video
          className="z-10 object-cover w-full h-full"
          ref={videoRef}
          src={video}
          autoPlay
          loop
          muted
          width="100%"
          height="100%"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%" /* set the width to fill the viewport */,
            height: "100%" /* set the height to fill the footer */,
          }}
        />
        <Subscribe />
        <FooterContent />
      </div>
    </footer>
  );
}

export default Footer;
