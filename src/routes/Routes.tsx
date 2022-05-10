import { lazy } from "react";

import { IRoute } from "./types";

// Lazy imports
const Home = lazy(
  () =>
    import(
      /* webpackChunkName: "Home_page" */ "../components/screens/Home/Home"
    )
);
const Exams = lazy(
  () =>
    import(
      /* webpackChunkName: "Exams_page" */ "../components/screens/Exams/Exams"
    )
);
const Profile = lazy(() => import("../components/screens/Profile/Profile"));

// All routes array
export const mainRoutes: IRoute[] = [
  { to: "/", path: "", Component: <Home />, name: "Home" },
  { to: "/profile", path: "profile", Component: <Profile />, name: "Profile" },
  {
    to: "/exams-report",
    path: "exams-report",
    Component: <Exams />,
    name: "Exams",
  },
];
