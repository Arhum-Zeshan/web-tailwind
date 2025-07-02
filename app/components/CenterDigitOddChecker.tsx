"use client";
import React from "react";
import { useState } from "react";

export default function CenterDigitOddChecker() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [color, setColor] = useState("");

  const checkFirstOdd = () => {
    const centerDigit = Number(input[1]);
    const isCenterOdd = centerDigit % 2 !== 0;

    setResult(isCenterOdd ? "true" : "false");
    setColor(isCenterOdd ? "text-green-600" : "text-red-600");
  };

  return (
    <div className="flex flex-col items-center justify-center   p-4">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-sm text-center">
        <h1 className="text-xl font-bold mb-4">Center Digit Checker</h1>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter 3-digit number"
          className="border border-gray-300 rounded-lg px-3 py-2 w-full mb-4 text-center text-lg"
        />
        <button
          onClick={checkFirstOdd}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Check
        </button>
        {result && (
          <div className={`text-xl font-semibold ${color}`}>{result}</div>
        )}
      </div>
    </div>
  );
}

