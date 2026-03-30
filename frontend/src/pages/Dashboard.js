import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./Dashboard.css";
import logo from "./dev-collab_logo.png"; // add your logo here

function Dashboard(){

  const navigate = useNavigate();
  const username = localStorage.getItem("username");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/");
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

 return (
    <div className="dashboard-container">

      {/* NAVBAR */}
      <div className="navbar">
        <div className="nav-left">
          <img src={logo} alt="logo" className="logo"/>
          <h2>DevCollab</h2>
        </div>

        <div className="nav-right">
          <span>Welcome, {username}</span>
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>
      </div>

      {/* DASHBOARD CONTENT */}
      <div className="dashboard-content">

        <h1>Welcome to DevCollab 🚀</h1>
        <p>Choose what you want to do</p>

        <div className="card-grid">

          <div className="card" onClick={()=>navigate("/projects")}>
            <h3>📂 Projects</h3>
            <p>View all your projects</p>
          </div>

          <div className="card" onClick={()=>navigate("/create-project")}>
            <h3>➕ Create Project</h3>
            <p>Start something new</p>
          </div>

          <div className="card" onClick={()=>navigate("/search-devs")}>
            <h3>🔍 Search Developers</h3>
            <p>Find collaborators</p>
          </div>

          <div className="card" onClick={()=>navigate("/collab-requests")}>
            <h3>📩 Requests</h3>
            <p>View collaboration requests</p>
          </div>

          <div className="card" onClick={()=>navigate("/chat")}>
            <h3>💬 Chat</h3>
            <p>Open project chat</p>
          </div>

        </div>

      </div>

    </div>
  );

}

export default Dashboard;