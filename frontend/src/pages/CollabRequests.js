import { useEffect, useState } from "react";
import API from "../services/api";
import "./CollabRequests.css";

function CollabRequests(){

  const [requests,setRequests] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(()=>{

    const fetchRequests = async()=>{

      try{

        const res = await API.get("/collab/requests",{
          headers:{
            Authorization:`Bearer ${token}`
          }
        });

        setRequests(res.data);

      }catch(error){

        console.log(error);

      }

    };

    fetchRequests();

  },[token]);

  const acceptRequest = async(id)=>{

    try{

      await API.put(`/collab/accept/${id}`,{},{
        headers:{
          Authorization:`Bearer ${token}`
        }
      });

      alert("Request accepted!");

    }catch(error){

      alert("Error accepting request");

    }

  };

  const rejectRequest = async(id)=>{

    try{

      await API.put(`/collab/reject/${id}`,{},{
        headers:{
          Authorization:`Bearer ${token}`
        }
      });

      alert("Request rejected!");

    }catch(error){

      alert("Error rejecting request");

    }

  };

return (

  <div className="requests-page">

    <h2 className="requests-title">📩 Collaboration Requests</h2>

    <div className="requests-container">

      {requests.length === 0 ? (
        <p className="no-req">No requests found 😴</p>
      ) : (

        requests.map((req)=>(
          <div className="request-card" key={req._id}>

            <h3>{req.sender?.name}</h3>

            <p>Wants to collaborate with you</p>

            <div className="btn-group">

              <button
                className="accept-btn"
                onClick={()=>acceptRequest(req._id)}
              >
                Accept
              </button>

              <button
                className="reject-btn"
                onClick={()=>rejectRequest(req._id)}
              >
                Reject
              </button>

            </div>

          </div>
        ))

      )}

    </div>

  </div>

);

}

export default CollabRequests;