
var http = require('http');

var server = http.createServer(function(req,res){
    console.log("responding to a request");
    res.end('<h1> Hello world by Edwin </h1>');

});

server.listen(3000);
