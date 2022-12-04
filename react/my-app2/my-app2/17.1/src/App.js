import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState(JSON.parse(localStorage.task));
  const [inputVal, setInputVal] = useState("");
  useEffect(() => {
    const tols = JSON.stringify(task);
    localStorage.setItem("task", tols);
  }, [task]);
  const addTaskHandler = () => {
    const temp = [...task, { value: inputVal, done: false }];
    setTask((prev) => temp);
    const toLs = JSON.stringify(temp);
    localStorage.setItem("task", toLs);
    setInputVal("");
  };

  const inputChangeHandler = (e) => {
    setInputVal((prev) => e.target.value);
  };
  const removeHandler = (index) => {
    console.log("delete - ", index);
    const afterDeleting = task.filter((t, i) => {
      return i !== index;
    });

    setTask((p) => afterDeleting);
    const toLs = JSON.stringify(afterDeleting);
    localStorage.setItem("task", toLs);
  };
  const updateTask = (index) => {
    const updatedList = task.map((m, i) => {
      if (i === index) {
        m.done = !m.done;
        return m;
      } else {
        return m;
      }
    });
    setTask((p) => updatedList);
    const toLs = JSON.stringify(updatedList);
    localStorage.setItem("task", toLs);
  };
  return (
    <div>
      <div>TODO LIST</div>
      <input
        value={inputVal}
        type="text"
        onChange={(e) => inputChangeHandler(e)}
      />
      <button onClick={addTaskHandler}>ADD</button>
      <div>
        {task.map((t, index) => {
          return (
            <div>
              <>
                <div onClick={() => updateTask(index)}>
                  {t.value}
                  {t.done ? "v" : "X"}
                </div>
                <button onClick={() => removeHandler(index)}>remove</button>
              </>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default App;
