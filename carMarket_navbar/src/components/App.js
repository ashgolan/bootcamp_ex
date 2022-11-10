import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";
import Nav from "./nav/Nav";
import { carMarket } from "../carsAgObj";
function App() {
  const H2styled = styled.h2`
    text-align: center;
    color: red;
  `;
  const [title, setTitle] = useState(null);
  const changemyTitle = (newTitle) => {
    setTitle(newTitle);
  };
  return (
    <div>
      <Nav change={changemyTitle} departments={Object.keys(carMarket)} />
      <H2styled>{title}</H2styled>
    </div>
  );
}

export default App;

// 1. component => player
// 2. component => cube
// 3. state in App.js
// 4. the first state is the current points
// 5. the second state is the current player
// 6. function to get the random numbers 1-6 .
// 7. other function to add the current point to the total points .
// 8. state of the points change's after "rolling" dice or hold .
// 9. state of the player's changes after "hold" or tie of 6 pintes in two dices .

// work schedule :
// creating components -> 5 hours
// display on browser -> 4 hour
// check if the state is in the correct place -> 2 hours
// creaing functions -> 6 hours
// styling -> 6 hours
// responsive -> 4 hours
// localStorage ( number of winnings)  -> 4 hours
// playing :) -> 1 hour
