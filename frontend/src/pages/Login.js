import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import "./Login.css";
import Image_login from "./login_img.gif";
import logo from "./dev-collab_logo.png";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("username", res.data.user.name);
      localStorage.setItem("userId", res.data.user._id);
      alert("Login Successful");
      navigate("/dashboard");
    } catch (error) {
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <div className="login-left">
          <div className="logo-container">
            <img src={logo} alt="logo" className="logo-img" />
            <h1 className="welcome-tag">Welcome to DevCollab</h1>
          </div>

          <h3 className="login-title">Login</h3>

          <form onSubmit={handleLogin}>
            <input
              type="email"
              className="input-box mb-3"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              className="input-box mb-3"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="green-btn w-100">
              Login
            </button>
          </form>

          <p className="register-text">
            New to DevCollab?{" "}
            <span className="register-link" onClick={() => navigate("/register")}>
              Create an account
            </span>
          </p>

        </div>

        <div className="login-right">
          <img src={Image_login} alt="login" />
        </div>

      </div>
    </div>
  );
}

export default Login;