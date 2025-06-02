import React from "react";
import { Ban } from "lucide-react";

const page = () => {
  return (
    <div className="container flex bg-blue-500 mx-auto  justify-center items-center p-10">
      <div className="flex p-4 border-1 gap-2 max-w-[800px] min-w-[600px] bg-blue-500 relative rounded-sm">
        <div className="absolute -top-1.5 -left-1 bg-blue-500 z-10 size-10 ">
          <span>
            <Ban></Ban>
          </span>
        </div>
        <div className="w-20 h-24 bg-red-500 z-20"></div>
        <div className="flex flex-col  text-white bg-purple-800 p-1 w-full gap-1 justify-between ">
          <div className="bg-red-800">
            <h1>Nick Girga</h1>
            <span>making games and music :p</span>
          </div>
          <div className="bg-amber-700 flex justify-between ">
            <span>16 components</span>
            <a
              href="#"
              className="flex   gap-1 bg-amber-400  rounded-md hover:bg-red-900"
            >
              <Ban className="inline mt-1"></Ban>
              <span>4k</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
