import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Loading from "../components/molecules/Loading/Loading";

// Lazy imports
const Home = lazy(() => import("../components/templates/Home/Home"));
const Exams = lazy(() => import("../components/templates/Exams/Exams"));
const Profile = lazy(() => import("../components/templates/Profile/Profile"));

const mainRoutes = [
  { path: "", element: <Home /> },
  { path: "profile", element: <Profile /> },
  { path: "exams-report", element: <Exams /> },
];

const MainContentNavigation = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {mainRoutes.map((route, index) => (
          <Route key={index} {...route} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default MainContentNavigation;
