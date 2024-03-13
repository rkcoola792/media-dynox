import React from 'react'
import Explore from './Explore';

const Cards = ({title,first,second,third,fourth}) => {
  return (
    <div className="w-[200px] h[300px] lg:w-[250px] flex flex-col gap-6 border border-gray-300 px-8 py-8 cursor-pointer hover:bg-mainred hover:text-white transition duration-450 ease-out hover:ease-in">
      <div className="flex gap-1 items-start">
        <span className="text-xl lg:text-2xl font-semibold">{title}</span>
        <span className="text-mainred text-xl font-extrabold ">.</span>
      </div>

      <div className="subheading flex flex-col gap-4">
        <hr />
        <h3 className="text-sm lg:text-base font-semibold">{first}</h3>
        <hr />
        <h3 className="text-sm lg:text-base font-semibold ">{second}</h3>
        <hr />
        <h3 className="text-sm lg:text-base font-semibold ">{third}</h3>
        <hr />
        <h3 className="text-sm lg:text-base font-semibold ">{fourth}</h3>
      </div>
      <Explore text="Read more"></Explore>
    </div>
  );
}

export default Cards
