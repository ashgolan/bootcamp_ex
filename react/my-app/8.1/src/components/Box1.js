import React from "react";
import Box2 from "./Box2";
import styled from "styled-components";
const Box = styled.div`
  position: relative;
  background: green;
  height: 500px;
  width: 500px;
`;
const Box1 = () => {
  return (
    <Box>
      <Box2></Box2>
    </Box>
  );
};

export default Box1;
