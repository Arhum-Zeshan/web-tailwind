"use client";

import { Flag } from "lucide-react";
import React, { useState } from "react";

const MaxFinder = () => {
  const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [selected, setSelected] = useState(1);

  return (
    <>
      <select
        name="numbers"
        id="numbers"
        value={selected}
        onChange={(e) => setSelected(Number(e.target.value))}
      >
        {numbers.map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <div className="mt-4 flex flex-col gap-2">
        {Array.from({ length: selected }).map((_, idx) => (
          <input
            key={idx}
            type="text"
            placeholder={`Input ${idx + 1}`}
            className="border px-2 py-1"
          />
        ))}
      </div>
    </>
  );
};

const MaxFinder2 = () => {
  const [selected, setSelected] = useState(1); // Default number of inputs

  return (
    <div className="p-4">
      {/* Dropdown to select how many inputs to show */}
      <select
        value={selected}
        onChange={(e) => setSelected(Number(e.target.value))}
        className="border px-2 py-1"
      >
        {/* Options from 1 to 10 */}
        {[...Array(10)].map((_, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>

      {/* Render inputs based on selection */}
      <div className="mt-4 flex flex-col gap-2">
        {[...Array(selected)].map((_, i) => (
          <input
            key={i}
            type="text"
            placeholder={`Input ${i + 1}`}
            className="border px-2 py-1"
          />
        ))}
      </div>
    </div>
  );
};

const MaxFinder3 = () => {
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const isPrime = (n: number) => {
    for (var i = 2; i < n; i++) {
      if (n % i == 0) return false;
    }

    return true;
  };

  function getPrimes() {
    return numbers.filter((num) => isPrime(num));
  }
  const isOdd = (n: number) => n % 2 != 0;

  function elementsAvg() {
    const odds = numbers.filter((num) => isOdd(num));
    console.log(odds);
    const sumOfOdds = odds.reduce((a, b) => a + b);
    return sumOfOdds / odds.length;
  }
  const power = (base: number, exp: number) => {
    var result = base;
    for (var i = 1; i < exp; i++) {
      result = result * base;
    }
    return result;
  };
  const isPalinDrome = (text: string) => text === reversString(text);

  const reversString = (text: string) => text.split("").reverse().join("");

  const numberMultiplybyn = (n: number) => numbers.map((num) => num * n);

  return (
    <>
      <h2>{isPalinDrome("arhum") ? "true" : "false"}</h2>
    </>
  );
};

const PalinDromeFinder = () => {
   const [username,setUsername]= useState("")
  const feedBack=()=>{
   
    if(username.length < 3) {
    return "Username must be at least 3 characters long"}
    else if(username.length > 15) {
      return "Username must be less than 15 characters long"
    }
  
    const reversedUsername = username.split("").reverse().join("");
    if(reversedUsername === username) {
      return "Username is a palindrome";
    } else {
      return "Username is not a palindrome";
    }
  

  }
  return (
    <div>
      <h1>{feedBack()}</h1>
      <input type="text" value={username}
      onChange={(e) => setUsername(e.target.value)}/>
    </div>
  )
}
export { MaxFinder, MaxFinder2, MaxFinder3, PalinDromeFinder };



