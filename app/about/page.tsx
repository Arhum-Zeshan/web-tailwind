import React from "react";
import { Button } from "@/components/ui/button";
import Header from "../components/Header";


const page = () => {
  return (
    <>
    
    <div className="flex justify-center">
    <div className=" border flex-col w-fit m-3 p-3 container flex  gap-1 rounded-md border-gray-500">
      <div className="">
        <h1>Report an Issues</h1>
        <p className="text-gray-400">What are you having problems with?</p>
      </div>
      <div className="flex flex-col sm:flex-row space-x-6 p-4 justify-between ">
        <div className="flex flex-col">
          <label htmlFor="area" className="text-sm  mt-1">
            Area
          </label>
          <select
            name="area"
            id="area"
            className=" border border-gray-400 rounded-md shadow-sm px-3 py-2 text-sm w-40 outline-none"
          >
            <option value="billing">Billing</option>
          </select>
        </div>
        <div className="flex flex-col mt-5 sm:mt-0">
          <label htmlFor="security" className="text-sm   mt-1">
            Security Level
          </label>
          <select
            name="security"
            id="security"
            className="border border-gray-400 rounded-md shadow-sm px-3 py-2 text-sm w-40 outline-none"
          >
            <option value="billing">Security Level</option>
          </select>
        </div>
      </div>
      <div className="px-2 flex flex-col ">
        <label htmlFor="sbuject" className="text-sm mt-1">
          Subject
        </label>
        <input
          type="text"
          placeholder="I need help with.."
          className="mt-2 border pl-3 rounded-md border-gray-400 shadow-sm outline-none"
        />
      </div>
      <div className="px-2 flex flex-col ">
        <label htmlFor="description" className="text-sm mt-4">
          Description
        </label>
        <textarea
          name="description"
          id="description"
          placeholder="Please include all information"
          className="mt-2 border pl-3 rounded-md border-gray-400 shadow-sm outline-none"
        ></textarea>
      </div>
      <div className="flex justify-between mt-4">
        <Button className="shadow-sm">Cancel</Button>
        <Button className="bg-black text-white ">Submit</Button>
      </div>
    </div>
    </div>
   
    </>
  );
};

export default page;
