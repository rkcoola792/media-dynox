import React, { useState } from 'react'
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Dropdown from './Homepage/Dropdown';

const Header = () => {
    const [openCompany,setOpenCompany]=useState(false)
    const [openServices,setOpenServices]=useState(true)
    const [serviceDropdown,setServiceDropdown]=useState(false)

  return (
    <>
      <div className="header flex justify-between px-24 py-8 items-center sticky top-0 bg-slate-50 z-10">
        <div className="left logo font-bold text-xl lg:text-3xl cursor-pointer">
          Media Dynox
          <span className="text-mainred font-bold text-2xl lg:text-3xl ">
            .
          </span>
        </div>
        <div className="right-header-elements flex gap-16 items-center">
          <h1 className="lg:text-lg hover:text-mainred cursor-pointer font-semibold transition duration-450 ease-out hover:ease-in">
            Home
          </h1>
          <div className="company flex items-center">
            <span className="lg:text-lg cursor-pointer  transition duration-450 ease-out hover:ease-in hover:text-mainred font-semibold">
              Company
            </span>
            &nbsp;
            <span className=" cursor-pointer text-mainred font-extrabold mb-1 className='lg:text-lg'">
              .
            </span>
          </div>
          <div className="services transition duration-450 ease-out hover:ease-in flex items-center lg:text-lg font-semibold  hover:text-mainred cursor-pointer"
          onMouseEnter={()=>setServiceDropdown(true)}
          onMouseLeave={()=>setServiceDropdown(false)}
          
          
          >
            <h1 className=''>Services</h1>
            &nbsp;
            <span className="text-mainred font-extrabold mb-1 ">
              {openServices ? "." : "."}
            </span>
          </div>
          <h1 className="lg:text-lg  hover:text-mainred cursor-pointer font-semibold transition duration-450 ease-out hover:ease-in">
            Blogs
          </h1>
          <h1 className="lg:text-lg  hover:text-mainred transition duration-450 ease-out hover:ease-in cursor-pointer font-semibold">
            Reach Us
          </h1>
        </div>
      </div>
      <div className='absolute z-20 bg-slate-50 right-72 top-20'>
        {serviceDropdown&&<Dropdown></Dropdown>}
      </div>
    </>
  );
}

export default Header
