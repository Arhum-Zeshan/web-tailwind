import { useState } from "react";
// This component checks if a number contains the digit '5'.

export default function HasFiveChecker() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [color, setColor] = useState("");

  const checkHasFive = () => {
   
    const hasFive = input.includes("5");

    setResult(hasFive ? "true" : "false");
    setColor(hasFive ? "text-green-600" : "text-red-600");
  };

  return (
    <div className="flex flex-col items-center justify-center   p-4">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-sm text-center">
      <h1 className="text-2xl font-bold">Check if Number Has 5</h1>

      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter number less than 999"
        className="border border-gray-300 rounded-lg px-3 py-2 w-full mb-4 text-center text-lg"   />

      <button
        onClick={checkHasFive}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Check
      </button>

      {result && (
        <div className={`text-xl font-semibold ${color}`}>
          {result}
        </div>
      )}
    </div>
    </div>
  );
}
