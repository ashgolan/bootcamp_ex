import React from "react";
import { useState } from "react";
import "./App.css";
import Parent from "./components/CustomButton";
import styled from "styled-components";

const ColoredWord = styled.div`
  color: white;
  background-color: ${(props) => props.id};
  font-weight: bold;
`;

function App() {
  const [currColor, changeColor] = useState("");
  const setColor = function (color) {
    changeColor(color);
  };
  const colors = ["blue", "red", "yellow"];
  return (
    <div>
      <Parent colors={colors} onSaveData={setColor}></Parent>
      <ColoredWord id={currColor}>color Selected is: {currColor}</ColoredWord>
    </div>
  );
}

export default App;
