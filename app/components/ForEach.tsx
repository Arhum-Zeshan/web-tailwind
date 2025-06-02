import React from "react";

const ForEachNumber = () => {
  var a = ["Rahul", "Karan", "Aman", "Neha"];
  a.forEach(function (value) {
    document.write(value + "<br>");
  });
  return <div>ForEach</div>;
};

export { ForEachNumber };
