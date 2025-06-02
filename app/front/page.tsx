import React from "react";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div className="flex h-full bg-red-600 m-1 mb-10 ">
      <img
        src="https://picsum.photos/536/354"
        alt="a"
        className="w-1/2 h-lvh"
      />
      <div className="bg-yellow-400 flex flex-col w-1/2  justify-center text-left pl-2 sm:bg-blue-500 md:bg-red-400 lg:bg-pink-500">
        <h1 className="text-lg font-bold ">Hello</h1>
        <p className="mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea fugiat
          totam culpa impedit itaque, facere aspernatur! Ipsa autem, architecto
          et alias nobis eligendi eaque, in, hic molestiae totam nam beatae.
        </p>
        <Button className="shadow-sm w-fit bg-white hover:bg-black hover:text-white focus:border focus:border-blue-700">
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default page;
