import React, { useState } from 'react'
import Explore from './Explore';

const Cards = ({title,first,second,third,fourth,color}) => {
  const [hover,setHover]=useState(false)
  return (
    <div className=" w-[320px] sm:w-[200px] xl:w-[250px] md:w-[350px]  flex flex-col  gap-6 border border-gray-300 px-8 py-8 cursor-pointer hover:bg-mainred hover:text-white transition duration-450 ease-out hover:ease-in rounded-sm" 
    onMouseEnter={()=>setHover(true)}
    onMouseLeave={()=>setHover(false)}
    >
      
      <div className="gap-1 items-start">
        <span className=" text-3xl sm:text-xl lg:text-2xl font-semibold ">
          {title}
        </span>
        <span className={`ml-1 text-${hover?"white":"mainred"}  text-xl font-extrabold `}>.</span>
      </div>

      <div className="subheading flex flex-col gap-4">
        <hr />
        <h3 className="tracking-wide sm:text-sm lg:text-base font-semibold">
          {first}
        </h3>
        <hr />
        <h3 className="tracking-wide  sm:text-sm lg:text-base font-semibold ">
          {second}
        </h3>
        <hr />
        <h3 className="tracking-wide sm:text-sm lg:text-base font-semibold ">
          {third}
        </h3>
        <hr />
        <h3 className="tracking-wide sm:text-sm lg:text-base font-semibold ">
          {fourth}
        </h3>
      </div>
      <div className="">
        <Explore text="Read more" hoverColor="white" hover={hover}></Explore>
      </div>
    </div>
  );
}

export default Cards
