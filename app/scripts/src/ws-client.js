
let socket;

function init(url) {
    socket = new WebSocket(url);
    console.log('connecting...');
}



function registerOpenHandler(handlerFunction){
    socket.onopen = () => {
        console.log('open');
        handlerFunction();
    }
}

//The Chattrbox client receives an object from the server in its onmessage callback inside
//registerMessageHandler,
//this object will represent an event and contains the data thats a JSON string from the server
// then its forwarred to handlerFuntion
function registerMessageHandler(handlerFunction){
    socket.onmessage = (e) => {
        console.log('message', e.data);
        let data = JSON.parse(e.data);
        handlerFunction(data);

    }
}

// this function will convert payload = (containing the message, the username, and the timestamp) into a JSON string.
// then send to webSocket Server
function sendMessage(payload){
    socket.send(JSON.stringify(payload));
}

export default {
    init,
    registerOpenHandler,
    registerMessageHandler,
    sendMessage
}