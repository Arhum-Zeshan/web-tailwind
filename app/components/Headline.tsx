import React from 'react'

const Headline = () => {
  return (
   <div className="flex p-1">
        <div className="w-0.5 bg-[#FD0000] mx-1  h-auto "></div>
        <div className=" text-black flex flex-col pb-3 ">
          <span className="bg-[#FD0000] w-fit font-bold  text-white ">
            REMEMBER WHEN
          </span>
          <span className="font-extrabold text-2xl  leading-none">
            8 ICONIC MOMENTS<br></br> FROM FASHION <br></br>HISTORY
          </span>
        </div>
      </div>
  )
}

export default Headline