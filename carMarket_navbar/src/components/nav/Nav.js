import React, { useState } from "react";
import { getFirstToUpper } from "../../utils/carObj.utils";
import "./Nav.css";
function Nav(props) {
  const changeTitle = (event) => {
    props.change(event.target.textContent);
  };
  const insertDepartments = () => {
    return (
      <ul onClick={changeTitle} className="nav__ul">
        <h2>My Car MARKET</h2>
        {props.departments.map((d) => (
          <li onClick={changeTitle} className="nav__li" key={d}>
            {getFirstToUpper(d)}
          </li>
        ))}
      </ul>
    );
  };
  return <nav className="nav">{insertDepartments()}</nav>;
}

export default Nav;
