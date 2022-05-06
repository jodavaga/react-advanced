import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";

import logo from "../logo.svg";

const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="" />
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/profile"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/exams-report"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Exams
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="profile" element={<h1> Profile </h1>} />
          <Route path="exams-report" element={<h1> Exams </h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Navigation;
