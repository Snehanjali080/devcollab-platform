import { useState } from "react";
import API from "../services/api";
import "./SearchDevelopers.css";

function SearchDevelopers(){

  const [skill,setSkill] = useState("");
  const [developers,setDevelopers] = useState([]);

  const token = localStorage.getItem("token");

  const searchDev = async () => {

    try{

      const res = await API.get(`/devs?skill=${skill}`,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      });

      setDevelopers(res.data);

    }catch(error){

      console.log(error);

    }

  };

  const sendRequest = async (devId) => {

    try{

      await API.post("/collab/request",
      {
        receiverId: devId
      },
      {
        headers:{
          Authorization:`Bearer ${token}`
        }
      });

      alert("Collaboration request sent!");

    }catch(error){

      alert("Error sending request");

    }

  };

  return (

  <div className="search-page">

    <h2 className="search-title">🔍 Find Developers</h2>

    <div className="search-box">
      <input
        type="text"
        placeholder="Enter skill (react, node, mongodb)"
        value={skill}
        onChange={(e)=>setSkill(e.target.value)}
      />

      <button onClick={searchDev}>
        Search
      </button>
    </div>

    <div className="dev-container">

      {developers.map((dev)=>(
        <div className="dev-card" key={dev._id}>

          <h3>{dev.name}</h3>

          <p>{dev.bio}</p>

          <p className="skills">
            Skills: {dev.skills?.join(", ")}
          </p>

          <button
            className="request-btn"
            onClick={()=>sendRequest(dev._id)}
          >
            Send Request
          </button>

        </div>
      ))}

    </div>

  </div>

);

}

export default SearchDevelopers;