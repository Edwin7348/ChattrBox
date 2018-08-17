
//imports the webSocket module
var WebSocket = require('ws');

var webSocketServer = WebSocket.Server;

var port = 3001;

// creates a new webSocket server bound to port 3001
var ws = new webSocketServer({port: port});

console.log('webSockets server started');

// when a client makes a connection, we have access to this connection via the socket object
ws.on('connection', function(socket){
    console.log('client connection established');

    socket.on('message', function(data){
        console.log('message recived: ' + data);
        socket.send(data);
    });

});