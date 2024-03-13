import React, { useEffect } from "react";
import "./section7.scss";
const Section7 = () => {
  useEffect(() => {
    const selectedAvatar = document.querySelectorAll(".avatar");
    console.log("selected avatar", selectedAvatar);

    selectedAvatar.forEach((ele) =>
      ele.addEventListener("click", () => {
        document.querySelector(".active")?.classList.remove('active')
        ele.classList.add("active")})
    );
  }, []);

  return (
    <div className="section-7 py-24 px-24 flex gap-8 text-center items-center bg-slate-100 h-[700px] mt-16 flex-col">
      <div className="top">
        <h1 className="text-4xl mb-2 font-normal">
          <span className="font-semibold ">Customer</span> Voice :{" "}
        </h1>
        <h1 className="text-4xl">
          <span className="font-semibold">Hear</span> what we say{" "}
        </h1>
      </div>
      <div className="mid-image-container flex gap-6 items-center ">
        <div className="avatar object-cover rounded-[50%] flex justify-center items-center ">
          <img src="/av2.png" className="h-16 w-16 rounded-[50%] " alt="" />
        </div>
        <div className="avatar object-cover rounded-[50%] flex justify-center items-center mt-8">
          <img src="/av3.webp" className="h-16 w-16 rounded-[50%] " alt="" />
        </div>
        <div className="avatar object-cover rounded-[50%] flex justify-center items-center ">
          <img src="/av4.jpg" className="h-16 w-16 rounded-[50%]" alt="" />
        </div>
        <div className="avatar object-cover rounded-[50%] mt-8 flex justify-center items-center">
          <img src="/av9.png" className="h-16 w-16 rounded-[50%]" alt="" />
        </div>
        <div className="avatar object-cover rounded-[50%] flex justify-center items-center">
          <img src="/av6.png" className="h-16 w-16 rounded-[50%]" alt="" />
        </div>
        <div className=" avatar object-cover rounded-[50%] mt-8 flex justify-center items-center">
          <img src="/av7.png" className="h-16 w-16 rounded-[50%]" alt="" />
        </div>
        <div className=" avatar object-cover rounded-[50%] flex justify-center items-center">
          <img src="/av8.png" className="h-16 w-16 rounded-[50%]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Section7;
