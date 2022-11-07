import React from "react";

function Question1() {
  const data = ["hello", "world"];
  const number1 = 5;
  const number2 = 6;
  const string = "I love React!"
  return (
    <div>
      <div>{data.join(" ")}</div>
      <hr></hr>
      <div>{`${number1} + ${number2} = ${number1 + number2}`}</div>
      <hr></hr>
      <div>{`The string’s length is ${string.length}`}</div>
      <hr></hr>
    </div>)
}

export default Question1;