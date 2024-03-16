import React from 'react'
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Explore from './Explore';

const Section2 = () => {
  return (
    <div className="bg-gray-100 sm:h-[500px] px-8  w-screen sm:flex sm:flex-row  lg:gap-12 sm:gap-6  md:gap-8 lg:px-24 sm:px-12  py-24 sm:py-0 flex flex-col items-center justify-center gap-8 ">
      <div className=" py-4 px-2 circle bg-mainred lg:h-[330px] lg:w-[330px] sm:h-[230px] sm:w-[230px] rounded-[50%] text-white flex justify-center items-center text-center hover:bg-[#222] h-[300px] w-[300px] transition duration-450 ease-out hover:ease-in cursor-pointer">
        <div className="sm:p-2 p- ">
          <h1 className="lg:text-2xl xl:text-3xl sm:text-lg  p-6 px-8 text-2xl leading-9 ">
            <span className="font-bold">We are creators.</span> The masterminds
            behind <span className="font-bold">great innovations.</span>
          </h1>
        </div>
      </div>

      <div className="mid-details flex items-start flex-col lg:gap-6 sm:gap-3  w-[300px] gap-4">
        <h1 className="lg:text-3xl sm:text-2xl text-2xl">
          <span className="font-bold ">What</span> We Do
        </h1>
        <p className="lg:text-md lg:leading-8 sm:leading-7 leading-7">
          Announce your brand to the right people, at the right time with
          innovative strategies that are built for your business and you.
        </p>
        <div className="scale-110  sm:scale-100 sm:px-0">
          <Explore text="Explore"></Explore>
        </div>
      </div>

      <div
        className="right-details flex flex-col items-start lg:gap-6 sm:gap-3 sm:w-[300px] pl-4 gap-4
       "
      >
        <h1 className="lg:text-3xl sm:text-2xl text-2xl">
          <span className="font-bold ">How</span> We Do
        </h1>
        <p className="lg:text-md  lg:leading-8 sm:leading-7 xl:w-[350px] leading-7">
          Take your business to the next level, literally, with our digital
          development solutions that give your business the global stage.
        </p>
        <div className="scale-110 px- sm:scale-100 sm:px-0">
          <Explore text="Explore"></Explore>
        </div>
      </div>
    </div>
  );
}

export default Section2
