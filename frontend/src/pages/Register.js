import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import "./Register.css";
import logo from "./dev-collab_logo.png";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/register", { name, email, password });
      alert("Registration successful! Please login.");
      navigate("/");
    } catch (error) {
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="register-page">
      <div className="register-card">

        <div className="register-left">
          <div className="logo-container">
            <img src={logo} alt="logo" className="logo-img" />
            <h1 className="welcome-tag">Join DevCollab</h1>
          </div>

          <h3 className="register-title">Create Account</h3>

          <form onSubmit={handleRegister}>
            <input
              type="text"
              className="input-box mb-3"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="email"
              className="input-box mb-3"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              className="input-box mb-3"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button className="green-btn w-100" type="submit">
              Register
            </button>
          </form>

          <p className="login-text">
            Already have an account?{" "}
            <span className="login-link" onClick={() => navigate("/")}>
              Login here
            </span>
          </p>

        </div>

        <div className="register-right">
          <div className="register-illustration">
            <div className="illustration-circle circle-1"></div>
            <div className="illustration-circle circle-2"></div>
            <div className="illustration-circle circle-3"></div>
            <div className="illustration-text">
              <h2>Collaborate.</h2>
              <h2>Build.</h2>
              <h2>Grow.</h2>
              <p>Connect with developers around the world and build amazing projects together.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Register;