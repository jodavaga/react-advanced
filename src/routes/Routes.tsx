import { lazy } from "react";
import Home from "../components/screens/Home";

import Login from "../components/screens/Login";
// dashboard Components
import Exams from "../components/templates/Exams/Exams";
import Profile from "../components/templates/Profile/Profile";
import { IRoute } from "./types";

// Lazy imports
const Dashboard = lazy(
  () =>
    import(
      /* webpackChunkName: "Dashboard_layout" */ "../components/screens/Dashboard"
    )
);

export const mainRoutes: IRoute[] = [
  { to: "/", path: "", Component: <Home />, name: "Home" },
  { to: "/login", path: "login", Component: <Login />, name: "Login" },
  {
    to: "/dashboard",
    path: "/dashboard/*",
    Component: <Dashboard />,
    name: "Dashboard",
  },
];

export const dashboardRoutes: IRoute[] = [
  { to: "profile", path: "profile", Component: <Profile />, name: "Profile" },
  {
    to: "exams-report",
    path: "exams-report",
    Component: <Exams />,
    name: "Exams",
  },
];
