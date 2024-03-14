import React from 'react'

const Section3 = () => {
  return (
    <div className="section-3 bg-slate-100 h-[300px] px-24 mt-32 flex flex-col justify-center gap-10">
      <h1 className="text-4xl font-thin">
        <span className="font-semibold">Services</span> We offer
      </h1>
      <div className="service-elemets flex gap-4">
        <div className=" border-dotted  border-2 border-black flex justify-center items-center p-2 px-4 cursor-pointer">
          <h1 className="font-semibold">Social Media</h1>
        </div>
        <div className=" border-dotted  border-2 border-black flex justify-center items-center p-2 px-4 cursor-pointer">
          <h1 className="font-semibold">Paid Media</h1>
        </div>
        <div className=" border-dotted  border-2 border-black flex justify-center items-center p-2 px-4 cursor-pointer">
          <h1 className="font-semibold">Digital Marketing</h1>
        </div>
        <div className=" border-dotted  border-2 border-black flex justify-center items-center p-2 px-4 cursor-pointer">
          <h1 className="font-semibold">SEO</h1>
        </div>
      </div>
    </div>
  );
}

export default Section3
