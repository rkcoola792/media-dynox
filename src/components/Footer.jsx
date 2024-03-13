import React from 'react'
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <div className="footer mt-32 h-[500px] flex ">
      <div className="left bg-[#131111] w-[70%] ">
        <div className="top flex gap-[90px] justify-center pt-24">
          <div>
            <h1 className="text-3xl font-semibold text-white mt-20">
              MediaDynox<span className="font-bold text-mainred">.</span>
            </h1>
          </div>
          <div className="services flex flex-col">
            <h1 className="title text-white text-2xl mb-6">Services</h1>
            <div className="services-elemets flex flex-col gap-4 text-white">
              <h3 className="opacity-60 hover:opacity-100 cursor-pointer">
                Design
              </h3>
              <h3 className="opacity-60 hover:opacity-100 cursor-pointer">
                Technology
              </h3>
              <h3 className="opacity-60 hover:opacity-100 cursor-pointer">
                Business
              </h3>
              <h3 className="opacity-60 hover:opacity-100 cursor-pointer">
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
                <p className=" text-white opacity-60 hover:opacity-100">
                  267, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana
                  122015
                </p>
              </div>

              <div className="phone flex gap-2">
                <div className="text-mainred opacity-70">
                  <LocalPhoneIcon></LocalPhoneIcon>
                </div>
                <p className=" text-white opacity-60 hover:opacity-100">
                  +91 92979 39393
                </p>
              </div>

              <div className="email flex gap-2">
                <div className="text-mainred opacity-70">
                  <EmailIcon></EmailIcon>
                </div>
                <p className=" text-white opacity-60 hover:opacity-100">
                  info@mediadynox.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom px-24">
          <div className="upper flex gap-2 mt-16 items-center">
            <div className=" text-sm text-white opacity-60 hover:opacity-90 cursor-pointer">
              Privacy Policy{" "}
            </div>
            <div className="text-sm text-white opacity-60 ">|</div>
            <div className="text-sm text-white opacity-60 hover:opacity-90 cursor-pointer">
              Terms and conditions{" "}
            </div>
            <div className="text-sm text-white opacity-60 ">|</div>
            <div className=" text-sm text-white opacity-60 hover:opacity-90 cursor-pointer">
              Privacy Shield Policy
            </div>
          </div>
          <div className="lower mt-4">
            <p className="text-sm text-white opacity-60">
              Copyright@2024 Mediadynox.com. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
      <div className="right w-[30%] bg-slate-100">

      </div>
    </div>
  );
}

export default Footer
