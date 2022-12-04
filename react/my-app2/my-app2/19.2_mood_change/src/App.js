import React, { useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import TopMenu from "./Components/TopMenu";
import Home from "./Pages/Home";
import About from "./Pages/About";
import "./App.css";

export const contextNightAndDay = createContext({ night: null, setNight: null ,day: null, setDay: null });

function App() {
  const [night, setNight] = useState(false);
  const [day, setDay] = useState(false);

  return (
    <div className="App">
      <contextNightAndDay.Provider value={{night, setNight ,day, setDay}}>
        <TopMenu />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </contextNightAndDay.Provider>
    </div>
  );
}

export default App;
