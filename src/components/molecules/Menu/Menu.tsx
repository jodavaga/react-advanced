import { NavLink } from "react-router-dom";

// Routes
import { mainRoutes } from "../../../routes/Routes";

import logo from "../../../assets/logo.svg";

const Menu = () => {
  return (
    <nav>
      <img src={logo} alt="" />
      <ul>
        {mainRoutes.map((route) => (
          <li key={route.path}>
            <NavLink
              to={route.to}
              className={({ isActive }) => (isActive ? "nav-active" : "")}
            >
              {route.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
