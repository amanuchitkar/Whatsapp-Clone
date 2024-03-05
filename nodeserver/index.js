const { Socket } = require('socket.io');

// Node Server
const io = require('socket.io')(8000)
const users = {};

io.on('connection', () => {
    Socket.on('new-user-joined', name => {
        users[Socket.id] = name;
        Socket.broadcast.emit('user-joined', name)

    });
    Socket.on("send", message => {
        Socket.broadcast.emit('received', { message: message, name: user[Socket.id] })
    });
});