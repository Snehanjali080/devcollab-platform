import { useState } from "react";
import API from "../services/api";
import "./CreateProject.css";
import { useNavigate } from "react-router-dom";



function CreateProject(){
const navigate = useNavigate();
  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");

  const token = localStorage.getItem("token");

  const handleCreate = async (e)=>{
    e.preventDefault();

    try{

      await API.post("/projects/create",
      {
        title,
        description
      },
      {
        headers:{
          Authorization:`Bearer ${token}`
        }
      });

      alert("Project created successfully!");
      navigate("/projects");

    }catch(error){

      alert("Error creating project");

    }
  }

return (

  <div className="create-page">

    <div className="create-card">

      <h2>Create New Project 🚀</h2>

      <form onSubmit={handleCreate}>

        <input
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          required
        />

        <textarea
          placeholder="Project Description"
          value={description}
          onChange={(e)=>setDescription(e.target.value)}
          required
        />

        <button type="submit">Create Project</button>

      </form>

    </div>

  </div>

);
}

export default CreateProject;