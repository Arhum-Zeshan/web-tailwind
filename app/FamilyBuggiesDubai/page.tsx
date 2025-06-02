import React from "react";
import QuadBiking from "../components/QuadBiking";
import { FamilyCardsLeft, FamilyCardsRight } from "../components/FamliyCard";
import { OffRoadClassifiedFamily } from "../components/OffRoadClassified";
import { DuneTextOnImageCardFamily } from "../components/DuneTextOnImageCard";
const page = () => {
  return (
    <>
      <QuadBiking
        title="Family Dubai Dune Buggy Adventure"
        desc="Ride the wild side where the Global Desert meets thrill"
        price=" Start at 1100AED "
      />

      <FamilyCardsRight />
      <FamilyCardsLeft />
      
      <div className="h-fit w-full bg-black flex flex-col items-center">
        <h2 className="text-3xl bg md:text-4xl text-white font-extrabold text-center mb-12 ">
          OFF ROAD CLASSIFIED
           <hr className=" border-[#FF9805] w-3/4 border-2 mt-2" />
        </h2>
        </div>
      <OffRoadClassifiedFamily/>
      <div className="min-h-fit w-full bg-black flex flex-col items-center">
       <h2 className="text-3xl bg md:text-4xl text-white font-extrabold text-center my-12">
                  Our Blog Article Desert
                  <hr className="w-4/5 border-[#FF9805] border-2 mt-2" />
                </h2>
</div>
<DuneTextOnImageCardFamily/>
    </>
  );
};

export default page;
