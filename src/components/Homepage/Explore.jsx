import React from 'react'
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import {easeIn, easeInOut, motion} from "framer-motion"
const Explore = ({text,color,size}) => {
    color=color?"white":"black"
  return (
    <div className="explore flex items-center gap-2 mt-4 cursor-pointer">
      <div
        className={`circle bg-red-200 rounded-[50%] w-6 h-6 }`}
      ></div>
      <motion.h1 className={`text-lg font-medium text-${color} text-${size} `}
      whileHover={{x:-20,color:"red"}}
      transition={{duration:0.4, }}
      >
        {text}
        <ArrowRightAltIcon></ArrowRightAltIcon>{" "}
      </motion.h1>
    </div>
  );
}

export default Explore
