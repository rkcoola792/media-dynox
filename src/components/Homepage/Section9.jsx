import React from 'react'
import Explore from './Explore';

const Section9 = () => {
  return (
    <div className="relative w-full h-full flex justify-center mt-32">
      <img src="/cta-banner.png" alt="" />
      <h1 className="absolute text-5xl text-white text-center top-24 leading-[70px] w-[45%] font-thin">
        <span className="font-bold">Lets discuss</span> make something cool
        together
      </h1>
      <div className='absolute bottom-28'>
        <Explore text="Get in touch" color="white"></Explore>
      </div>
    </div>
  );
}

export default Section9
