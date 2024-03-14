import React from 'react'

const Section6 = () => {
  return (
    <div className="section-6 flex justify-between items-center mt-32 pl-28  ">
      <div className="left-text w-[30%]">
        {" "}
        <h1 className="font-light text-4xl leading-[45px]">
          <span className="font-semibold">Popular tool that power</span> our
          digital marketing services
        </h1>
      </div>
      <div className="right-images flex flex-wrap gap-6 w-[40%] ">
        <div><img src="/GA.webp" className='object-contain w-[100px] h-[50px]'  alt="" /></div>
        <div><img src="/webmaster.png" className='object-contain w-[100px] h-[50px]'  alt="" /></div>
        <div><img src="/ads.png" className='object-contain w-[100px] h-[50px]'  alt="" /></div>
        <div><img src="/semrush.png" className='object-contain w-[100px] h-[50px]'  alt="" /></div>
        <div><img src="/hootsuite.png" className='object-contain w-[100px] h-[50px]'  alt="" /></div>
      </div>
    </div>
  );
}

export default Section6
