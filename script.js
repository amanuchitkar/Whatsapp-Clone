const socket=io('http://localhost:8000');

const form=document.getElementById("send-container")
const messageInput=document.getElementById("message-input")
const messageContainer=document.querySelector("#chat-messages")

// const Name=prompt("Enter Your name: ")
// console.log(Name)
let Name="aman"
socket.emit('newuserjoined',Name)