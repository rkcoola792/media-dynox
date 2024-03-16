import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Section4 = () => {
  const accordianArray = [
    {
      title: "The Right People",
      subheading:
        "Yes, you can try us for free for 30 days. If you want, we ll provide you with a free, personalized 30 minute onboarding call to get you up and running as soon as possible.",
    },
    {
      title: "The Right Team",
      subheading:
        "Yes, you can try us for free for 30 days. If you want, we ll provide you with a free, personalized 30 minute onboarding call to get you up and running as soon as possible.",
    },
    {
      title: "The Right Time",
      subheading:
        "Yes, you can try us for free for 30 days. If you want, we ll provide you with a free, personalized 30 minute onboarding call to get you up and running as soon as possible.",
    },
    {
      title: "The Right Place",
      subheading:
        "Yes, you can try us for free for 30 days. If you want, we ll provide you with a free, personalized 30 minute onboarding call to get you up and running as soon as possible.",
    },
  ];
  return (
    <div className="section-4 md:flex sm:px-24 px-8 bg-slate-100  gap-16 py-24 mt-12 items-center">
      <div className="left md:w-[30%] text-center md:text-left flex flex-col gap-8 ">
        <h1 className="xl:text-3xl sm:text-2xl lg:text-3xl leading-10 text-3xl ">
          <span className="font-semibold">Execute</span> all your{" "}
          <span className="font-semibold">Business goals</span> in one place
        </h1>
        <p className="text-gray-700 sm:text-sm xl:text-lg leading-7">
          Announce your brand to the right people, at the right time with
          innovative strategies that are built for your business and you.
        </p>
      </div>
      <div className="accordion-right md:w-[60%] mt-8 md:mt-0">

<Accordion type="single" collapsible className="w-full">
{accordianArray?.map((ele,index)=>
<AccordionItem value={`item-${index+1}`} key={index}>
            <AccordionTrigger className="xl:text-xl sm:text-lg">
              {ele?.title}
            </AccordionTrigger>
            <AccordionContent>
            <p className="leading-7">

              {ele?.subheading}
            </p>
            </AccordionContent>
          </AccordionItem>
)}
          
          
        </Accordion>
      </div>
    </div>
  );
};

export default Section4;
