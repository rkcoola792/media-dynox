import React, { useState } from 'react'
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const Header = () => {
    const [openCompany,setOpenCompany]=useState(false)
    const [openServices,setOpenServices]=useState(true)
  return (
    <div className="header flex justify-between px-24 py-8 items-center sticky top-0 bg-slate-50 z-10">
      <div className="left logo font-bold text-xl lg:text-3xl">
        Media Dynox
        <span className="text-mainred font-bold text-2xl lg:text-3xl ">.</span>
      </div>
      <div className="right-header-elements flex gap-16 items-center">
        <h1 className="lg:text-xl">Home</h1>
        <div className="company flex items-center">
          <span className="lg:text-xl">Company</span>
          &nbsp;
          <span className="text-mainred font-extrabold mb-1 className='lg:text-xl'">
            .
          </span>
        </div>
        <div className="services flex items-center lg:text-xl">
          <span>Services</span>
          &nbsp;
          <span className="text-mainred font-extrabold mb-1 ">
            {openServices ? "." : "."}
          </span>
        </div>
        <h1 className='lg:text-xl'>Blogs</h1>
        <h1 className='lg:text-xl'>Reach Us</h1>
      </div>
    </div>
  );
}

export default Header
