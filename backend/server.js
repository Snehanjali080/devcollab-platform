require("dotenv").config();

const express = require("express");

const connectDB = require("./config/db");


const app = express();




const devRoutes = require("./routes/devRoutes");

// connect database
connectDB();

// middleware
const cors = require("cors");

const corsOptions = {
  origin: "https://devcollab-platform.vercel.app", // NO slash
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // 🔥 VERY IMPORTANT
app.use(express.json()); // IMPORTANT
app.use(express.urlencoded({ extended: true }));

// routes
const authRoutes = require("./routes/authRoutes");
const profileRoutes = require("./routes/profileRoutes");
const collabRoutes = require("./routes/collabRoutes");
const projectRoutes = require("./routes/projectRoutes");
const messageRoutes = require("./routes/messageRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/collab", collabRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/messages", messageRoutes);

app.use("/api/devs", devRoutes);

app.get("/", (req, res) => {
  res.send("Developer Collaboration Platform API running");
});

const PORT = process.env.PORT || 5000;

const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "https://devcollab-platform.vercel.app",
    methods: ["GET", "POST"],
    credentials: true
  }
});
let onlineUsers = [];
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);
  socket.on("typing",(data)=>{
  socket.broadcast.emit("user_typing", data);
});

  socket.on("user_online", (user) => {

    if (!onlineUsers.includes(user)) {
      onlineUsers.push(user);
    }

    io.emit("online_users", onlineUsers);

  });

  socket.on("disconnect", () => {

    onlineUsers = onlineUsers.filter(u => u !== socket.user);

    io.emit("online_users", onlineUsers);

  });

  const Message = require("./models/Message");

socket.on("send_message", async (data) => {

  const newMessage = new Message({
    sender: data.sender,
    projectId: data.projectId,
    message: data.message
  });

  const savedMessage = await newMessage.save();

  const populatedMsg = await savedMessage.populate("sender", "name");

  io.emit("receive_message", populatedMsg);

});

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});