var http = require("http");
var url = require('url');
var fs = require('fs');
http.createServer(function (req, res) {
   
    var urlObj = url.parse(req.url, true);
    var data = urlObj.query;
    res.writeHead(200, { "Content-Type": "text/html" });

   
    var dataHtml = `name:${data.name}<br>subject:${data.subject}<br>score:${data.score}<br>`;
    console.log(dataHtml);
    if (data && data.name && data.subject && data.score) {
    fs.writeFile("hello.htm", dataHtml, function(err) {
        if (err) {
            console.error(err);
            res.end("Error occurred while writing the file.");
        } else {
            console.log("File written successfully.");
            res.end(dataHtml);
        }
    });
}
  })
  .listen(3333);
console.log("http://localhost:3333");


