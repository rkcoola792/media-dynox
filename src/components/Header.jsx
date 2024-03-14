import React, {  useState } from 'react'
import { Link } from 'react-router-dom';
import Dropdown from './Homepage/Dropdown';
import "./pogressbar.scss"
const Header = () => {
    const [openServices,setOpenServices]=useState(true)
    const [serviceDropdown,setServiceDropdown]=useState(false)
    const [reference,setReference]=useState("")

    function updateProgressBar() {
      const { scrollTop, scrollHeight } = document.documentElement;
      const scrollPercent =
        (scrollTop / (scrollHeight - window.innerHeight)) * 100 + "%";
      document
        .querySelector("#progress-bar")
        .style.setProperty("--progress", scrollPercent);
    }

    document.addEventListener("scroll", updateProgressBar);
  return (
    <>
      <div id="progress-bar" className="transition duration-450 ease-out"></div>
      <div className="header flex justify-between px-24 py-8 items-center sticky top-0 bg-slate-50 z-10">
        <div className="left logo font-bold text-xl lg:text-3xl cursor-pointer">
          Media Dynox
          <span className="text-mainred font-bold text-2xl lg:text-3xl ">
            .
          </span>
        </div>
        <div className="right-header-elements flex gap-16 items-center">
          <Link to="/">
            <h1 className="lg:text-lg hover:text-mainred cursor-pointer font-semibold transition duration-450 ease-out hover:ease-in">
              Home
            </h1>
          </Link>
          <div
            className="company flex items-center"
            id="Company"
            onMouseEnter={(e) => {
              console.log("id", e?.target?.id);
              setReference(e?.target?.id);
              setServiceDropdown(true);
            }}
            onMouseLeave={() => setServiceDropdown(false)}
          >
            <span
              className="lg:text-lg cursor-pointer  transition duration-450 ease-out hover:ease-in hover:text-mainred font-semibold"
              id="Company"
            >
              Company
            </span>
            &nbsp;
            <span
              className="cursor-pointer text-mainred font-extrabold mb-1 "
              id="Company"
            >
              .
            </span>
          </div>
          <div
            className="services transition duration-450 ease-out hover:ease-in flex items-center lg:text-lg font-semibold  hover:text-mainred cursor-pointer"
            id="Service"
            onMouseEnter={(e) => {
              console.log("id", e?.target?.id);
              setReference(e?.target?.id);
              setServiceDropdown(true);
            }}
            onMouseLeave={() => setServiceDropdown(false)}
          >
            <h1 className="" id="Service">
              Services
            </h1>
            &nbsp;
            <span className="text-mainred font-extrabold mb-1 " id="Service">
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
        <div className="absolute z-20 bg-slate-50 right-72 top-20">
          {serviceDropdown && <Dropdown reference={reference}></Dropdown>}
        </div>
      </div>
    </>
  );
}

export default Header
