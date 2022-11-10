import { useState } from "react";
import "./form.css";
function Form() {
  const [text, setText] = useState("");
  const saveChangeHandler = function (event) {};
  console.log(text);

  return (
    <form>
      <container>
        <input
          type="checkbox"
          id="red"
          onChange={(e) => setText(e.target.id)}
        />
        <label for="read">I read</label>
      </container>
      <container>
        <input
          type="checkbox"
          id="accept"
          onChange={(e) => setText(e.target.id)}
        />
        <label for="accept">I accept</label>
      </container>
      <container>
        <input
          type="checkbox"
          id="want1"
          checked
          onChange={(e) => setText((prev) => e.target.id)}
        />
        <label for="want1">I want1</label>
      </container>
      <container>
        <input
          type="checkbox"
          id="want2"
          checked
          onChange={(e) => setText(e.target.id)}
        />
        <label for="want2">I want2</label>
      </container>
    </form>
  );
}

export default Form;
