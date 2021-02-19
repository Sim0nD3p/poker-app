console.log('server.js');

//create server?
var app = require('express')();
var server = require('http').createServer(app);
const PORT = 8080;

//define socket.io??
var io = require('socket.io')(server);
const STATIC_CHANNELS = ['global_notifications', 'global_chat'];

server.listen(PORT, () => {
    console.log(`listening on *:${PORT}`);
});

//on connection..
io.on('connection', (socket) => { /* socket object may be used to send specific messages to the new connected client */
    console.log('new client connected');
    socket.emit('connection', null);
});