import React from "react";
import QuadBiking from "../components/QuadBiking";
import { QuadCardsLeft, QuadCardsRight } from "../components/QuadTourCards";
import {OffRoadClassifiedall} from "../components/OffRoadClassified";
import {DuneTextOnImageCardall} from "../components/DuneTextOnImageCard";

const page = () => {
  return (
    <>
      <QuadBiking title="DUBAI QUAD BIKING TOURS" desc="Ride the wild side where the desert meets thrill" price=" Start at 250AED " />
      <QuadCardsRight />
      <QuadCardsLeft />

      <div className="min-h-fit w-full bg-black flex flex-col items-center">
        <h2 className="text-3xl bg md:text-4xl text-white font-extrabold text-center  mb-12">
          OFF ROAD CLASSIFIED
           <hr className=" border-[#FF9805] w-3/4 border-2 mt-2" />
        </h2>
</div>
      <OffRoadClassifiedall/>
       <div className="min-h-fit w-full bg-black flex flex-col items-center">
       <h2 className="text-3xl bg md:text-4xl text-white font-extrabold text-center my-12">
                  Our Blog Article Desert
                  <hr className="w-4/5 border-[#FF9805] border-2 mt-2" />
                </h2>
</div>
      
   <DuneTextOnImageCardall/>
      
    </>
  );
};

export default page;
