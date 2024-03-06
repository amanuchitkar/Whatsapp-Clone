const socket = io("http://localhost:8000/");
const name = prompt("Enter Your Name to Join..");
// console.log(name)

socket.emit('new-user-joined', name);
