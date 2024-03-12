import React from 'react'
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import "./section1.scss"
const Section1 = () => {
  return (
    <div className="hero-banner flex flex-col items-center pt-20 h-screen ">
      <div className="hero-heading flex flex-col items-center">
        <h1 className="text-5xl font-bold text-red-500 my-4">Marketing</h1>
        <h1 className="text-5xl font-bold">
          <span className="font-bold  text-black stroke-red-600 with">with</span>{" "}
          Media Dynox.
        </h1>
        <div className="hero-image absolute -z-10 right-[25%] top-[25%] bg-red-200 h-[180px] w-[180px] rounded-[50%]">
          <img
            src="/Hero-img.png"
            className="h-[100px] object-cover m-4"
            alt=""
          />
        </div>
      </div>
      <div className="hero-subheading my-8 font-medium opacity-90">
        Lorem ipsum is simply dummy text of printing and typesetting industry.
      </div>
      <div className="explore flex items-center gap-2 ">
        <div className="circle h-6 bg-red-200 rounded-[50%] w-6 "></div>
        <h1>
          Explore <ArrowRightAltIcon></ArrowRightAltIcon>{" "}
        </h1>
      </div>
    </div>
  );
}

export default Section1
