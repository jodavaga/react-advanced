import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo.svg";

const Menu = () => {
  return (
    <nav>
      <img src={logo} alt="" />
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "nav-active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? "nav-active" : "")}
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/exams-report"
            className={({ isActive }) => (isActive ? "nav-active" : "")}
          >
            Exams
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
