import React from "react";

const MapFunctionNumber = () => {
  const a = [10, 20, 30, 40, 50];
  const b = a.map((x) => x * 10);

  return (
    <div>
      <h2>Mapped Values:</h2>
      <p>{b.join(" ")}</p>
    </div>
  );
};

const MapFunctionString = () => {
  var c = [
    { fname: "Arhum", Lname: "Zeeshan" },
    { fname: "Zeeshan", Lname: "Shabbir" },
    { fname: "M", Lname: "Ali" },
  ];
  const d = c.map((x) => x .fname + x.Lname);
  return (
   <div>
      <h2>Mapped Values:</h2>
      <p>{d.join("")}</p>
    </div>
  )
};

export { MapFunctionNumber, MapFunctionString };
