import { useState } from "react";
// This component checks if all digits of a 3-digit number are the same.

export default function AllDigitsSameChecker() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [color, setColor] = useState("");

  const checkAllSame = () => {
    

    const [a, b, c] = input;

    const allSame = a === b && b === c;
    setResult(allSame ? "true" : "false");
    setColor(allSame ? "text-green-600" : "text-red-600");
  };

  return (
    <div className="flex flex-col items-center justify-center   p-4">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-sm text-center">
      <h1 className="text-2xl font-bold">All Digits Same Checker</h1>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter 3-digit number"
        className="border border-gray-300 rounded-lg px-3 py-2 w-full mb-4 text-center text-lg" />

      <button
        onClick={checkAllSame}
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
