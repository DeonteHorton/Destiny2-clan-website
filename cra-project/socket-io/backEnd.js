var express = require('express');
var socket = require('socket.io');
require('dotenv').config()

var app = express();


let server = app.listen(8080,()=>{
    console.log(`Server at ${process.env.REACT_APP_URL}`);
})
let io = socket(server);

io.on('connection', (socket) => {
    console.log(`User ${socket.id} connected`);

    socket.on('SEND_MESSAGE', function(data){
        //sends data to all
        io.emit('RECEIVE_MESSAGE', data);

    })
    socket.on('disconnect',()=>{console.log(`User ${socket.id} disconnected`);
    })
});
