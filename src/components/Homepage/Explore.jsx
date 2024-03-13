import React from 'react'
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
const Explore = ({text,color,size}) => {
  
  let circleSize=size?"4":"8"
  
    color=color?"white":"black"
  return (
    <div className="explore flex items-center gap-2 mt-4 cursor-pointer">
      <div
        className={`circle bg-red-200 rounded-[50%]  w-${circleSize} h-${circleSize}`}
      ></div>
      <h1 className={`text-lg font-medium text-${color} text-${size} `}>
        {text}
        <ArrowRightAltIcon></ArrowRightAltIcon>{" "}
      </h1>
    </div>
  );
}

export default Explore
