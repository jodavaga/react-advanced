import { Navigate, Route, Routes } from "react-router-dom";
import { dashboardRoutes } from "../../../routes/Routes";

const Dashboard = () => {
  return (
    <Routes>
      {dashboardRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.Component} />
      ))}
      {/* Redirect */}
      <Route path="/*" element={<Navigate to="/dashboard/profile" />} />
    </Routes>
  );
};

export default Dashboard;
