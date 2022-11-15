import React, { useState, useEffect } from "react";
function FavoriteColor() {
  const [color, setColor] = useState("red");

  useEffect(() => {
    setTimeout(() => {
      setColor("blue");
    }, 1000);
  }, []);

  return (
    <div>
      <h1>My favorite color is {color}</h1>
      <div id={12}></div>
    </div>
  );
}
export default FavoriteColor;
