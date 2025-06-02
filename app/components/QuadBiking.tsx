import React from "react";
interface QuadBikingprops{
  title:string;
  desc:string;
  price?:string;
  booknow:string;
}
const QuadBiking = ({title,desc,price}:QuadBikingprops) => {
  return (
    <div
      className="relative bg-cover bg-center h-fit flex items-center justify-center"
      style={{ backgroundImage: "url('https://picsum.photos/536/354')" }}
    >
      <div className=" bg-opacity-60 pb-46 rounded text-center text-white pt-40">
        <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
        <p className="text-sm md:text-2xl my-4 mx-20 ">
          {desc}
        </p>
        <p className=" mt-2 font-medium text-2xl text-[#FF9805] ">
         {price} 
        </p>
        <button className="mt-4 px-6 py-2 border border-white rounded-full hover:bg-[#FF9805] hover:border-[#FF9805] hover:text-black transition duration-300">
          BOOK NOW!
        </button>
      </div>
    </div>
  );
};

export default QuadBiking;
