import React, { useEffect, useState, useRef, axios } from "react";
import "./App.css";
function App() {
  const [todos, setTodos] = useState([]);
  const [myInput, setMyInput] = useState({ name: "", status: "✖" });

  useEffect(() => {
    getForms();
  }, []);

  const addTask = function (e) {
    e.preventDefault();
    const temp = [...todos, myInput];
    setTodos((oldArray) => temp);
    localStorage.setItem("mytodos", JSON.stringify(temp));
    setMyInput({ name: "", status: "✖" });
  };

  const deleteTask = function (e) {
    e.preventDefault();
    const newTasks = todos;
    const deleting = newTasks.find((t) => {
      return t.name === e.target.children[1].textContent;
    });
    const index = newTasks.indexOf(deleting);
    if (index > -1) {
      newTasks.splice(index, 1);
    }
    setTodos((oldArray) => [...newTasks]);
    localStorage.clear();
    localStorage.setItem("mytodos", JSON.stringify(newTasks));
  };

  const changeStatus = function (e) {
    const targetName = e.target.parentElement.children[1].textContent;
    const objWithNewStat = JSON.parse(localStorage.getItem("mytodos")).find(
      (t) => {
        return t.name === targetName;
      }
    );

    e.target.textContent = e.target.textContent === "💜" ? "✖" : "💜";
    objWithNewStat.status = e.target.textContent;
    console.log(todos);
    const temp = [...todos, objWithNewStat];
    console.log(temp);
    setTodos((oldArray) => temp);
    console.log(localStorage);
    // localStorage.clear() ;
    localStorage.setItem("mytodos", JSON.stringify(temp));
  };

  const getForms = () => {
    if (localStorage.getItem("mytodos")) {
      return JSON.parse(localStorage.getItem("mytodos")).map((t) => {
        return (
          <form key={t.name} onSubmit={deleteTask}>
            <label onClick={changeStatus}>{myInput.status}</label>
            <label>{t.name}</label>
            <button>Delete</button>
          </form>
        );
      });
    }
  };

  return (
    <div>
      <div>TODO's</div>
      <div>Local storage CRUD app</div>
      <form onSubmit={addTask}>
        <label>Add todo</label>
        <input
          value={myInput.name}
          onChange={(e) => {
            setMyInput({ name: e.target.value, status: "✖" });
          }}
        />
        <button>Add</button>
      </form>
      <div>{getForms()}</div>
      <div></div>
    </div>
  );
}

export default App;
