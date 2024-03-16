import React from 'react'
import "./section1.scss"
import Explore from './Explore';
const Section1 = () => {
  return (
    <div className='mb-44'> 
      <div className="hero-banner flex flex-col items-center pt-20 sm:h-[470px]  ">
        <div className="hero-heading flex flex-col items-center relative text-center">
          <h1 className=" lg:text-7xl sm:text-5xl  text-4xl font-bold text-mainred my-4 ">
            Marketing
          </h1>
          <h1 className="lg:text-7xl  text-4xl font-bold">
            <span className="font-bold  text-black stroke-red-600 with">
              With
            </span>{" "}
            Media Dynox.
          </h1>
          <div className="hero-image sm:absolute mt-6 sm:mt-0 -z-10 lg:-right-16 lg:top-1 top-24 right-28  bg-red-200 md:h-[180px] md:w-[180px] h-[140px] w-[140px] sm:-top-1 md:-top-8 md:-right-24  sm:block sm:-right-16 rounded-[50%] flex justify-center items-center">
            <img
              src="/Hero-img.png"
              className="sm:h-[75px] md:h-[100px] object-cover sm:m-4 h-[100px] "
              alt=""
            />
          </div>
        </div>
        <div className="hero-subheading my-8 font-medium opacity-95 sm:px-24 px-12 text-center  ">
          Lorem ipsum is simply dummy text of printing and typesetting industry.
        </div>
        <Explore text="Explore" ></Explore>
      </div>
    </div>
  );
}

export default Section1
