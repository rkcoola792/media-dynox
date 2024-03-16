import React from 'react'
import Explore from './Explore';

const Section9 = () => {
  return (
    <div className="relative w-full  flex justify-center mt-24 px-8 ">
      <img src="/cta-banner.png" alt="" className='h-[200px] sm:h-full ' />
      <h1 className="absolute top-[20%] md:text-5xl sm:text-3xl  text-white text-center lg:top-28 sm:top-20 sm:leading-[70px] sm:w-[50%] font-thin text-3xl w-[80%]">
        <span className="font-bold">Lets discuss</span> make something cool
        together
      </h1>
      <div className='absolute lg:bottom-28 sm:bottom-16 bottom-[20%]'>
        <Explore text="Get in touch" color="white"></Explore>
      </div>
    </div>
  );
}

export default Section9
