import React from 'react'


const Item=({title,subheading,img,color})=>{
    return (
      <div className="item flex gap-2">
        <div className="image">
          <div className={`w-12 h-12 rounded-[50%] flex ${color} justify-center items-center`}>
            <img src={img} alt="" className="w-8 h-8 " />
          </div>
        </div>
        <div className="texts">
          <div className="heading font-semibold">{title}</div>
          <div className="subheading text-sm">{subheading}</div>
        </div>
      </div>
    );
}

const Dropdown = () => {
  return (
    <div className="dropdown w-[380px] p-8 shadow-lg flex flex-col gap-8 rounded-sm transition duration-450 ease-out hover:ease-in">
      <Item
        subheading="Learn how to sign up, install and use our products."
        title="Marketing"
        img="/marketing.webp"
        color="bg-red-100"
      ></Item>
      <Item
        subheading="Learn, share and connect with other users."
        title="Technology"
        img="/technology.webp"
        color="bg-blue-100"
      ></Item>
      <Item
        subheading="Learn how to sign up, install and use our products."
        title="Business"
        img="/business.webp"
        color="bg-green-100"
      ></Item>
      <Item
        subheading="Learn, share and connect with other users."
        title="Design"
        img="/design.webp"
        color="bg-orange-100"
      ></Item>
    </div>
  );
}

export default Dropdown
