import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <h1>{props.name}</h1>
      <h2>{props.birthday}</h2>
      <h3>{props.meats}</h3>
      <h3>{props.fish}</h3>
    </div>
  );
}

export default Card;
