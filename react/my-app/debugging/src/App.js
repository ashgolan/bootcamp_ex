import { useState } from "react";
import "./styles.css";
import action from "./action";
import LargeHeading from "./components/LargeHeading";
import MediumHeading from "./components/MediumHeading";

export default function App() {
  const terminator = "Bob";

  return (
    <div className="App">
      <LargeHeading>
        My name is terminator and I'm the exterminator
      </LargeHeading>
      <MediumHeading text={"Click and see me in action"} action={action}/>
    </div>
  );
}
