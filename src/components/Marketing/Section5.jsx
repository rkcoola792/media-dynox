import React from 'react'
import Diversity1Icon from "@mui/icons-material/Diversity1";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import HandshakeIcon from "@mui/icons-material/Handshake";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import HailIcon from "@mui/icons-material/Hail";
import SectionFiveElement from './SectionFiveElement';

const Section5 = () => {
    const services = [
      {
        title: "Support Brand value",
        subheading:
          "Following the quality of our service thus having gained trust of our many clients.",
        icon: (
          <Diversity1Icon style={{ width: 40, height: 40 }}></Diversity1Icon>
        ),
      },
      {
        title: "Boost user relationship",
        subheading:
          "Following the quality of our service thus having gained trust of our many clients.",
        icon: <HailIcon style={{ width: 40, height: 40 }}></HailIcon>,
      },
      {
        title: "Drive more traffic",
        subheading:
          "Following the quality of our service thus having gained trust of our many clients.",
        icon: (
          <SignalCellularAltIcon
            style={{ width: 40, height: 40 }}
          ></SignalCellularAltIcon>
        ),
      },
      {
        title: "Stay on top",
        subheading:
          "Following the quality of our service thus having gained trust of our many clients.",
        icon: <HandshakeIcon style={{ width: 40, height: 40 }}></HandshakeIcon>,
      },
      {
        title: "Increase in competition",
        subheading:
          "Following the quality of our service thus having gained trust of our many clients.",
        icon: (
          <LaptopChromebookIcon
            style={{ width: 40, height: 40 }}
          ></LaptopChromebookIcon>
        ),
      },
      {
        title: "Improve conversion rate",
        subheading:
          "Following the quality of our service thus having gained trust of our many clients.",
        icon: <AdsClickIcon style={{ width: 40, height: 40 }}></AdsClickIcon>,
      },
    ];
  return (
    <div className="section-5 bg-slate-100 px-24 mt-32 py-24">
      <div className="heading  flex flex-col gap-12">
        <h1 className="font-light text-4xl">
          <span className="font-semibold">Why does your business need</span>{" "}
          marketing services ?
        </h1>
      </div>

      <div className="description ">
        <div className="description mt-16 flex flex-col gap-10 leading-7">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into
          </p>
        </div>
      </div>
      <div className='services flex flex-wrap justify-between'>
        {services.map((ele) => (
          <SectionFiveElement title={ele.title} subheading={ele.subheading} icon={ele.icon}></SectionFiveElement>
        ))}
      </div>
    </div>
  );
}

export default Section5
