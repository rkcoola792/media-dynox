import React, { useState } from 'react'
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const Header = () => {
    const [openCompany,setOpenCompany]=useState(false)
    const [openServices,setOpenServices]=useState(true)
  return (
    <div className="header flex justify-between px-24 py-8 items-center">
      <div className="left logo font-bold text-xl">
        Media Dynox<span className="text-red-500 font-bold text-2xl">.</span>
      </div>
      <div className="right-header-elements flex gap-16 items-center">
        <h1>Home</h1>
        <div className="company flex items-center">
          <span>Company</span>
          &nbsp;
          <span className="text-red-500 font-extrabold mb-1">.</span>
        </div>
        <div className="services flex items-center">
          <span>Services</span>
          &nbsp;
          <span className="text-red-500 font-extrabold mb-1 ">{openServices?".":"."}</span>
        </div>
        <h1>Blogs</h1>
        <h1>Reach Us</h1>
      </div>
    </div>
  );
}

export default Header
