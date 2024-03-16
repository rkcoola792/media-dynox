import React from 'react'
import Cards from './Cards';
import Explore from './Explore';

const Section3 = () => {
  return (
    <div className="section-3 flex flex-col items-center sm:px-24 px-8 gap-12 mt-16">
      <h1 className="text-3xl text-center">
        <span className="font-bold">Explore services </span> that we offer
      </h1>
      <h3 className="sm:w-[80%] text-center text-gray-600 text-base leading-7">
        Announce your brand to the right people, at the right time with
        innovative strategies that are built for your business and your brand to
        the right people, at the right time with innovative strategies that are
        built for your
      </h3>
      <div className="cards flex gap-4 flex-wrap justify-center">
        <div className='hover:bg-white'>
          <Cards
            title="Design"
            first="Graphic Designing"
            second="Branding Designing"
            third="UI/UX Designing"
            fourth="Web Designing"
          ></Cards>
        </div>
        <Cards
          title="Technology"
          first="Web Development"
          second="App Development"
          third="Software Development"
          fourth="IOS Development"
        ></Cards>
        <Cards
          title="Business"
          first="Branding"
          second="Strategy & Planning"
          third="Public Relation"
          fourth="Programmatic"
        ></Cards>
        <Cards
          title="Marketing"
          first="Social Media"
          second="Paid Media"
          third="Digital Marketing"
          fourth="S.E.O"
        ></Cards>
      </div>
      <Explore text="Explore all Services"></Explore>
    </div>
  );
}

export default Section3
