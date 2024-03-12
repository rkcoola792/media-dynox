import React from 'react'
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
const Explore = ({text}) => {
  return (
    
      <div className="explore flex items-center gap-2 mt-4">
        <div className="circle h-8 bg-red-200 rounded-[50%] w-8 "></div>
        <h1 className='text-lg font-medium '>
          {text}<ArrowRightAltIcon></ArrowRightAltIcon>{" "}
        </h1>
      </div>
    
  );
}

export default Explore
