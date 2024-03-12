import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Section4 = () => {
  return (
    <div className="section-4 flex px-24 bg-slate-100  gap-16 py-24 mt-12">
      <div className="left w-[30%] flex flex-col gap-8 ">
        <h1 className="text-4xl leading-10 ">
          <span className="font-semibold">Execute</span> all your{" "}
          <span className="font-semibold">Business goals</span> in one place
        </h1>
        <p className="text-gray-700">
          Announce your brand to the right people, at the right time with
          innovative strategies that are built for your business and you.
        </p>
      </div>
      <div className="accordion right w-[60%]">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl">
              The Right People
            </AccordionTrigger>
            <AccordionContent>
              Yes, you can try us for free for 30 days. If you want, we ll
              provide you with a free, personalized 30 minute onboarding call to
              get you up and running as soon as possible.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2 " className="text-xl">
            <AccordionTrigger>The Right Team</AccordionTrigger>
            <AccordionContent>
              Yes, you can try us for free for 30 days. If you want, we ll
              provide you with a free, personalized 30 minute onboarding call to
              get you up and running as soon as possible.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3 " className="text-xl">
            <AccordionTrigger>The Right Time</AccordionTrigger>
            <AccordionContent>
              Yes, you can try us for free for 30 days. If you want, we ll
              provide you with a free, personalized 30 minute onboarding call to
              get you up and running as soon as possible.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4 " className="text-xl">
            <AccordionTrigger>The Right Place</AccordionTrigger>
            <AccordionContent>
              Yes, you can try us for free for 30 days. If you want, we ll
              provide you with a free, personalized 30 minute onboarding call to
              get you up and running as soon as possible.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Section4;
