"use client";
import React, { useState } from "react";

export default function DoubleDigitChecker() {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");

  const checkDoubleDigit = () => {
    if (input.length === 2 && input[0] === input[1]) {
      setMessage("It's a double digit number");
    } else {
      setMessage("It is not");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center   p-4">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-sm text-center">
        <h1 className="text-xl font-bold mb-4">Double Digit Checker</h1>
        <input
          type="text"
          maxLength={2}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 w-full mb-4 text-center text-lg"
          placeholder="Enter a 2-digit number"
        />
        <button
          onClick={checkDoubleDigit}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Check
        </button>
        {message && (
          <p className="mt-4 text-lg font-medium text-gray-700">{message}</p>
        )}
      </div>
    </div>
  );
}
