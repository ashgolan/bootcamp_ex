import { Route, NavLink } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <header>
      <ul className="header__titles">
        <li>
          <NavLink to="/">Homepage</NavLink>
        </li>
        <li>
          <NavLink to="/Products">Products</NavLink>
        </li>
      </ul>
    </header>
  );
}
export default Header;
