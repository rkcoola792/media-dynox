import React from 'react'
import Explore from './Explore';

const Section8 = () => {
  return (
    <div className="section-8 lg:flex gap-6 md:px-24 sm:px-12 pr-36 mt-16 lg:h-[520px] justify-center items-center my-12">
      <div className="left lg:w-[30%] lg:text-left sm:text-center  lg:flex lg:flex-col gap-44 ">
        <h1 className="lg:text-4xl sm:text-2xl md:text-3xl ">
          <span className="font-semibold">Explore</span> recent Blogs for a view
        </h1>
        <div className="sm:ml-[40%] sm:mt-6  lg:ml-0 lg:mt-0">
          <Explore text="More Blogs "></Explore>
        </div>
      </div>
      <div className="right lg:flex lg:w-[70%] lg:gap-4 lg:pr-24 sm:mt-8 ">
        <div className="container-1-img sm:ml-32 lg:ml-0 sm:mb-8 lg:mb-0 ">
          <div className="img-1 sm:w-[600px] lg:w-[250px] relative overflow-hidden cursor-pointer  ">
            <img
              src="/img4.jpg"
              alt=""
              className="sm:h-[250px] lg:h-[350px] object-cover hover:scale-110 transition-all duration-500 "
            />
            <div className="absolute text-white bottom-4 ml-6 text-opacity-90">
              <h1 className="text-sm">December 14,2023</h1>
              <p className="w-[85%]">
                {" "}
                A roadmap for building a business chatbot
              </p>
            </div>
          </div>
        </div>
        <div className="container-2-img sm:ml-32 lg:ml-0 sm:mb-8 lg:mb-0">
          <div className="img-1 sm:w-[600px] lg:w-[250px]  overflow-hidden relative cursor-pointer ">
            <img
              src="/img5.jpg"
              alt=""
              className="sm:h-[250px] lg:h-[350px] object-cover hover:scale-110 transition-all duration-500"
            />
            <div className="absolute text-white bottom-4 ml-6 text-opacity-90">
              <h1 className="text-sm">December 14,2023</h1>
              <p className="w-[85%]">
                {" "}
                A roadmap for building a business chatbot
              </p>
            </div>
          </div>
        </div>
        <div className="container-3-img sm:ml-32 lg:ml-0 sm:mb-8 lg:mb-0">
          <div className="img-1 sm:w-[600px] lg:w-[250px] h-[px] relative overflow-hidden cursor-pointer">
            <img
              src="/img6.jpg"
              alt=""
              className="sm:h-[250px] lg:h-[350px] object-cover hover:scale-110 transition-all duration-500"
            />
            <div className="absolute text-white bottom-4 ml-6 text-opacity-90">
              <h1 className="text-sm">December 14,2023</h1>
              <p className="w-[85%]">
                {" "}
                A roadmap for building a business chatbot
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section8
