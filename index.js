
// imports the module that lets us handle HTTP requests
var http = require('http');

// imports module that lets us read files
var fs = require('fs');

// will handle paths
var extract = require('./extract');

// this will handle a 404 error when the file is not found
var handleError = function(err,res){
    res.writeHead(404);
    res.end();
};


var server = http.createServer(function(req,res){
    console.log("responding to a request");
    

   var filePath = extract(req.url);

   
   fs.readFile(filePath, function(err,data){
        
        if(err){
            handleError(err,res);
            return;
        } else{
            res.end(data);
        }
    
       
   });

});

// binding to a port
server.listen(3000);
