import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Login</h1>
      <button>
        <NavLink to="/dashboard">Loggearse</NavLink>
      </button>
    </div>
  );
};

export default Login;
