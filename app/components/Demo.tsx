import React, { useState } from "react";
// interface Demoprops {
//   start: number;
// }
const Demo = () => {
  // make a state for count
  const [color, setColor] = useState("ffffff");

  // Generic function to set color
  const handleColorChange = (colorValue: string) => {
    if (colorValue === "random") {
      let colors = ["ff0000", "00ff00", "0000ff", "ff00ff", "00ffff"];
      var index = Date.now() % colors.length;
      colorValue = colors[index];
      console.log(index);
      let now = new Date();
      let time = now.toLocaleTimeString("en-US"); // Includes AM/PM

      console.log(time);
    }

    setColor(`#${colorValue}`);
  };

  return (
    <div
      style={{ backgroundColor: color }}
      className="flex gap-4 h-screen items-center justify-center flex-col transition duration-300"
    >
      <h1 className="text-center">{color}</h1>
      <button
        onClick={() => handleColorChange("ff0000")}
        className={`mt-6 px-6 py-2 border   bg-blue-300 border-white text-white font-medium hover:bg-white hover:text-black transition duration-300`}
      >
        red
      </button>
      <button
        onClick={() => handleColorChange("00FF00")}
        className="mt-6 px-6 py-2 border  bg-blue-300 border-white text-white font-medium hover:bg-white hover:text-black transition duration-300"
      >
        green
      </button>
      <button
        onClick={() => handleColorChange("0000FF")}
        className="mt-6 px-6 py-2 border bg-blue-300 border-white text-white font-medium hover:bg-white hover:text-black transition duration-300"
      >
        blue
      </button>
      <button
        onClick={() => handleColorChange(`random`)}
        className="mt-6 px-6 py-2 border bg-green-300 border-white text-white font-medium hover:bg-white hover:text-black transition duration-300"
      >
        random
      </button>
    </div>
  );
};

export default Demo;
