"use client";

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
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Declared array on top
  const [count, setCount] = useState(1);

  return (
    <div>
      {/* Dropdown using the numbers array */}
      <select onChange={(e) => setCount(Number(e.target.value))}>
        {numbers.map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>

      {/* Input fields based on selected count */}
      <div style={{ marginTop: "10px" }}>
        {numbers.slice(0, count).map((_, i) => (
          <input
            key={i}
            type="text"
            placeholder={`Input ${i + 1}`}
            style={{ display: "block", margin: "5px 0" }}
          />
        ))}
      </div>
    </div>
  );
};


const MaxFinder4 = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Declared array
  const [count, setCount] = useState(1);

  return (
    <div>
      {/* Dropdown to choose how many inputs */}
      <select onChange={(e) => setCount(Number(e.target.value))}>
        {numbers.map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>

      {/* Input fields — use a check to limit how many are shown */}
      <div style={{ marginTop: "10px" }}>
        {numbers.map((_, i) =>
          i < count ? (
            <input
              key={i}
              type="text"
              placeholder={`Input ${i + 1}`}
              style={{ display: "block", margin: "5px 0" }}
            />
          ) : null
        )}
      </div>
    </div>
  );
};




export { MaxFinder, MaxFinder2, MaxFinder3, MaxFinder4 };


