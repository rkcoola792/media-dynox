import React, { useEffect, useState } from "react";
import "./section7.scss";
import Testimonial from "./Testimonial";
const Section7 = () => {

    const users = [
      {
        name: "Samual Fernandes",
        country: "America USA",
        description:
          "This creative agency stands out with their exceptional talent and experstise.Their ability to think outside the box and bring unique ideas to life is truely impressive. With meticulous attention to details, they consistently deliver visually stunning and impactful work. ",
      },
      {
        name: "Sarah Newman",
        country: "Envanto Market",
        description:
          "This creative agency stands out with their exceptional talent and experstise.Their ability to think outside the box and bring unique ideas to life is truely impressive. With meticulous attention to details, they consistently deliver visually stunning and impactful work.",
      },
      {
        name: "Thomas Shelby",
        country: "Birmingham UK",
        description:
          "Outstanding service from Dynox Media! Their expertise and creativity transformed our digital presence, driving significant brand visibility and customer engagement. Seamless collaboration and impressive results make them our go-to for digital media solutions. Highly recommended for anyone seeking impactful online strategies.",
      },
      {
        name: "Grace Lewiston",
        country: "Paris, France",
        description:
          "A big thank you to Media Dynox for their exceptional service! Their tailored strategies and data-driven approach optimized our digital presence, resulting in significant growth and customer acquisition. Their team's passion and expertise shine through in every interaction. Highly recommended for transformative digital solutions!",
      },
      {
        name: "Matthew Perry",
        country: "America USA",
        description:
          "Kudos to Media Dynox for their outstanding work! Their innovative strategies and unmatched creativity breathed new life into our digital platforms, capturing our audience's attention and driving engagement. Their team's dedication and expertise make them an invaluable asset for any business looking to thrive online.",
      },
      {
        name: "Tom cruise",
        country: "Italy, EU",
        description:
          "Impressed by the impact of Media Dynox! Their tailored solutions and proactive approach enhanced our online visibility, yielding tangible business growth. Their team's expertise and attention to detail ensured a seamless experience. Trustworthy, reliable, and results-driven – they exceeded our expectations!",
      },
      {
        name: "Jennifer Lawrence",
        country: "America USA",
        description:
          "Exceptional results delivered by Media Dynox! Their strategic insights and flawless execution elevated our digital presence, driving increased traffic and conversions. Their team's professionalism and commitment to excellence set them apart in the industry. Highly recommended for anyone serious about digital success!",
      },
      {
        name: "Robert Downey",
        country: "Dubai, UAE ",
        description:
          "Working with Media Dynox was a game-changer! Their innovative approach and attentive support resulted in tangible growth for our brand. Their team's dedication and expertise exceeded our expectations, making them an invaluable partner in our digital journey. Trust them for unparalleled results!",
      },
    ];

    const [number,setNumber]=useState(1)
  
    useEffect(() => {
    const selectedAvatar = document.querySelectorAll(".avatar");
    selectedAvatar.forEach((ele) =>
      ele.addEventListener("click", () => {
        document.querySelector(".active")?.classList.remove('active')
        ele.classList.add("active")})
    );
  }, []);


  return (
    <div className="section-7 py-24 md:px-24 sm:px-12 flex gap-12 text-center items-center bg-slate-100 h-[700px] mt-16 flex-col">
      <div className="top">
        <h1 className="text-4xl mb-2 font-normal">
          <span className="font-semibold ">Customer</span> Voice :{" "}
        </h1>
        <h1 className="text-4xl">
          <span className="font-semibold">Hear</span> what we say{" "}
        </h1>
      </div>

      <div className="mid-image-container flex md:gap-6 sm:gap-0 items-center ">
        <div
          id="1"
          className="avatar object-cover rounded-[50%] sm:h-12 sm:w-12 flex justify-center items-center active cursor-pointer "
          onClick={() => setNumber("1")}
        >
          <img src="/av2.png" className=" h-16 w-16 rounded-[50%] " alt="" />
        </div>
        <div
          id="2"
          onClick={() => setNumber(2)}
          className="avatar object-cover rounded-[50%] flex justify-center items-center mt-8 cursor-pointer"
        >
          <img src="/av3.webp" className="h-16 w-16 rounded-[50%] " alt="" />
        </div>
        <div
          id="3"
          onClick={() => setNumber("3")}
          className="avatar cursor-pointer object-cover rounded-[50%] flex justify-center items-center "
        >
          <img src="/av4.jpg" className="h-16 w-16 rounded-[50%]" alt="" />
        </div>
        <div
          id="4"
          onClick={() => setNumber("4")}
          className="avatar object-cover cursor-pointer rounded-[50%] mt-8 flex justify-center items-center"
        >
          <img src="/av9.png" className="h-16 w-16 rounded-[50%]" alt="" />
        </div>
        <div
          id="5"
          onClick={() => setNumber("5")}
          className="avatar object-cover rounded-[50%] cursor-pointer flex justify-center items-center"
        >
          <img src="/av6.png" className="h-16 w-16 rounded-[50%]" alt="" />
        </div>
        <div
          id="6"
          onClick={() => setNumber("6")}
          className=" avatar object-cover rounded-[50%] mt-8 flex cursor-pointer justify-center items-center"
        >
          <img src="/av7.png" className="h-16 w-16 rounded-[50%]" alt="" />
        </div>
        <div
          id="7"
          onClick={() => setNumber("7")}
          className=" avatar object-cover rounded-[50%] flex justify-center cursor-pointer items-center"
        >
          <img src="/av8.png" className="h-16 w-16 rounded-[50%]" alt="" />
        </div>
      </div>
      <div className="bottomContainer">
        <Testimonial
          name={users[number]?.name}
          country={users[number]?.country}
          description={users[number]?.description}
        ></Testimonial>
      </div>
    </div>
  );
};

export default Section7;
