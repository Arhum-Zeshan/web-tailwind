import React from "react";
import Header from "@/app/components/Header";
import MyComponent from "@/app/components/MyComponent";
import GetStarted from "../components/GetStarted";
import Content from "../components/Content";
import UnderHeader from "../components/UnderHeader";
import MainContant from "../components/MainContant";
import LastContent from "../components/LastContent";

import CtaSign from "../components/CtaSign";

const page = () => {
  return (
    <div className="flex flex-col space-y-4">
   
      
      <UnderHeader/>
      <MainContant/>
      <LastContent/>
      <CtaSign/>
      

    </div>
  );
};

export default page;
