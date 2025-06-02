import React from "react";

const ObjactPass = () => {
  const names = [
    { fname: "Arhum", Lname: "Zeeshan" },
    { fname: "Zeeshan", Lname: "Shabbir" },
    { fname: "M", Lname: "Ali" },
    { fname: "M", Lname: "Ali" },

    { fname: "", Lname: "Ali" },

    { fname: "M.......", Lname: "Ali" },

    { fname: "M++", Lname: "Ali" },

    { fname: "M===", Lname: "Ali" },
  ];

  return (
    <div>
      <ul>
       { names.map((name, index) => (
          <li key={index}>
            {name.fname} {name.Lname}   
            </li>
        ))}
      </ul>
    </div>
  );
};

export default ObjactPass;
