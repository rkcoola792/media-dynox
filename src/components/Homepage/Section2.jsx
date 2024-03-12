import React from 'react'
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Explore from './Explore';

const Section2 = () => {
  return (
    <div className="h-[400px]">
      <div className=" bg-gray-100 h-[320px]  w-screen flex items-center justify-center gap-12 ">
        <div className="py-8  m-8   left-circle bg-main-red h-[260px] w-[260px] rounded-[50%] text-white flex justify-center items-center">
          <div>
            <h1 className="text-xl p-8 px-12">
              <span className="font-bold">We are creators.</span> The
              masterminds behind{" "}
              <span className="font-bold">great innovations.</span>
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
          <div className="explore flex items-center gap-2 ">
            <div className="circle h-6 bg-red-200 rounded-[50%] w-6 "></div>
            <h1>
              Explore <ArrowRightAltIcon></ArrowRightAltIcon>{" "}
            </h1>
          </div>
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
    </div>
  );
}

export default Section2
