import { Navigate, Route, Routes } from "react-router-dom";
import { dashboardRoutes } from "../../routes/Routes";
import Menu from "../molecules/Menu/Menu";

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
      <Menu />

      <Routes>
        {dashboardRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.Component} />
        ))}
        {/* Redirect */}
        <Route path="/*" element={<Navigate to="/dashboard/profile" />} />
      </Routes>
    </div>
  );
};

export default DashboardLayout;
