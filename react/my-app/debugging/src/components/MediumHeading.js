import React from "react";

const MediumHeading = (props) => {
  return <h1 onClick={props.action}>{props.text}</h1>;
};

export default MediumHeading;
