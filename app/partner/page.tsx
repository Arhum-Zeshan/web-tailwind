import React from "react";
import QuadBiking from "../components/QuadBiking";
import LastTwoPages from "../components/LastTwoPages";
import BecomePartner from "../components/BecomePartner";
import ShipSteps from "../components/ShipSteps";
import DubaiCampEquipment from "../components/DubaiCampEquipment";
import HoverTextImage from "../components/HoverTextImage";

const page = () => {
  return (
    <>
      <LastTwoPages
        title="BE PARTNER"
        desc="At Global Desert Dubai, we believe the best experiences are built through partnership. Whether you’re a fellow tour operator, travel agency, or adventure enthusiast"
      booknow="REGISTRATION"/>
      <BecomePartner/>
      <ShipSteps/>
      <DubaiCampEquipment/>
       <div className="  flex flex-col space-y-5 space-x-5 md:flex-row justify-center  px-30">
        <HoverTextImage
          topheading="QUAD BIKING DUBAI"
          desc="Discover the thrill of quad biking across Dubai’s breathtaking desert dunes. An adventure like no other."
        />
        <HoverTextImage
          topheading="Dune Buggy Dubai"
          desc="Gear up for an incredible dune buggy adventure with Global Desert in Dubai! Enjoy free hotel pick-up and drop-off, and choose from 1-seater, 4-seater, or night tours. Reserve your spot now!"
        />

        <HoverTextImage
          topheading="Family Adventure"
          desc="Gear up for an incredible dune buggy adventure with Global Desert in Dubai! Enjoy free hotel pick-up and drop-off, and choose from 1-seater, 4-seater, or night tours. Reserve your spot now!"
        />
      </div>
    </>
  );
};

export default page;
