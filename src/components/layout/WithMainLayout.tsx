import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { mainRoutes } from "../../routes/Routes";

const WithMainLayout = () => (Component: any) => (componentProps: any) => {
  return (
    <div className="main-layout">
      <nav className="main-nav">
        <img src={logo} alt="" />
        <ul>
          {mainRoutes.map((route) => {
            if (route.name === "Dashboard") return null;
            return (
              <li key={route.path}>
                <NavLink
                  to={route.to}
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                >
                  {route.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      <Component {...componentProps} />
    </div>
  );
};

export default WithMainLayout;
