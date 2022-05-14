import { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Loading from "../components/molecules/Loading/Loading";
import { mainRoutes } from "./Routes";

const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <Suspense fallback={<Loading />}>
          <Routes>
            {mainRoutes.map((route) => {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.Component}
                />
              );
            })}
            {/* Redirect */}
            <Route path="/*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default Navigation;
