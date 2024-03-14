import React from 'react'
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Explore from './Explore';

const Section2 = () => {
  return (
    <div className="bg-gray-100 h-[500px]  w-screen flex items-center justify-center lg:gap-12 sm:gap-6 mt-6 md:gap-8 lg:px-24 sm:px-12 ">

<div className="py-4 px-2 circle bg-mainred lg:h-[330px] lg:w-[330px] sm:h-[230px] sm:w-[230px] rounded-[50%] text-white flex justify-center items-center text-center hover:bg-[#222] transition duration-450 ease-out hover:ease-in cursor-pointer">
        <div className="sm:p-2">
          <h1 className="lg:text-2xl xl:text-3xl sm:text-lg  p-6 px-8 ">
            <span className="font-bold">We are creators.</span> The masterminds
            behind <span className="font-bold">great innovations.</span>
          </h1>
        </div>
      </div>

      <div className="mid-details flex flex-col lg:gap-6 sm:gap-3  w-[300px] ">
        <h1 className="lg:text-3xl sm:text-2xl">
          <span className="font-bold ">What</span> We Do
        </h1>
        <p className="lg:text-md lg:leading-8 sm:leading-7">
          Announce your brand to the right people, at the right time with
          innovative strategies that are built for your business and you.
        </p>
        <div className=''>
          <Explore text="Explore"></Explore>
        </div>
      </div>

      <div className="right-details flex flex-col lg:gap-6 sm:gap-3 sm:w-[300px] 
       ">
        <h1 className="lg:text-3xl sm:text-2xl">
          <span className="font-bold ">How</span> We Do
        </h1>
        <p className="lg:text-md lg:leading-8 sm:leading-7 lg:w-[350px]">
          Take your business to the next level, literally, with our digital
          development solutions that give your business the global stage.
        </p>
        <Explore text="Explore"></Explore>
      </div>
    </div>
  );
}

export default Section2
