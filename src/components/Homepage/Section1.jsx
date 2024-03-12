import React from 'react'
import "./section1.scss"
import Explore from './Explore';
const Section1 = () => {
  return (
    <div className=''> 
      <div className="hero-banner flex flex-col items-center pt-20 h-[500px] ">
        <div className="hero-heading flex flex-col items-center relative">
          <h1 className=" lg:text-7xl text-5xl font-bold text-main-red my-4">
            Marketing
          </h1>
          <h1 className="lg:text-7xl  text-5xl font-bold">
            <span className="font-bold  text-black stroke-red-600 with">
              With
            </span>{" "}
            Media Dynox.
          </h1>
          <div className="hero-image absolute -z-10 lg:-right-16 lg:top-1 -top-6 -right-28  bg-red-200 h-[180px] w-[180px] rounded-[50%]">
            <img
              src="/Hero-img.png"
              className="h-[100px] object-cover m-4"
              alt=""
            />
          </div>
        </div>
        <div className="hero-subheading my-8 font-medium opacity-95">
          Lorem ipsum is simply dummy text of printing and typesetting industry.
        </div>
        <Explore text="Explore"></Explore>
      </div>
    </div>
  );
}

export default Section1
