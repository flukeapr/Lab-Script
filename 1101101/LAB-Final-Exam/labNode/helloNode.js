var http = require("http");
var url = require('url');
var fs = require('fs');
http.createServer(function (req, res) {
    let urlObj = url.parse(req.url,true);
    let data = urlObj.query;
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(req.url +"<br>");
    res.write(urlObj.pathname +"<br>");
    res.write(data.name +"<br>");
    res.write(data.subject +"<br>");
    res.write(data.score +"<br>");
    res.end();
  })
  .listen(3333);
console.log("http://localhost:3333");
