import React from "react";

const page = () => {
  return (
   <div className="mx-auto mt-2 flex  w-full flex-wrap bg-green-400 p-1 ">
  <div className="h-96 w-1/3 bg-red-400">aaa</div>
  <div className="flex w-2/3 flex-wrap bg-gray-400">
    <div className="h-1/2 w-1/2 bg-purple-400">purple</div>
    <div className="h-48 w-1/2 bg-yellow-400">yellow</div>
    <div className="h-48 flex-1 bg-pink-400">s</div>
  </div>
</div>

  );
};

export default page;
