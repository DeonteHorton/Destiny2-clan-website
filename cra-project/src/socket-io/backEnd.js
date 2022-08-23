var express = require('express');
var socket = require('socket.io');

var app = express();


let server = app.listen(8080,()=>{
    console.log(`Server at http://68.183.143.81/`);
})
var socket = require('socket.io');
io = socket(server);

io.on('connection', (socket) => {
    console.log(`User ${socket.id} connected`);

    socket.on('SEND_MESSAGE', function(data){        
        //sends data to all
        io.emit('RECEIVE_MESSAGE', data);

    })
    socket.on('disconnect',()=>{console.log(`User ${socket.id} disconnected`);
    })
});
