import React from "react";
import Box4 from "./Box4";
import styled from "styled-components";
const Box = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 250px;
  width: 200px;
`;
const Box3 = () => {
  return (
    <Box>
      <Box4></Box4>
      <Box4></Box4>
    </Box>
  );
};

export default Box3;
