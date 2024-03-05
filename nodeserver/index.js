// const socket  = require('socket.io');
// const socket  = require('socket.io');

// const { Socket } = require('engine.io');

// Node Server
const io = require('socket.io')(8000)
const users = {};

io.on('connection', () => {
    Socket.on('new-user-joined', name => {
        users[Socket.id] = name;
        Socket.broadcast.emit('user-joined', name)

    });
    Socket.on("send", message => {
        Socket.broadcast.emit('received', { message: message, name: users[Socket.id] })
    });
});