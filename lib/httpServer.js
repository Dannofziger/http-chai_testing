var http = require("http");
var url = require("url");

function start(route, handle){
  function takeRequest(req,res){
    var pathname = url.parse(req.url).pathname;
    route(handle,pathname,res,req);
  }
  http.createServer(takeRequest).listen(8080);
}

exports.start = start;