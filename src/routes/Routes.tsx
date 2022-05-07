import { Routes, Route } from "react-router-dom";

import Exams from "../components/templates/Exams/Exams";
import Home from "../components/templates/Home/Home";
import Profile from "../components/templates/Profile/Profile";

const mainRoutes = [
  { path: "", element: <Home /> },
  { path: "profile", element: <Profile /> },
  { path: "exams-report", element: <Exams /> },
];

const MainContentNavigation = () => {
  return (
    <Routes>
      {mainRoutes.map((route, index) => (
        <Route key={index} {...route} />
      ))}
    </Routes>
  );
};

export default MainContentNavigation;
