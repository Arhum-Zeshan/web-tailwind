import { Divide } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className=" flex  flex-col justify-center items-center bg-amber-400 mx-auto w-full">
      <div className="container flex bg-[#4af553]  flex-col  ">
        <div
          className="flex flex-col   text-center mt-2
          "
        >
          <span className="text-white">
            <strong>Welcome back!</strong>
          </span>
          <span className="text-gray-600">
            We're so excited to see you again!
          </span>
        </div>
        {/* main */}
        <div className="flex  w-full   bg-blue-500 ">
          <div className=" h-96 w-full bg-purple-800 sm:w-2/3"> a</div>
          <div className=" h-96 hidden sm:inline-block sm:w-1/3 bg-red-800"> a</div>
        </div>
      </div>
    </div>
  
  );
};

export default page;
