"use client";
import React from "react";
import { useState } from "react";

export default function OddDigitChecker() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const checkOddDigit = () => {
  

   
   const hasOdd = Number(input[0]) % 2 !== 0 && Number(input[1]) % 2 !== 0;
       setResult(hasOdd ? "true": "false");
  };

  return (
    <div className="flex flex-col items-center justify-center   p-4">
              <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-sm text-center">

        <h1 className="text-xl font-bold mb-4">Odd Digit Checker</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter 2-digit number"
          className="border border-gray-300 rounded-lg px-3 py-2 w-full mb-4 text-center text-lg"
      />
      <button
        onClick={checkOddDigit}
 className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"        >
        Check
      </button>
      {result && (
        <div className="text-xl font-semibold text-gray-800">{result}</div>
      )}
      </div>
    </div>
  );
}
