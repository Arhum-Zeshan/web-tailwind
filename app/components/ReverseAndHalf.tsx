import { useState } from "react";

export default function ReverseAndHalf() {
  const [input, setInput] = useState("");
  const [reverse, setReverse] = useState("");
  const [half, setHalf] = useState("");
 

  const handleCheck = () => {
   

    

    const reversedStr = input.split("").reverse().join("");
    const reversedNum = Number(reversedStr);
    const halfNum = reversedNum / 2;

    setReverse(reversedNum.toString());
    setHalf(halfNum.toString());
  };

  return (
   <div className="flex flex-col items-center justify-center   p-4">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-sm text-center">
      <h1 className="text-2xl font-bold">Reverse & Half</h1>

      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter 3-digit number"
        className="border border-gray-300 rounded-lg px-3 py-2 w-full mb-4 text-center text-lg"
      />

      <button
        onClick={handleCheck}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Process
      </button>

      {reverse && (
        <div className="text-green-700 text-lg font-semibold">
          Reversed: {reverse}
        </div>
      )}

      {half && (
        <div className="text-purple-700 text-lg font-semibold">
          Half: {half}
        </div>
      )}
      </div>
    </div>
  );
}
