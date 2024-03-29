import React from 'react'
import Explore from './Explore';
import { motion } from 'framer-motion';

const Section9 = () => {
  return (
    <div className="relative w-full  flex justify-center mt-24 px-8 ">
      <img src="/cta-banner.png" alt="" className="h-[200px] sm:h-full " />
      <motion.h1
        className="absolute top-[20%] md:text-5xl sm:text-3xl  text-white text-center lg:top-28 sm:top-20 sm:leading-[70px] sm:w-[50%] font-thin text-3xl w-[80%]"
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <span className="font-bold">Lets discuss</span> make something cool
        together
      </motion.h1>
      <motion.div
        className="absolute lg:bottom-28 sm:bottom-16 bottom-[20%]"
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Explore text="Get in touch" color="white"></Explore>
      </motion.div>
    </div>
  );
}

export default Section9
