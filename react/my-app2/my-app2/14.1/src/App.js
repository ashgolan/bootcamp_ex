import React, { useEffect, useState, useRef, axios } from "react";
import "./App.css";

function App() {
  const [joke, setJoke] = useState("");
  const [categories, setCategories] = useState([]);
  const [jokesBySearch, setJokesBySearch] = useState([]);
  const search = useRef();

  const fetchData = function (url) {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (url === "https://api.chucknorris.io/jokes/categories")
          setCategories(data);
        if (
          url ===
          `https://api.chucknorris.io/jokes/search?query=${search.current.value}`
        ) {
          setJokesBySearch(data.result);
        }
        setJoke(data.value);
      });
  };

  useEffect(() => {
    fetchData("https://api.chucknorris.io/jokes/categories");
  }, []);

  const jokeHandler = () => {
    fetchData("https://api.chucknorris.io/jokes/random");
  };
  const byCategoryHandler = (e) => {
    fetchData(
      `https://api.chucknorris.io/jokes/random?category=${e.target.textContent}`
    );
  };
  const getAlist = (kind) => {
    return kind.map((c, i) => {
      return (
        <ul
          style={{
            listStyleType: "none",
          }}
        >
          {kind === categories && (
            <li
              style={{ cursor: "pointer" }}
              key="{c}"
              onClick={byCategoryHandler}
            >
              {c}
            </li>
          )}
          {kind === jokesBySearch && <li key="{c}">{c.value}</li>}
        </ul>
      );
    });
  };

  const searchJokeHandler = () => {
    fetchData(
      `https://api.chucknorris.io/jokes/search?query=${search.current.value}`
    );
    console.log(jokesBySearch);
    return getAlist(jokesBySearch);
  };
  return (
    <div
      style={{
        width: "80%",
        display: "flex",
        flexDirection: "column",
        margin: "auto",
      }}
    >
      <button style={{ padding: "2%" }} onClick={jokeHandler}>
        Get Joke
      </button>
      <input style={{ padding: "2%" }} ref={search} type={"text"} />
      <button style={{ padding: "2%" }} onClick={searchJokeHandler}>
        Search Joke
      </button>
      <h4 style={{ backgroundColor: "rosybrown" }}>
        {getAlist(jokesBySearch)}
      </h4>
      <h3 style={{ backgroundColor: "darkkhaki" }}>{joke}</h3>
      <h4 style={{ backgroundColor: "mediumpurple" }}>
        {getAlist(categories)}
      </h4>
    </div>
  );
}

export default App;
