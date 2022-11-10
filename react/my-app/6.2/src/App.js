import React, { useState } from "react";
import "./App.css";
function App() {
  let x = "none";
  const [myX, setX] = useState(x);
  const ToggleShow = function () {
    setX((prevousState) => {
      return prevousState === "none" ? "block" : "none";
    });
  };
  return (
    <div>
      <button onClick={ToggleShow}>Show / hide</button>
      <div className="square" style={{ display: myX }}></div>
    </div>
  );
}

export default App;
