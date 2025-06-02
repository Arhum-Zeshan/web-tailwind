import React from 'react'
interface ContentProps{
  
  desc:string;
}
const Content = ({children,desc }:ContentProps) => {
  return (
<div
  className="relative h-[50vh]  sm:h-[70vh] md:h-[80vh] bg-cover bg-center flex items-center justify-center md:justify-start px-4 sm:px-8"
  style={{
    backgroundImage: "url('https://picsum.photos/1600/600')",
  }}
>
  <div className="bg-[#adb5bb] text-white p-4 h-fit sm:p-6 rounded-md w-96 md:h-fit max-w-md mx-auto md:mx-0 md:ml-[10%] text-center md:text-left">
    <h2 className="text-lg sm:text-xl md:text-4xl font-bold">
      {children}
    </h2>
    <p className="text-xs sm:text-sm mt-2">
{desc}    </p>
    <button className="mt-4 text-xs sm:text-sm text-white font-bold border border-white hover:border-black px-4 py-2 rounded hover:bg-black hover:text-white transition duration-300">
      ↗ Book Now
    </button>
  </div>
</div>

   

  )
}

export default Content