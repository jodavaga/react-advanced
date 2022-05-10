import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Loading from "../components/molecules/Loading/Loading";

// Routes
import { mainRoutes } from "./Routes";

const Router = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {mainRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.Component} />
        ))}
        {/* Redirect */}
        <Route path="/*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
