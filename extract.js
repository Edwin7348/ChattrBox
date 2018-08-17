
var path = require('path');

var extractPath = function(url){

    var filePath;
    // this is the default if url is only '/'
    var fileName = 'index.html';
    
    if(url.length > 1){
        fileName= url.substring(1);
       
    }

    console.log('the Filename is: '+ fileName);
    filePath = path.resolve(__dirname, 'app', fileName);
    return filePath;

};

// this allows other modules to import this extract module for thier own use
module.exports = extractPath;