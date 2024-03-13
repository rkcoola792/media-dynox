import React from 'react'
import Step from './Step';
import Explore from './Explore';
const Section6 = () => {
    const stepTitles = [
      "Join exploration call",
      "Join Discuss solution and team structure",
      "Get started and track performance"
    ];
    const subheading="Tell us more about your business on a discovery call. We ll discussteam structure and approach, success criteria, timescale, budget,and required skill sets to see how we can help."

  return (
    <div className="section-6 mt-24 flex">
      <div className="left w-[50%] px-24 pr-32 flex flex-col gap-12">
        <h1 className="text-4xl leading-10  ">
          <span className="font-semibold">Our Process.</span> Simple Seamless
          and Streamlined.
        </h1>
        <p className="text-gray-700">
          Announce your brand to the right people, at the right time with
          innovative strategies that are built for your business and you.
          Announce your brand to the right people, at the right time with
          innovative strategies that are built for your business and you.
        </p>
      </div>
      <div className="right w-1/2 flex flex-col gap-6 pr-24 relative">
        <Step title={stepTitles[0]} subheading={subheading} step="01"></Step>
        <Step title={stepTitles[1]} subheading={subheading} step="02"></Step>
        <Step title={stepTitles[2]} subheading={subheading} step="03"></Step>
        <div className="absolute vertical-dotted-line h-[97%] border border-gray-500 border-1 left-10 -z-10 top-2 border-dashed"></div>
        <div className="relative flex">
    
          <div className="horizontal-border absolute h-0 w-20 border border-gray-500 border-1 left-10 bottom-3 -z-10  border-dashed"></div>
          <div className="ml-32">
            <Explore text="Read More"></Explore>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section6
