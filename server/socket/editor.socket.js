import { Server } from "socket.io";

export default function setupSocket(server) {
  const io = new Server(server, {
    cors: { origin: "*" } //Temporary, will be changed later as per requirements.
  });

  io.on("connection", (socket) => {
    console.log("User connected");
  

    //Joining a room
    socket.on("join-room",({ roomId, username }) => {
      socket.join(roomId);
      console.log(`${username} joined room ${roomId}`);

      socket.to(roomId).emit("user-joined", { username }); //Letting all the users in the room know that a new user has joined the room.
    });

    //code changes
    socket.on("code-change", ({ roomId, code}) => {
      socket.to(roomId).emit("code-change", { code });
    });

    //Save code persistently
    socket.on("save-code", async({ roomId, code}) => {
      await Room.updateOne({ roomId }, { $set: { code } }); //Updates the code in the room by saving it in the mongodb. Uses the room.models.js.
    });

    socket.on("disconnect", () => {
      console.log("User disconnected", socket.id);
    });
    
  });

  return io;
}
