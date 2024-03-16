import React from 'react'
import Explore from './Explore';
import InfiniteScroll from './InfiniteScroll';
const Section5 = () => {
   
  return (
    <div className="bg-secondaryRed h-[500px] flex flex-col items-center py-12 text-center overflow-hidden gap-12 px-8 ">
      <div className="top-heading text-white pt-8">
        <h1 className="md:text-[40px] text-2xl font-semibold ">
          Yes. We cover your tech stack.
        </h1>
        <p className="md:text-base text-xs mt-2">
          Our 4,000+ team has expertise in almost everyprogramming language.
        </p>
      </div>
      
      <div className='scroll'>
<InfiniteScroll></InfiniteScroll>
      </div>
      <Explore text="Read More" color="white" hoverColor="white"></Explore>
    </div>
  );
}

export default Section5
