
// imports the module that lets us handle HTTP requests
var http = require('http');

// imports module that lets us read files
var fs = require('fs');

// will handle paths
var path = require('path');


var server = http.createServer(function(req,res){
    console.log("responding to a request");
    var url = req.url;

   var fileNmae = 'index.html';
   if(url.length > 1){
       // if the length is more than 1 which would be"/example.html"
       // we need to strip the url of the first char which is '/'
       fileName = url.substring(1);

   }
   console.log(fileName); 

   // this allows us to use the path module to better handle the paths that might include forward slashes or back slashes
   // __dirname has 2 undersocres before it
   var filePath = path.resolve(__dirname, 'app',fileName);
   fs.readFile(filePath, function(err,data){
        res.end(data);
   });

});

// binding to a port
server.listen(3000);
