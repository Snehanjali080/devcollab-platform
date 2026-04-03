import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import API from "../services/api";
import { useRef } from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";

function Chat(){

  const [message,setMessage] = useState("");
  const [messages,setMessages] = useState([]);

 const { projectId } = useParams();
 
const sendMessage = ()=>{

  if(!message) return;

  const msgData = {
    projectId,
    message,
    sender: localStorage.getItem("userId")
  };

  socket.emit("send_message", msgData);

  setMessage("");
};



useEffect(()=>{
const socket = io("https://devcollab-platform.onrender.com");
  socket.on("receive_message",(data)=>{
    setMessages((prev)=>[...prev,data]);
  });

  return ()=>{
    socket.off("receive_message");
  };

},[]);

useEffect(() => {
const socket = io("https://devcollab-platform.onrender.com");
  const fetchMessages = async () => {
    try {
      const res = await API.get(`/messages/${projectId}`);
      setMessages(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  fetchMessages();

}, [projectId]);

const [typingUser, setTypingUser] = useState("");
useEffect(()=>{

socket.on("user_typing",(data)=>{

  if(data.user !== localStorage.getItem("username")){
    setTypingUser(data.user);

    setTimeout(()=>{
      setTypingUser("");
    },2000);
  }

});

  return ()=>{
    socket.off("user_typing");
  };

},[]);
const bottomRef = useRef(null);
useEffect(() => {

  bottomRef.current?.scrollIntoView({ behavior: "smooth" });
}, [messages]);



useEffect(()=>{
const socket = io("https://devcollab-platform.onrender.com");
  socket.emit("user_online", localStorage.getItem("username"));

},[]);

const [onlineUsers,setOnlineUsers] = useState([]);

useEffect(()=>{
const socket = io("https://devcollab-platform.onrender.com");
  socket.on("online_users",(users)=>{
    setOnlineUsers(users);
  });

  return ()=>{
    socket.off("online_users");
  }

},[]);


const currentUser = localStorage.getItem("userId");

return (

<div className="chat-container">

  {/* LEFT - USERS */}
  <div className="users-panel">
    <h3>🟢 Online</h3>

    {onlineUsers.map((user,index)=>(
      <p key={index}>{user}</p>
    ))}
  </div>

  {/* RIGHT - CHAT */}
  <div className="chat-main">

    <h2 className="chat-title">Project Chat 💬</h2>

    <div className="chat-box">

      {messages.map((msg, index)=>(

        <div
          key={index}
          className={
            (msg.sender?._id || msg.sender) === currentUser
              ? "message my-message"
              : "message other-message"
          }
        >
          <span className="sender">{msg.sender?.name || msg.sender}</span>
          <p>{msg.message}</p>
        </div>

      ))}

      {typingUser && (
        <p className="typing">{typingUser} is typing...</p>
      )}

      <div ref={bottomRef}></div>

    </div>

    {/* INPUT */}
    <div className="input-area">

      <input
        type="text"
        value={message}
        onChange={(e)=>{
          setMessage(e.target.value);

          socket.emit("typing", {
            user: localStorage.getItem("username")
          });
        }}
        placeholder="Type a message..."
      />

      <button onClick={sendMessage}>
        Send
      </button>

    </div>

  </div>

</div>

);

}

export default Chat;