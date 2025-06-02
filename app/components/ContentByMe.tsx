import Image from "next/image";
import Link from "next/link";
import React from "react";

const ContentByMe = () => {
  return (
    <div
  className="relative bg-cover bg-center h-screen flex items-center justify-center text-white"
  style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale')" }}
>
  <div className="text-center  p-4 sm:p-6 md:p-8 rounded-md w-full max-w-3xl mx-2">
    <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
      GLOBAL DESERT ADVENTURE DUNE BUGGY DUBAI
    </h1>
    <p className="max-w-2xl mx-auto text-xs sm:text-sm md:text-base mb-6">
      Experience thrilling dune buggy adventures in Dubai’s stunning desert. Navigate iconic red dunes with expert guides for an unforgettable ride.
    </p>

    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
      <img
        src="https://picsum.photos/100?1"
        alt="Buggy 1"
        className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-md"
      />
      <img
        src="https://picsum.photos/100?2"
        alt="Buggy 2"
        className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-md"
      />
      <img
        src="https://picsum.photos/100?3"
        alt="Buggy 3"
        className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-md"
      />
    </div>

    <button className="bg-[#F08522] hover:bg-white hover:text-black text-white font-semibold py-2 px-6 rounded-br-2xl transition duration-300">
      Explore More
    </button>
  </div>
</div>

  );
};

export default ContentByMe;
