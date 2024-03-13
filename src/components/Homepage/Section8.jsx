import React from 'react'
import Explore from './Explore';

const Section8 = () => {
  return (
    <div className="section-8 flex gap-6 px-24 pr-36 mt-32">
      <div className="left w-[30%]  flex flex-col gap-44 ">
        <h1 className="text-4xl ">
          <span className="font-semibold">Explore</span> recent Blogs for a view
        </h1>
        <Explore text="More Blogs "></Explore>
      </div>
      <div className="right flex w-[70%] gap-4 pr-24">
        <div className="container-1-img ">
          <div className="img-1 w-[250px] relative  ">
            <img src="/img4.jpg" alt="" className="h-[350px] object-cover " />
            <div className="absolute text-white bottom-4 ml-6 text-opacity-90">
              <h1 className="text-sm">December 14,2023</h1>
              <p className='w-[85%]'> A roadmap for building a business chatbot</p>
            </div>
          </div>
        </div>
        <div className="container-2-img">
          <div className="img-1 w-[250px] h-[px] relative ">
            <img src="/img5.jpg" alt="" className="h-[350px] object-cover" />
            <div className="absolute text-white bottom-4 ml-6 text-opacity-90">
              <h1 className="text-sm">December 14,2023</h1>
              <p className='w-[85%]'>  A roadmap for building a business chatbot</p>
            </div>
          </div>
        </div>
        <div className="container-3-img">
          <div className="img-1 w-[250px] h-[px] relative ">
            <img src="/img6.jpg" alt="" className="h-[350px] object-cover" />
            <div className="absolute text-white bottom-4 ml-6 text-opacity-90">
              <h1 className="text-sm">December 14,2023</h1>
              <p className='w-[85%]'> A roadmap for building a business chatbot</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section8
