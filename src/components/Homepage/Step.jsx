import React from 'react'
import Explore from './Explore';

const Step = ({step,title,subheading}) => {
  return (
    <div className="step flex gap-4 relative ">
      <div className="left bg-red-200  hover:bg-mainred hover:text-white cursor-pointer h-12 w-12 mx-4  p-6 rounded-[50%] transition duration-450 ease-out hover:ease-in flex items-center justify-center mt-1">
      <p className='font-semibold'>

        {step}
      </p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-semibold">Step {step}</p>
        <h1 className="text-lg font-bold">{title}.</h1>
        <p className=" mt-4 leading-8 text-sm text-gray-700">{subheading}</p>
      </div>
    </div>
  );
}

export default Step
