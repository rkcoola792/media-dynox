import React, { useEffect, useState } from "react";
import "./section7.scss";
import Testimonial from "./Testimonial";

const Section7 = () => {
    const description=["This creative agency stands out with their exceptional talent and experstise.Their ability to think outside the box and bring unique ideas to life is truely impressive. With meticulous attention to details, they consistently deliver visually stunning and impactful work."]

    const [number,setNumber]=useState(1)
  
    useEffect(() => {
    const selectedAvatar = document.querySelectorAll(".avatar");
    selectedAvatar.forEach((ele) =>
      ele.addEventListener("click", () => {
        document.querySelector(".active")?.classList.remove('active')
        ele.classList.add("active")})
    );
  }, []);


console.log("count",number)
  return (
    <div className="section-7 py-24 px-24 flex gap-12 text-center items-center bg-slate-100 h-[700px] mt-16 flex-col">
      <div className="top">
        <h1 className="text-4xl mb-2 font-normal">
          <span className="font-semibold ">Customer</span> Voice :{" "}
        </h1>
        <h1 className="text-4xl">
          <span className="font-semibold">Hear</span> what we say{" "}
        </h1>
      </div>
      <div
        className="mid-image-container flex gap-6 items-center "
      >
        <div
          id="1"
          className="avatar object-cover rounded-[50%] flex justify-center items-center active "
            onClick={()=>setNumber("1")}
        >
          <img src="/av2.png" className="h-16 w-16 rounded-[50%] " alt="" />
        </div>
        <div
        id="2"
          onClick={() => setNumber(2)}
          className="avatar object-cover rounded-[50%] flex justify-center items-center mt-8"
        >
          <img src="/av3.webp" className="h-16 w-16 rounded-[50%] " alt="" />
        </div>
        <div
        id="3"
          onClick={() => setNumber("3")}
          className="avatar object-cover rounded-[50%] flex justify-center items-center "
        >
          <img src="/av4.jpg" className="h-16 w-16 rounded-[50%]" alt="" />
        </div>
        <div
        id="4"
          onClick={() => setNumber("4")}
          className="avatar object-cover rounded-[50%] mt-8 flex justify-center items-center"
        >
          <img src="/av9.png" className="h-16 w-16 rounded-[50%]" alt="" />
        </div>
        <div
        id="5"
          onClick={() => setNumber("5")}
          className="avatar object-cover rounded-[50%] flex justify-center items-center"
        >
          <img src="/av6.png" className="h-16 w-16 rounded-[50%]" alt="" />
        </div>
        <div
        id="6"
          onClick={() => setNumber("6")}
          className=" avatar object-cover rounded-[50%] mt-8 flex justify-center items-center"
        >
          <img src="/av7.png" className="h-16 w-16 rounded-[50%]" alt="" />
        </div>
        <div
        id="7"
          onClick={() => setNumber("7")}
          className=" avatar object-cover rounded-[50%] flex justify-center items-center"
        >
          <img src="/av8.png" className="h-16 w-16 rounded-[50%]" alt="" />
        </div>
      </div>
      <div className="bottom-container">
        <Testimonial
          name="Rajeev Kumar"
          country="India"
          description={description[0]}
        ></Testimonial>
      </div>
    </div>
  );
};

export default Section7;
