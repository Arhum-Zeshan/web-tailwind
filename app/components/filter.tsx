import React from "react";

const FilterNumber = () => {
  const a = [10, 20, 30, 40, 89, 50];
  const b = a.filter((x) => x % 2 === 0);
  return (
    <div>
      <h2>filter Values:</h2>
      <p>{b.join(" ")}</p>
    </div>
  );
};

const FilterObject = () => {
  const name = [
    { fname: "Arhum", Lname: "Zeeshan" },
    { fname: "Zeeshan", Lname: "Shabbir" },
    { fname: "M", Lname: "Ali" },
  ];

  const filtername = name.filter((x) => (x.fname + x.Lname).length > 6);

  const displayString = filtername
    .map((x) => `${x.fname} ${x.Lname}`)
    .join(", ");

  return (
    <div>
      <h2>Filter Values:</h2>
      <p>{displayString}</p>
    </div>
  );
};

export { FilterNumber, FilterObject };
