import React from 'react'
import SectionFiveElement from './SectionFiveElement';
import { Item } from "../Homepage/Dropdown"

const Section10 = () => {
  return (
    <div className="section-10 px-24 mt-12 flex flex-col ">
      <div className="heading">
        <h1 className="font-light text-4xl leading-[45px]">
          <span className="font-semibold">Other </span>Services
        </h1>
      </div>
      <div className="flex items-center gap-12 mt-16 justify-around " >
        <div className="w-[30%] ">
          <Item
            subheading="Learn how to sign up, install and use our products."
            title="Business"
            img="/business.webp"
            color="bg-green-100"
          ></Item>
        </div>
        <div className='w-[30%]'>
          <Item
            subheading="Learn, share and connect with other users."
            title="Technology"
            img="/technology.webp"
            color="bg-blue-100"
          ></Item>
        </div>
        <div className='w-[30%]'>
          <Item
            subheading="Learn, share and connect with other users."
            title="Design"
            img="/design.webp"
            color="bg-orange-100"
          ></Item>
        </div>
      </div>
    </div>
  );
}

export default Section10
