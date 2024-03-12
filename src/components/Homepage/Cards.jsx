import React from 'react'
import Explore from './Explore';

const Cards = ({title,first,second,third,fourth}) => {
  return (
    <div className="w-[200px] h[300px] flex flex-col gap-6 border border-gray-300 px-6 py-8">
      <div className="flex gap-1 items-start">
        <span className="text-xl font-bold">{title}</span>
        <span className="text-red-500 text-xl font-extrabold ">.</span>
      </div>

      <div className="subheading flex flex-col gap-2">
        <h3 className="text-sm">{first}</h3>
        <hr />
        <h3 className="text-sm">{second}</h3>
        <hr />
        <h3 className="text-sm">{third}</h3>
        <hr />
        <h3 className="text-sm">{fourth}</h3>
      </div>
      <Explore text="Read more"></Explore>
    </div>
  );
}

export default Cards
