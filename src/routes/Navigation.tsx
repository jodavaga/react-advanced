import { BrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";

const Navigation = () => {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
};

export default Navigation;
