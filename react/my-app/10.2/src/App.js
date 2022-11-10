import React from "react";
import { useRef } from "react";
import "./App.css";
import styled from "styled-components";
const Img = styled.img`
  width: 400px;
`;
function App() {
  const image1 = require("./img/image1.jpg");
  const image2 = require("./img/image2.jpg");
  const imageBlackWhite1 = require("./img/blackwhite1.jpg");
  const imageBlackWhite2 = require("./img/blackwhite2.jpg");
  const imageRef1 = useRef(image1);
  const imageRef2 = useRef(image2);

  return (
    <div>
      <Img
        onMouseEnter={() => (imageRef1.current.src = imageBlackWhite1)}
        onMouseLeave={() => (imageRef1.current.src = image1)}
        ref={imageRef1}
        src={image1}
      ></Img>
      <Img
        onMouseEnter={() => (imageRef2.current.src = imageBlackWhite2)}
        onMouseLeave={() => (imageRef2.current.src = image1)}
        ref={imageRef2}
        src={image2}
      ></Img>
    </div>
  );
}

export default App;
