"use client";
import { Thermometer } from "lucide-react";
import React from "react";
import AllCards from "./FormulaCard";
import TemperatureFacts from "./FactCards";
import { useState } from "react";

const TempApp = () => {
  const [celsius, setCelsius] = useState(0);
  const Fahrenheit = (celsius * 9) / 5 + 32;


  const Status = () => {
    if (celsius <= 0) return { label: "Freezing", color: "bg-blue-500" };
    if (celsius <= 20) return { label: "Cold", color: "bg-cyan-500" };
    if (celsius <= 30) return { label: "Warm", color: "bg-yellow-400" };
    if (celsius <= 40) return { label: "Hot", color: "bg-orange-500" };
    return { label: "Extreme", color: "bg-red-600" };
  };
  const status = Status();

  return (
    <div className="flex flex-col items-center bg-[#E8E9EB] w-screen h-fit gap-y-5 pb-10">
      <div className="w-64 h-8 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 mt-5 flex items-center">
        <Thermometer className="relative -left-10  size-8" />
      </div>
      <p className=" text-sm text-[#878B94]">
        Convert between Celsius and Fahrenheit with interactive sliders
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-xl">
        {/* Celsius a*/}
        <div className="flex flex-col  space-y-4">
          <h2 className="text-lg font-semibold text-blue-600 text-center">
            Celsius (°C)
          </h2>
          <p className="text-3xl font-bold text-blue-700 text-center">
            {celsius}
          </p>
          <label className="text-sm text-gray-600 ">
            Use slider (-50°C to 100°C):
          </label>
          <input
            type="range"
            min={-50}
            step={0.1}
            max={100}
            value={celsius}
            onChange={(e) => setCelsius(parseFloat(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer  "
          />
          <label className="text-sm text-gray-600">Or enter exact value:</label>
          <input
            type="number"
            value={celsius}
            step="0.1"
            onChange={(e) => setCelsius(parseFloat(e.target.value))}
            className="border border-blue-400 rounded px-2 py-1 w-full text-center "
          />
        </div>

        {/* Fahrenheits*/}
        <div className="flex flex-col  space-y-4">
          <h2 className="text-lg font-semibold text-red-600 text-center">
            Fahrenheit (°F)
          </h2>
          <p className="text-3xl font-bold text-red-700 text-center">
            {Fahrenheit}
          </p>
          <label className="text-sm text-gray-600 text-center">
            Use slider (-58°F to 212°F):
          </label>
          <input
            type="range"
            min={-58}
            max={212}
            step={0.1}
            value={Fahrenheit}
            onChange={(e) =>
              setCelsius(((parseFloat(e.target.value) - 32) * 5) / 9)
            }
            className="w-full h-2 bg-gray-200 rounded-lg  accent-red-600"
          />
          <label className="text-sm text-gray-600">Or enter exact value:</label>
         <input
            type="number"
            value={Fahrenheit}
            step="0.1"
            onChange={(e) => setCelsius(((parseFloat(e.target.value) - 32) * 5) / 9)}
            className="border border-red-400 rounded px-2 py-1 w-full text-center focus:outline-none focus:ring-2 focus:ring-red-300 "
          />
        </div>

        <div className="col-span-1 md:col-span-2 flex justify-center pt-4">
          <button
            className={`${status.color} text-white px-6 py-2 rounded-full font-semibold shadow  transition duration-300`}
          >
            {status.label}
          </button>
        </div>
      </div>
      <AllCards />
      <TemperatureFacts />
    </div>
  );
};

export default TempApp;
