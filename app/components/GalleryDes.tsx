import React from "react";

const GalleryDes = () => {
  return (
    <div>
      <h1 className="text-center bg-black pt-16 text-3xl font-extrabold text-white sm:text-6xl divide-y-2">
        Our <span className="text-[#F08522] ">Dubai Desert </span>Camp Equipment
      </h1>
      <div className="bg-black grid grid-cols-12 grid-rows-12 p-2 pb-6 gap-5 h-screen px-24 pt-5 border-b-2 border-gray-600">
        <div className="bg-red-50 col-span-6 row-span-4"></div>
        <div className="bg-purple-400 col-span-3 row-span-4"></div>
        <div className="bg-purple-400 col-span-3 row-span-4"></div>
        <div className="bg-pink-600 col-span-3 row-span-8"></div>
        <div className="bg-red-400 col-span-6 row-span-4"></div>
        <div className="bg-purple-400 col-span-3 row-span-4"></div>
        <div className="bg-purple-400 col-span-3 row-span-3"></div>
        <div className="bg-red-400 col-span-6 row-span-3"></div>
      </div>
    </div>
  );
};

export default GalleryDes;
