import React from "react";
import Box3 from "./Box3";
import styled from "styled-components";
const Box = styled.div`
  position: absolute;
  background: red;
  height: 400px;
  width: 400px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Box2 = () => {
  return (
    <Box>
      <Box3></Box3>
    </Box>
  );
};

export default Box2;
