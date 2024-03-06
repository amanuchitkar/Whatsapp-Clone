// Node Server
const io = require('socket.io')(8000)
const users = {};

io.on('connection', socket=> {
    socket.on('new-user-joined', name => {
        console.log("New user",name)
        users[socket.id] = name;
        socket.broadcast.emit('user-joined', name)

    });
    socket.on("send", message => {
        socket.broadcast.emit('received', { message: message, name: users[Socket.id] })
    });
});
// io.listen(8000);