import { BrowserRouter } from "react-router-dom";

import Menu from "../components/molecules/Menu/Menu";
import MainNavigationContent from "./Router";

const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <Menu />
        <MainNavigationContent />
      </div>
    </BrowserRouter>
  );
};

export default Navigation;
