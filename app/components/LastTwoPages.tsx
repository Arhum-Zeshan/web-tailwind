import React from "react";
interface Partnerheaderprops {
  title: string;
  desc: string;
  price?: string;
  booknow: string;
}

const LastTwoPages = ({ title, desc, price }: Partnerheaderprops) => {
  return (
    <div
      className="relative bg-cover bg-center h-fit flex items-center justify-center"
      style={{ backgroundImage: "url('https://picsum.photos/536/354')" }}
    >
      <div className=" bg-opacity-60 pb-46 rounded text-center text-white pt-40">
        <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
        <p className="text-sm md:text-2xl my-4 mx-20 ">{desc}</p>
        <p className=" mt-2 font-medium text-2xl text-[#FF9805] ">{price}</p>
        <div className="relative inline-block top-20">
          {/* Orange Circle */}
          <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#FF9805] rounded-full z-10 transition-all duration-300 group-hover:scale-125"></span>

          {/* Button */}
          <button className="group relative z-0 border border-white text-white font-bold text-base sm:text-lg px-4 sm:px-6 py-2 sm:py-2.5 bg-transparent rounded transition-all duration-300 hover:bg-white hover:text-black">
            Registration
          </button>
        </div>
      </div>
    </div>
  );
};

export default LastTwoPages;
