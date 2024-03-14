import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


const Section7 = () => {
    const FAQ = [
      {
        question: "Is there a free trial available?",
        answer:
          "Yes, you can try us for free for 30 days. If you want, we ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
      },
      {
        question: "Can I change my plan later??",
        answer:
          "Yes, you can try us for free for 30 days. If you want, we ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
      },
      {
        question: "What is your cancellation policy?",
        answer:
          "Yes, you can try us for free for 30 days. If you want, we ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
      },
      {
        question: "Can other info be added to an invoice?",
        answer:
          "Yes, you can try us for free for 30 days. If you want, we ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
      },
      {
        question: "How does billing work?",
        answer:
          "Yes, you can try us for free for 30 days. If you want, we ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
      },
      {
        question: "How do I change my account email?",
        answer:
          "Yes, you can try us for free for 30 days. If you want, we ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
      },
    ];
  return (
    <div className="faqs mt-32 px-32 flex flex-col justify-center items-center">
      <div className="heading">
        <h1 className="font-light text-4xl leading-[45px]">
          <span className="font-semibold">Frequent </span>Asked Questions
        </h1>
      </div>
      <div className="acordian w-[70%] ">
        <Accordion type="single" collapsible className="w-full mt-20">
          {FAQ.map((ele,index) => (
            <AccordionItem value={`item-${index+1}`} key={index}>
              <AccordionTrigger >
                {ele?.question}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-gray-600 leading-6">
                  {ele?.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default Section7
