import React from "react";
import BlackHeader from "../components/BlackHeader";
import ContentByMe from "../components/ContentByMe";
import Header from "../components/Header";
import Content from "../components/Content";
import HoverTextImage, {
  HoverTextImageAll,
} from "../components/HoverTextImage";
import GalleryDes from "../components/GalleryDes";
import { GridHoverMultiple } from "../components/GridHover";
import { DuneTextOnImageCardall } from "../components/DuneTextOnImageCard";

const page = () => {
  return (
    <>
      <ContentByMe />
      <Content
        desc="Discover Dubai’s stunning desert with our premium dune buggies. Ride through vast golden sands, making exhilarating memories. Choose from solo buggy adventures or guided tours. Our highly-rated instructors ensure a safe, thrilling experience.
"
      >
        <h2>
          OFFER DUNE BUGGY <span className="text-[#EC8425]">TOURS</span>
        </h2>
      </Content>
      <HoverTextImageAll />
      <Content
        desc="Embark on an unforgettable adventure with Global Desert Adventure premium dune buggies in Dubai.
Cruise through the breathtaking, ever-shifting sand dunes, surrounded by stunning desert scenery.
Choose a solo dune buggy ride for a personal thrill or opt for a guided tour.
Our highly trained professional instructors ensure a safe and exciting experience.
Perfect for adventurers of all levels, our tours cater to your preferences.
Create lasting memories in the heart of Dubai’s iconic desert landscape.
Book your dune buggy journey today!
"
      >
        <h2>
          Dubai Dune Buggy Tours <span className="text-[#EC8425]">TOURS</span>
        </h2>
      </Content>
      <GridHoverMultiple />
      <GalleryDes />
      <div className="min-h-fit w-full bg-black flex flex-col items-center">
        <h2 className="text-3xl bg md:text-4xl text-white font-extrabold text-center my-12">
          Our Blog Article Desert
          <hr className="w-4/5 border-[#FF9805] border-2 mt-2" />
        </h2>
      </div>
      <DuneTextOnImageCardall />
    </>
  );
};

export default page;
