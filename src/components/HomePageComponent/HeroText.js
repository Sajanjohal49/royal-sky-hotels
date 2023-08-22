import React from "react";
import { useMediaQuery } from "react-responsive";
import "./homePage.scss";
import "./HomePage.css";
import { motion } from "framer-motion";
import Icon from "../svg/Earth Planet.svg";
import { RiArrowRightLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function HeroText(props) {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 640px)" });
  // const [isDarkMode, setIsDarkMode] = useState(false);

  // useEffect(() => {
  //   const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");

  //   const handleDarkModeChange = (event) => {
  //     setIsDarkMode(event.matches);
  //   };

  //   darkModeQuery.addEventListener("change", handleDarkModeChange);
  //   setIsDarkMode(darkModeQuery.matches);

  //   return () => {
  //     darkModeQuery.removeEventListener("change", handleDarkModeChange);
  //   };
  // }, []);

  return (
    <div
      className={`  w-full px-5 sm:relative pt-12 sm:pt-0    sm:w-1/2 font-euclidRegular  ${
        isSmallScreen
          ? "dark:text-gray-200"
          : " text-defaultGreen dark:text-gray-200"
      }`}>
      <div className={` `}>
        <p className="text-3xl font-light leading-loose tracking-wide sm:text-3xl lg:text-5xl lg:py-5">
          Enjoy Your
        </p>
        <h1 className="text-5xl font-bold font-euclidSemibold sm:pt-2 lg:pt-0 lg:text-6xl">
          Dream <span className="font-semibold ">Vacation.</span>
        </h1>
      </div>
      <div className="text-sm dark:text-orange-100/80 sm:leading-7 md:text-base pt-7 md:pt-8">
        <p>
          Relax in style and immerse yourself in luxury and comfort at our
          exquisite hotel, where every detail has been designed with your
          relaxation in mind.
        </p>
      </div>
      <div className="pt-16">
        <div className="flex items-center font-bold border-orange-300 border-solid max-w-fit rounded-xl">
          <img className="w-12 h-12 mr-2" src={Icon} alt="VIP" /> World's Best
          Hotels and Resorts
        </div>
      </div>
      <div className="max-w-[19rem] py-2 my-12 text-center text-gray-00 rounded-full  dark:bg-orange-200 bg-teal-900     ">
        <Link to="/allHotels">
          <button className="flex items-center justify-center mx-auto text-lg text-gray-200 dark:text-gray-900">
            Explore All Hotels
            <div>
              <motion.div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
                animate={{
                  x: [0, 20, 20], // Array of values to animate between
                }}
                transition={{
                  duration: 1.6, // Duration of each iteration
                  repeat: Infinity, // Repeat infinitely
                  ease: "linear", // Linear easing
                }}>
                <RiArrowRightLine className="ml-2 text-xl" />
              </motion.div>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HeroText;
