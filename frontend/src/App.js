import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import CreateProject from "./pages/CreateProject";
import SearchDevelopers from "./pages/SearchDevelopers";
import CollabRequests from "./pages/CollabRequests";
import Chat from "./pages/Chat";
import ProjectDetails from "./pages/ProjectDetails";
import ChatList from "./pages/ChatList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:projectId" element={<ProjectDetails />} />
        <Route path="/create-project" element={<CreateProject />} />
        <Route path="/search-devs" element={<SearchDevelopers />} />
        <Route path="/collab-requests" element={<CollabRequests />} />
        <Route path="/chat" element={<ChatList />} />
        <Route path="/chat/:projectId" element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;