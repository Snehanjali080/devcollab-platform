import { useEffect, useState } from "react";
import API from "../services/api";
import "./Project.css";
import { useNavigate } from "react-router-dom";


function Projects() {
const navigate = useNavigate();
  const [projects, setProjects] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {

    const fetchProjects = async () => {

      try {

        const res = await API.get("/projects", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setProjects(res.data);

      } catch (error) {
        console.log(error);
      }

    };

    fetchProjects();

  }, [token]);


  const joinProject = async (projectId) => {

    try {

      await API.put(`/projects/join/${projectId}`, {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      alert("Joined project successfully!");

    } catch (error) {

      alert("Error joining project");

    }

  };


return (
  <div className="projects-page">

    <h2 className="projects-title">🚀 Projects Feed</h2>

    <div className="projects-container">
      {projects.map((project) => (
        <div className="project-card" key={project._id}>

          <h3>{project.title}</h3>

          <p>{project.description}</p>
          <button className="join-btn" onClick={() => joinProject(project._id)}>
  Join Project
</button>

<button className="join-btn" onClick={() => navigate(`/project/${project._id}`)}>
  View Project
</button>
        </div>
      ))}
    </div>

  </div>
);

}

export default Projects;