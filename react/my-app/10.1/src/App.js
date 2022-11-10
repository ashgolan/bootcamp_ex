import React from "react";
import { useState, useRef } from "react";
import "./App.css";
import styled from "styled-components";

function App() {
  const myVideo = useRef();

  return (
    <div>
      <video ref={myVideo} style={{ width: "400px" }}>
        <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
      </video>
      <br></br>
      <button onClick={() => myVideo.current.play()}>Play</button>
      <button onClick={() => myVideo.current.pause()}>Pause</button>
    </div>
  );
}

export default App;
