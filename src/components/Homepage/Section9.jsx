import React from 'react'
import Explore from './Explore';

const Section9 = () => {
  return (
    <div className="relative w-full h-full flex justify-center mt-24">
      <img src="/cta-banner.png" alt="" />
      <h1 className="absolute  md:text-5xl sm:text-3xl  text-white text-center lg:top-28 sm:top-20 leading-[70px] w-[50%] font-thin">
        <span className="font-bold">Lets discuss</span> make something cool
        together
      </h1>
      <div className='absolute lg:bottom-28 sm:bottom-16'>
        <Explore text="Get in touch" color="white"></Explore>
      </div>
    </div>
  );
}

export default Section9
