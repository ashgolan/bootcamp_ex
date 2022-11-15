import React, { useState, useEffect } from "react";
import "./App.css";
function App() {
  const [color, setColor] = useState("");
  const [myclass, setMyClass] = useState(null);
  useEffect(() => {
    setMyClass("myBox");
    let count = 0;
    const myInterval = setInterval(() => {
      count++;
      let randomColor = Math.floor(Math.random() * 16777215).toString(16);
      setColor(`#${randomColor}`);
      if (count === 5) {
        clearInterval(myInterval);
        setMyClass("circleTheBox");
      }
    }, 500);
    return () => {};
  }, []);
  return (
    <div>
      <div style={{ backgroundColor: color }} className={myclass}></div>
    </div>
  );
}

export default App;
