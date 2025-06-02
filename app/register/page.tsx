import React from "react";
import RegisterPage from "../components/RegisterPage";
import FAQItem from "../components/Faqall/Footrer/FAQItem";

const page = () => {
  return (
    <>
      <div className="w-96 h-screen  container mx-auto flex flex-col gap-2">
        <FAQItem question="what is the question?" desc="hello" />
      
      </div>
    </>
  );
};

export default page;
