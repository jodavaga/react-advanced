import { NavLink } from "react-router-dom";

// Routes
import { dashboardRoutes } from "../../../routes/Routes";

import logo from "../../../assets/logo.svg";

const Menu = () => {
  return (
    <nav className="dashboard-nav">
      <img src={logo} alt="" />
      <ul>
        {dashboardRoutes.map((route) => (
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

      <button>
        <NavLink to="/login">Logout</NavLink>
      </button>
    </nav>
  );
};

export default Menu;
