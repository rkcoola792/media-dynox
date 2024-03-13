import React from 'react'
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Explore from './Explore';

const Section2 = () => {
  return (
    <div className=" bg-gray-100 h-[500px]  w-screen flex items-center justify gap-12 px-24 ">
      <div className="p-4 circle bg-mainred lg:h-[330px] lg:w-[330px] h-[300px] w-[300px] rounded-[50%] text-white flex justify-center items-center text-center hover:bg-[#222] transition duration-450 ease-out hover:ease-in cursor-pointer">
        <div>
          <h1 className="lg:text-3xl text-xl p-6 px-8">
            <span className="font-bold">We are creators.</span> The masterminds
            behind <span className="font-bold">great innovations.</span>
          </h1>
        </div>
      </div>

      <div className="mid-details flex flex-col gap-6 w-[300px] ">
        <h1 className="text-3xl">
          <span className="font-bold ">What</span> We Do
        </h1>
        <p className="text-sm leading-8">
          Announce your brand to the right people, at the right time with
          innovative strategies that are built for your business and you.
        </p>
        <Explore text="Explore"></Explore>
      </div>

      <div className="right-details flex flex-col gap-6 w-[300px] ">
        <h1 className="text-3xl">
          <span className="font-bold ">How</span> We Do
        </h1>
        <p className="text-sm leading-8">
          Take your business to the next level, literally, with our digital
          development solutions that give your business the global stage.
        </p>
        <Explore text="Explore"></Explore>
      </div>
    </div>
  );
}

export default Section2
