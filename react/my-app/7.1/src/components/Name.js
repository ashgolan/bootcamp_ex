import React from "react";

function Name(props) {
  // console.log(props);
  return (
    <div>
      {props.name.map((e) => {
        return <h1>{e}</h1>;
      })}
    </div>
  );
}

export default Name;
