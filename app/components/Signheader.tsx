import React from 'react'
import { ArrowDownLeft } from "lucide-react";
const sing = () => {
  return (
     <div className="flex border-4 border-white">
        <div className="bg-[#FFB300] h-96 w-36 flex items-center justify-center">
          <ArrowDownLeft className="size-full" />
        </div>

        <div>
          <div className="bg-[#0175D5] w-96 h-48 pr-5  pt-10 text-right flex flex-col gap-y-6">
            <span className="text-white font-bold text-5xl">ملتان روڈ</span>
            <span className="text-white font-bold text-5xl">Multan road</span>
          </div>

          <div className="bg-[#008F98]  h-48 pr-5 pt-10 text-right flex flex-col gap-y-6">
            <span className="text-white font-bold text-5xl">موٹر وے</span>
            <span className="text-white font-bold text-5xl">Motorway</span>
          </div>
        </div>
      </div>
  )
}

export default sing