import React from 'react'
import Step from './Step';
import Explore from './Explore';
import { motion } from 'framer-motion';

const Section6 = () => {
    const stepTitles = [
      "Join exploration call",
      "Join Discuss solution and team structure",
      "Get started and track performance"
    ];
    const subheading="Tell us more about your business on a discovery call. We ll discussteam structure and approach, success criteria, timescale, budget,and required skill sets to see how we can help."

  return (
    <div className="section-6 mt-24 md:flex ">
      <div className="left md:w-[50%] sm:px-24 px-8 sm:pr-32  flex flex-col gap-12">
        <h1 className="sm:text-4xl leading-10 text-3xl text-center sm:text-left  ">
          <span className="font-semibold md:text-left sm:text-center">
            Our Process.
          </span>{" "}
          Simple Seamless and Streamlined.
        </h1>
        <p className="text-gray-700 sm:text-justify leading-7">
          Announce your brand to the right people, at the right time with
          innovative strategies that are built for your business and you.
          Announce your brand to the right people, at the right time with
          innovative strategies that are built for your business and you.
        </p>
      </div>
      <div className="right md:w-1/2 sm:mt-12 md:mt-0 flex flex-col gap-6 sm:pr-24 pr-12 ml-1  sm:ml-24 relative mt-8 px-8">
        <Step title={stepTitles[0]} subheading={subheading} step="01"></Step>
        <Step title={stepTitles[1]} subheading={subheading} step="02"></Step>
        <Step title={stepTitles[2]} subheading={subheading} step="03"></Step>
        <div className="sm:hidden md:block absolute vertical-dotted-line h-[97%] border border-gray-500 border-1 left-10 -z-10 top-2 hidden border-dashed ml-8"></div>
        <div className="relative flex">
          <div className="sm:hidden md:block horizontal-border absolute h-0 w-20 border border-gray-500 border-1 left-10 bottom-3 -z-10 hidden   border-dashed"></div>
          <motion.div
            className="sm:ml-32"
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Explore text="Read More"></Explore>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Section6
