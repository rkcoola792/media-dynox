import React from 'react'
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { motion} from "framer-motion"
const Explore = ({ text, color, size, hoverColor }) => {
  

  color = color ? "white" : "black";
  hoverColor = hoverColor ? "white" : "red";
  return (
    <div className="explore flex items-center gap-2 mt-4 cursor-pointer">
      <div
        className={`circle bg-red-200 rounded-[50%] lg:w-8 lg:h-8 sm:w-6 sm:h-6 w-6 h-6 }`}
      ></div>
      <motion.h1
        className={`text-lg font-medium text-${color} text-${size}`}
        whileHover={{ x: -20, color: hoverColor }}
        transition={{ duration: 0.4 }}
      >
        {text}
        <ArrowRightAltIcon></ArrowRightAltIcon>{" "}
      </motion.h1>
    </div>
  );
};

export default Explore
