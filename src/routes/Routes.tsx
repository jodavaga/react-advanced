import { lazy } from "react";

import Login from "../components/screens/Login/Login";
// dashboard Components
import Exams from "../components/screens/Exams/Exams";
import Profile from "../components/screens/Profile/Profile";
import { IRoute } from "./types";

// Lazy imports
const DashboardLayout = lazy(
  () =>
    import(
      /* webpackChunkName: "Dashboard_layout" */ "../components/layout/DashboardLayout"
    )
);

export const mainRoutes: IRoute[] = [
  { to: "login", path: "login", Component: <Login />, name: "Login" },
  {
    to: "dashboard",
    path: "/dashboard/*",
    Component: <DashboardLayout />,
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
