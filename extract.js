
var path = require('path');

var extractFilePath = function(url){

    var filePath;
    var fileName = 'index.html';
    
    if(url.length > 1){
        fileName.substring(1);
    }

    console.log('the Filename is: '+ fileNmae);
    filePath = path.resolve(__dirname, 'app', fileName);
    return filePath;

};