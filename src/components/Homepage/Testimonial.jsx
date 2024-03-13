import React from 'react'
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
const Testimonial = ({name,country,description}) => {
  return (
    <div className='testimonials flex flex-col justify-center items-center gap-6'>
      <div className="upper flex flex-col gap-1 items-center justify-center">
        <div className='symbol text-mainred '><FormatQuoteIcon></FormatQuoteIcon></div>
        <h1 className='font-semibold text-xl tracking-wider'>{name}</h1>
        <p className='text-gray-700 tracking-wider'>{country}</p>
      </div>
      <div className="lower text-center w-[60%] flex justify-center">
        <p className='leading-7 text-gray-700'> {description}</p>
      </div>
    </div>
  );
}

export default Testimonial
