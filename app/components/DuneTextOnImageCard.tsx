import React from "react";
interface DuneTextProps{
    number:string;
    topheading:string;
    desc:string;
}
const DuneTextOnImageCard = ({number,topheading,desc}:DuneTextProps) => {
  return (
    <div className="relative w-80 h-[500px] group overflow-hidden rounded-xl shadow-lg cursor-pointer">
      {/* Background Image */}
      <img
        src="https://picsum.photos/400/500?random=16"
        alt="Dune Buggy"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Diagonal White Overlay */}
      <div
        className="absolute right-0 top-0 w-0 h-0 
    border-t-[500px] border-t-transparent 
    border-l-[320px] border-l-white 
    z-10 transition-all duration-500 group-hover:border-l-[1000px]"
      >
        <div className="absolute z-20 right-30 -top-50 h-full w-[320px] flex items-center justify-end pr-8 transition-opacity duration-500 group-hover:opacity-0">
          <div className="text-[#ff9805] ">
            <p className="text-xl font-bold mb-2">{number}</p>
            <h2 className="text-xl font-semi  w-40">
             {topheading}
            </h2>
          </div>
        </div>
      </div>
      {/* Full Text Overlay (on hover) */}
      <div className="absolute inset-0 z-30 bg-white p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <p className="text-gray-900 text-base mb-4">
        {desc}
        </p>
        <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
          Read More
        </button>
      </div>
    </div>
  );
};

const DuneTextOnImageCardall= () => {
  return (
         <div className="bg-black flex w-screen md:w-screen flex-wrap gap-20 justify-center  ">
          
          <div className="grid grid-rows-3 md:grid-cols-3 gap-10">
            <DuneTextOnImageCard
              number="01"
              topheading=" World’s Most
              Luxurious : Price
              Dune Buggy"
              desc="  Step into the lap of luxury with the world’s most extravagant and
          expensive dune buggy — a true marvel that combines high-performance
          capabilities with the opulence of a luxury…"
            />
            <DuneTextOnImageCard
              number="02"
              topheading=" World’s Most
              Luxurious : Price
              Dune Buggy"
              desc="  Step into the lap of luxury with the world’s most extravagant and
          expensive dune buggy — a true marvel that combines high-performance
          capabilities with the opulence of a luxury…"
            />
            <DuneTextOnImageCard
              number="03"
              topheading=" World’s Most
              Luxurious : Price
              Dune Buggy"
              desc="  Step into the lap of luxury with the world’s most extravagant and
          expensive dune buggy — a true marvel that combines high-performance
          capabilities with the opulence of a luxury…"
            />{" "}
            <DuneTextOnImageCard
              number="04"
              topheading=" World’s Most
              Luxurious : Price
              Dune Buggy"
              desc="  Step into the lap of luxury with the world’s most extravagant and
          expensive dune buggy — a true marvel that combines high-performance
          capabilities with the opulence of a luxury…"
            />{" "}
            <DuneTextOnImageCard
              number="05"
              topheading=" World’s Most
              Luxurious : Price
              Dune Buggy"
              desc="  Step into the lap of luxury with the world’s most extravagant and
          expensive dune buggy — a true marvel that combines high-performance
          capabilities with the opulence of a luxury…"
            />{" "}
            <DuneTextOnImageCard
              number="06"
              topheading=" World’s Most
              Luxurious : Price
              Dune Buggy"
              desc="  Step into the lap of luxury with the world’s most extravagant and
          expensive dune buggy — a true marvel that combines high-performance
          capabilities with the opulence of a luxury…"
            />
          </div>
        </div>
      );
};

const DuneTextOnImageCardFamily= () => {
  return (
         <div className="bg-black flex w-screen md:w-screen flex-wrap gap-20 justify-center  ">
          
          <div className="grid grid-rows-3 md:grid-cols-3 gap-10">
            <DuneTextOnImageCard
              number="01"
              topheading=" World’s Most
              Luxurious : Price
              Dune Buggy"
              desc="  Step into the lap of luxury with the world’s most extravagant and
          expensive dune buggy — a true marvel that combines high-performance
          capabilities with the opulence of a luxury…"
            />
            <DuneTextOnImageCard
              number="02"
              topheading=" World’s Most
              Luxurious : Price
              Dune Buggy"
              desc="  Step into the lap of luxury with the world’s most extravagant and
          expensive dune buggy — a true marvel that combines high-performance
          capabilities with the opulence of a luxury…"
            />
            <DuneTextOnImageCard
              number="03"
              topheading=" World’s Most
              Luxurious : Price
              Dune Buggy"
              desc="  Step into the lap of luxury with the world’s most extravagant and
          expensive dune buggy — a true marvel that combines high-performance
          capabilities with the opulence of a luxury…"
            />{" "}
            <DuneTextOnImageCard
              number="04"
              topheading=" World’s Most
              Luxurious : Price
              Dune Buggy"
              desc="  Step into the lap of luxury with the world’s most extravagant and
          expensive dune buggy — a true marvel that combines high-performance
          capabilities with the opulence of a luxury…"
            />{" "}
            <DuneTextOnImageCard
              number="05"
              topheading=" World’s Most
              Luxurious : Price
              Dune Buggy"
              desc="  Step into the lap of luxury with the world’s most extravagant and
          expensive dune buggy — a true marvel that combines high-performance
          capabilities with the opulence of a luxury…"
            />{" "}
            <DuneTextOnImageCard
              number="06"
              topheading=" World’s Most
              Luxurious : Price
              Dune Buggy"
              desc="  Step into the lap of luxury with the world’s most extravagant and
          expensive dune buggy — a true marvel that combines high-performance
          capabilities with the opulence of a luxury…"
            />
          </div>
        </div>
      );
};
export {DuneTextOnImageCard,DuneTextOnImageCardall,DuneTextOnImageCardFamily} ;
