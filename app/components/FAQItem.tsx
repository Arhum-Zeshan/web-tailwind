import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
interface FaqItemProps {
  desc: string;
  question: string;
}
const FAQItem = ({ desc,question }: FaqItemProps) => {
  return (
    <Accordion type="single" collapsible className="w-full ">
      <AccordionItem value="item-1" >
        <AccordionTrigger  className="rounded-full duration-1000 bg-amber-300 p-4">{question}</AccordionTrigger>
        <AccordionContent className="bg-red-400 duration-1000   ">{desc}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FAQItem;
