import Step from '../Homepage/Step';
import React from 'react'

const Section4 = () => {
    const steps = [
      {
        title: "Research",
        subheading:
          "Tell us more about your business on a discovery call. We’ll discuss team structure and approach, success criteria, timescale, budget,and required skill sets to see how we can help.",
        step: "1",
      },
      {
        title: "Create",
        subheading:
          "Tell us more about your business on a discovery call. We’ll discuss team structure and approach, success criteria, timescale, budget,and required skill sets to see how we can help.",
        step: "2",
      },
      {
        title: "Promote",
        subheading:
          "Tell us more about your business on a discovery call. We’ll discuss team structure and approach, success criteria, timescale, budget,and required skill sets to see how we can help.",
        step: "3",
      },
      {
        title: "Analyse",
        subheading:
          "Tell us more about your business on a discovery call. We’ll discuss team structure and approach, success criteria, timescale, budget,and required skill sets to see how we can help.",
        step: "4",
      },
      {
        title: "Optimize",
        subheading:
          "Tell us more about your business on a discovery call. We’ll discuss team structure and approach, success criteria, timescale, budget,and required skill sets to see how we can help.",
        step: "5",
      },
      {
        title: "Deploy & Run",
        subheading:
          "Tell us more about your business on a discovery call. We’ll discuss team structure and approach, success criteria, timescale, budget,and required skill sets to see how we can help.",
        step: "6",
      },
     
    ];
  return (
    <div className="section-4 px-24 mt-32">
      <div className="heading  flex flex-col gap-12">
        <h1 className="font-light text-4xl">
          <span className="font-semibold">How Marketing</span> Works Step by
          Step flow
        </h1>
        <p className="leading-7">
          Announce your brand to the right people, at the right time with
          innovative strategies that are built for your business and you.
          Announce your brand to the right people, at the right time with
          innovative strategies that are built for your business and you.
        </p>
      </div>
      <div className="flex flex-wrap gap-12 mt-24">
          {steps?.map((ele) => (
            <div className="md:w-[45%]" key={ele?.step}>
              <Step
                title={ele?.title}
                subheading={ele?.subheading}
                step={ele?.step}
              ></Step>
            </div>
          ))}
          
      </div>
    </div>
  );
}

export default Section4
