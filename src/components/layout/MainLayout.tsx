import { Suspense } from "react";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { mainRoutes } from "../../routes/Routes";
import Loading from "../molecules/Loading/Loading";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <nav className="main-nav">
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

      <Suspense fallback={<Loading />}>
        <Routes>
          {mainRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.Component}
            />
          ))}
          {/* Redirect */}
          <Route path="/*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default MainLayout;
