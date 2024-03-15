import React from 'react'
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import Explore from './Homepage/Explore';
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <div className="footer mt-32 h-[500px] flex ">
      <div className="left bg-[#131111] w-[70%] ">
        <div className="top flex lg:gap-[90px] sm:gap-12 justify-center pt-24 px-12">
          <div>
            <h1 className="lg:text-3xl sm:text-2xl  sm:hidden lg:block font-semibold text-white mt-20">
              MediaDynox<span className="font-bold text-mainred">.</span>
            </h1>
          </div>
          <div className="services flex flex-col">
            <h1 className="title text-white text-2xl mb-6">Services</h1>
            <div className="services-elemets flex flex-col gap-4 text-white">
              <h3 className="opacity-60 hover:opacity-100 cursor-pointer transition duration-450 ease-out hover:ease-in ">
                Design
              </h3>
              <h3 className="opacity-60 hover:opacity-100 cursor-pointer transition duration-450 ease-out hover:ease-in ">
                Technology
              </h3>
              <h3 className="opacity-60 hover:opacity-100 cursor-pointer transition duration-450 ease-out hover:ease-in">
                Business
              </h3>
              <h3 className="opacity-60 hover:opacity-100 transition duration-450 ease-out hover:ease-in cursor-pointer">
                Marketing
              </h3>
            </div>
          </div>
          <div className="contact flex flex-col w-[250px]">
            <h1 className="text-white text-2xl mb-6">Contact</h1>
            <div className="contact-elements flex flex-col gap-2">
              <div className="address flex gap-2 ">
                <div className="text-mainred opacity-70">
                  <LocationOnIcon></LocationOnIcon>
                </div>
                <p className=" text-white opacity-60 hover:opacity-100 transition duration-450 ease-out hover:ease-in ">
                  267, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana
                  122015
                </p>
              </div>

              <div className="phone flex gap-2">
                <div className="text-mainred opacity-70 ">
                  <LocalPhoneIcon></LocalPhoneIcon>
                </div>
                <p className=" text-white opacity-60 hover:opacity-100 transition duration-450 ease-out hover:ease-in ">
                  +91 92979 39393
                </p>
              </div>

              <div className="email flex gap-2">
                <div className="text-mainred opacity-70">
                  <EmailIcon></EmailIcon>
                </div>
                <p className=" text-white opacity-60 hover:opacity-100 transition duration-450 ease-out hover:ease-in ">
                  info@mediadynox.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom lg:px-24 sm:pl-24 ">
          <div className="upper flex gap-2 mt-16 items-center">
            <div className=" text-sm text-white opacity-60 hover:opacity-90 cursor-pointer transition duration-450 ease-out hover:ease-in ">
              Privacy Policy{" "}
            </div>
            <div className="text-sm text-white opacity-60 ">|</div>
            <div className="text-sm text-white opacity-60 hover:opacity-90 cursor-pointer transition duration-450 ease-out hover:ease-in ">
              Terms and conditions{" "}
            </div>
            <div className="text-sm text-white opacity-60 ">|</div>
            <div className=" text-sm text-white opacity-60 hover:opacity-90 cursor-pointer transition duration-450 ease-out hover:ease-in ">
              Privacy Shield Policy
            </div>
          </div>
          <div className="lower mt-4">
            <p className="text-sm text-white opacity-60 ">
              Copyright@2024 Mediadynox.com. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
     
      <div className="right w-[35%] bg-slate-100 flex flex-col lg:pl-16 sm:pl-10 pt-24  ">
        <div className="top flex flex-col gap-2 ">
          <div className="title">
            <h1 className="lg:text-4xl md:text-3xl font-medium">Get In Touch</h1>
          </div>
          <div className="hr border border-b-black mt-1  w-[70%]">
            <hr />
          </div>
          <div className="ctas lg:flex flex-wrap sm:-translate-x-3">
            <div className="md:scale-90 ">
              <Explore text="Contact Us" size="sm"></Explore>
            </div>
            <div className='md:scale-90 '>
              <Explore text="Schedule a meeting" size="sm"></Explore>
            </div>
          </div>
        </div>
        <div className="mid">
          <p className="text-gray-700 lg:text-sm sm:text-xs sm:leading-6 mt-6 md:w-[80%] lg:w-[80%] lg:leading-7">
            Welcome to our digital agency. We specialize in helping business
            most like your succeed online. From website design and development.
          </p>
        </div>
        <div className="bottom lg:mt-8 sm:mt-6 ">
          <h1 className="text-2xl font-semibold">
            Follow Us <span className="text-mainred">.</span>
          </h1>
          <div className="social-icons flex -translate-x-1 mt-2">
            <div className="hover:text-mainred transition duration-450 ease-out hover:ease-in cursor-pointer scale-75">
              <XIcon></XIcon>
            </div>
            <div className="hover:text-mainred transition duration-450 ease-out hover:ease-in cursor-pointer scale-90">
              <FacebookIcon></FacebookIcon>
            </div>
            <div className="hover:text-mainred transition duration-450 ease-out hover:ease-in cursor-pointer scale-90">
              <LinkedInIcon></LinkedInIcon>
            </div>
            <div className="hover:text-mainred transition duration-450 ease-out hover:ease-in cursor-pointer scale-90">
              <InstagramIcon></InstagramIcon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer
