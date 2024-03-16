import React from 'react'

const SectionFiveElement = ({title,subheading, icon}) => {
  return (
    <div className='sectionFiveElement gap-4 flex flex-col py-2 sm:py sm:m-4 mx-2 my-2 sm:w-[25%] sm:mt-10 '>
      <div className='text-red-500 hover:text-mainred w-10'>{icon}</div>
      <div ><h1 className='text-xl font-medium opacity-90'>{title}</h1></div>
      <div><p className='text-gray-700 text-sm leading-6'>{subheading}</p></div>
    </div>
  )
}

export default SectionFiveElement
