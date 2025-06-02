import React from "react";
interface TaskProps{
    bgColor:string
    desc:String
    Name:String
    location:String
}
const Task = ({bgColor,desc,Name,location}:TaskProps) => {
  return (
    <div className="bg-gray-500  w-96 h-fit flex flex-col text-center  items-center  justify-between gap-y-10 z-0 pb-2">
      <div style={{ backgroundColor: bgColor }}
      className={`rounded-full size-40  -mt-20 ring-white  ring-6`}>{bgColor}</div>
      <div className="">
       {desc}
      </div>
      <div className="">
        <span className="text-orange-400 "> {Name}</span> {location}
      </div>
    </div>
  );
};

export default Task;
