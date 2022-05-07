import { BrowserRouter } from "react-router-dom";

import Menu from "../components/molecules/Menu/Menu";
import MainContentNavigation from "./Routes";

const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <Menu />
        <MainContentNavigation />
      </div>
    </BrowserRouter>
  );
};

export default Navigation;
