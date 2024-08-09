var http = require("http");
var url = require('url');
var fs = require('fs');
http.createServer(function (req, res) {
   
    var urlObj = url.parse(req.url, true);
    var data = urlObj.query;
    res.writeHead(200, { "Content-Type": "text/html" });
    if(data && data.file1 && data.file2){
        fs.rename(data.file1, data.file2, function (err) {
            if (err) {
                console.log(err);
            };
            console.log("file1 = " +data.file1);
            console.log("file2 = " +data.file2);
            console.log('File Renamed!');
            });
    }
   
    
        
  }).listen(3333);
console.log("http://localhost:3333");


