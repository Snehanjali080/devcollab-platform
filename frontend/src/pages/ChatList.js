import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import "./ChatList.css";
function ChatList() {

  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {

    const fetchProjects = async () => {
      const res = await API.get("/projects");
      setProjects(res.data);
    };

    fetchProjects();

  }, []);

  return (

    <div className="chatlist-page">

      <h2 className="title">💬 Your Project Chats</h2>
      <div className="Project-container">
      {projects.map((project)=>(
        <div className="project-card" key={project._id}>

          <h3>{project.title}</h3>

          <button className="join-btn" onClick={()=>navigate(`/chat/${project._id}`)}>
            Open Chat
          </button>

        </div>
      ))}        
      </div>


    </div>

  );
}

export default ChatList;