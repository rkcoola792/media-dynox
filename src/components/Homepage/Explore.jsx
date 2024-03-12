import React from 'react'
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
const Explore = ({text}) => {
  return (
    
      <div className="explore flex items-center gap-2 mt-6">
        <div className="circle h-6 bg-red-200 rounded-[50%] w-6 "></div>
        <h1 className='text-sm '>
          {text}<ArrowRightAltIcon></ArrowRightAltIcon>{" "}
        </h1>
      </div>
    
  );
}

export default Explore
