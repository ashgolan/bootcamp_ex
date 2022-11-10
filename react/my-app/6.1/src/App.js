import React, { useState } from "react";
function App() {
  let num = 100;
  let [myNumber, setMyNumber] = useState(num);
  const increamentNumber = function () {
    setMyNumber((previousState) => previousState + 1);
  };
  return (
    <div>
      <button onClick={increamentNumber}>increament</button>
      <label>{myNumber}</label>
    </div>
  );
}

export default App;
