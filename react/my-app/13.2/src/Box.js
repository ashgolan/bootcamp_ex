import React, { useState, useEffect } from "react";
import "./Box.css";
function Box() {
  const [anim, setAnim] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setAnim("myBox");
    }, 1000);
    setTimeout(() => {
      setAnim(null);
    }, 4000);
  }, []);
  return (
    <div>
      <div style={{ width: "100px", height: "100px" }} className={anim}></div>
      <div style={{ width: "200px", height: "200px" }} className={anim}></div>
      <div style={{ width: "300px", height: "300px" }} className={anim}></div>
    </div>
  );
}

export default Box;
