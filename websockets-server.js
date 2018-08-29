
//imports the webSocket module
var WebSocket = require('ws');

var webSocketServer = WebSocket.Server;

var port = 3001;

// creates a new webSocket server bound to port 3001
var ws = new webSocketServer({port: port});

// this array will hold all the past messages
// for a more rebust system, better to use a database, will implement at a later time
var messages = [];


console.log('webSockets server started');

// when a client makes a connection, we have access to this connection via the socket object
ws.on('connection', function(socket){
    console.log('client connection established');

    // for each msg in messages, we send it back to the new client
    messages.forEach(function(msg){
        socket.send(msg);

    });


    socket.on('message', function(data){
        console.log('message recived: ' + data);

        // pushes each new message to the array for storage
        messages.push(data);
        
        //webSocket module keeps track of all connects for us
        ws.clients.forEach(function(clientSocket){
            clientSocket.send(data);
        });


    });

});