import React from 'react'
import Cards from './Cards';
import Explore from './Explore';

const Section3 = () => {
  return (
    <div className="section-3 flex flex-col items-center px-24 gap-6">
      <h1 className="text-3xl">
        <span className="font-bold">Explore services </span> that we offer
      </h1>
      <h3 className="w-[80%] text-center">
        Announce your brand to the right people, at the right time with
        innovative strategies that are built for your business and your brand to
        the right people, at the right time with innovative strategies that are
        built for your
      </h3>
      <div className="cards flex gap-8">
        <Cards
          title="Design"
          first="Graphic Designing"
          second="Branding Designing"
          third="UI/UX Designing"
          fourth="Web Designing"
        ></Cards>
        <Cards title="Technology" first="Web Development" second="App Development" third="Software Development" fourth="IOS Development"></Cards>
        <Cards title="Business" first="Branding" second="Strategy & Planning" third="Public Relation" fourth="Programmatic"></Cards>
        <Cards title="Marketing" first="Social Media" second="Paid Media" third="Digital Marketing" fourth="S.E.O"></Cards>
      </div>
      <Explore text="Explore all Services"></Explore>
    </div>
  );
}

export default Section3
