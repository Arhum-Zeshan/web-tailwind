import { useState } from "react";

export default function PalindromeChecker() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [color, setColor] = useState("");

  const checkPalindrome = () => {
   

    const firstDigit = input[0];
    const lastDigit = input[2];

    const isPalindrome = firstDigit === lastDigit;
    setResult(isPalindrome ? "true" : "false");
    setColor(isPalindrome ? "text-green-600" : "text-red-600");
  };

  return (
    <div className="flex flex-col items-center justify-center   p-4">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-sm text-center">
      <h1 className="text-xl font-bold mb-4">3-Digit Palindrome Checker</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter 3-digit number"
        className="border border-gray-300 rounded-lg px-3 py-2 w-full mb-4 text-center text-lg"
      />
      <button
        onClick={checkPalindrome}
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
