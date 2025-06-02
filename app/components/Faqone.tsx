"use client"; // Required in Next.js 13+ app directory for client components

import { useState } from "react";
import { ChevronRight } from "lucide-react";
interface FaqBarProps {
  desc: string;
}

function FaqBar({ desc }: FaqBarProps) {
  const [isOpen, setIsOpen] = useState(false); // ✅ useState inside a component

  return (
    <div className="w-full max-w-4xl mx-auto text-white ">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#f08522] text-white hover:bg-white hover:text-black focus:bg-white focus:text-black  rounded-full px-6 py-4 flex justify-between items-center cursor-pointer"
      >
        <span className="font-medium text-lg">{desc}</span>
        <ChevronRight
          className={`w-6 h-6 transform transition-transform duration-300 ${
            isOpen ? "rotate-90" : ""
          }`}
        />
      </div>

      <div
        className={`transition-all overflow-hidden duration-500 ease-in-out ${
          isOpen ? "max-h-[500px] mt-6" : "max-h-0"
        }`}
      >
        <div className="px-4 sm:px-8">
          <p className="text-lg mb-4">
            You don’t need to be a pro to enjoy our desert adventures! While
            some tours may have age or skill requirements, many are perfect for
            beginners. We’ll give you all the training you need—just show up
            ready for fun!
          </p>
          <p className="text-lg">
            For specific rules, check with your chosen tour. But don’t
            worry—most first-timers are riding confidently within minutes thanks
            to our clear instructions and patient guides.
          </p>
        </div>
      </div>
    </div>
  );
}
const Faqall = () => {
  return (
    <div className="flex flex-col bg-black pt-3 space-y-6">
      <h1 className="text-center text-3xl font-extrabold text-white sm:text-4xl">
        FAQ <span className="text-[#F08522]">DUBAI BUGGY </span>TOURS
      </h1>
      <FaqBar desc=" Do I need any prior experience to participate in a Dubai buggy tour?" />
      <FaqBar desc=" Do I need any prior experience to participate in a Dubai buggy tour?12" />
    </div>
  );
};
export { FaqBar, Faqall };
