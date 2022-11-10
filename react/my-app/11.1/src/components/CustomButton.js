import { useState } from "react";
import styled from "styled-components";
const StyledBtn = styled.button`
  padding: 2%;
  margin: 1%;
  background-color: ${(props) => props.id};
  border: none;
  border-radius: 10px;
  width: 100px;
  cursor: pointer;
`;
function Parent(props) {
  const changeColor = function (event) {
    props.onSaveData(event.target.id);
  };
  console.log(props);
  return (
    <div>
      {props.colors.map((color) => {
        return (
          <StyledBtn id={color} onClick={changeColor}>
            {color}
          </StyledBtn>
        );
      })}
    </div>
  );
}

export default Parent;
