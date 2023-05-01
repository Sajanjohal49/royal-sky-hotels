import * as React from "react";
import { motion } from "framer-motion";

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)",
  },
};

export const Letter = () => (
  <div className="container ">
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 120"
      className="item">
      <motion.path
        d="M10 10v100h20v-40h40v40h20v-100h-20v40h-40v-40z"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 4, ease: "easeInOut" },
          fill: { duration: 4, ease: [1, 0, 0.8, 1] },
        }}
      />
    </motion.svg>
  </div>
);
