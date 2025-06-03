import React from "react";
interface HoverTextProps {
  id: number;
  title: string;
  desc: string;
}
const HoverTextImage = ({ id,title, desc }: HoverTextProps) => {
  return (
    <div className="relative w-full max-w-xs md:max-w h-64 rounded-xl overflow-hidden group shadow-lg">
      {/* Background Image */}
      <img
        src="https://picsum.photos/400/400?random=19"
        alt="Quad Biking"
        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
      />

      <div className="absolute  inset-0 rounded-xl hover:backdrop-blur-sm flex flex-col items-center justify-end   group-hover:justify-center transition-all duration-700 ease-in-out transform hover:rounded-xl group-hover:scale-105 px-5">
        <p className="opacity-100 group-hover:opacity-0 text-white text-xl font-bold  transition-all duration-700 ease-in-out transform group-hover:-translate-y-4 group-hover:scale-105 absolute">
          {title}
        </p>

        <p className="opacity-0 group-hover:opacity-100 text-white text-xl font-bold  transition-all duration-700 ease-in-out transform group-hover:-translate-y-4 group-hover:scale-105 ">
          {title}
        </p>

        <p className="text-white text-sm text-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-in-out delay-100">
          {desc}{" "}
        </p>
        <button className="opacity-0 group-hover:opacity-100  bg-[#f08522] hover:bg-[#f08523] text-white text-sm font-semibold px-4 py-2 rounded  transition-all duration-700 ease-in-out delay-100 mt-8 transform group-hover:-translate-y-4">
          ↗ Book Now
        </button>
      </div>
    </div>
  );
};

const HoverTextImageAll = () => {
  var features = [
    {
      id: 1,
      title: "QUAD BIKING DUBAI",
      desc: "Discover the thrill of quad biking across Dubai’s breathtaking desert dunes. An adventure like no other.",
    },
    {
      id: 2,
      title: "Dune Buggy Dubai",
      desc: "Gear up for an incredible dune buggy adventure with Global Desert in Dubai! Enjoy free hotel pick-up and drop-off, and choose from 1-seater, 4-seater, or night tours. Reserve your spot now!",
    },
    {
      id: 3,
      title: "Family Adventure",
      desc: "Gear up for an incredible dune buggy adventure with Global Desert in Dubai! Enjoy free hotel pick-up and drop-off, and choose from 1-seater, 4-seater, or night tours. Reserve your spot now!",
    },
  ];
  return (
    <div className=" bg-black flex flex-col space-y-5 space-x-5 md:flex-row justify-center pt-10 px-30">
    {features.map((feature) =>  
      <HoverTextImage key={feature.id}    {...feature}     />
    )}
    </div>
  );
};

export { HoverTextImage, HoverTextImageAll };
