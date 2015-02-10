var server = require("./lib/httpServer");
var router = require("./lib/route");
var handlers = require("./lib/handlers");

var handle = {};
handle["/"] = handlers.start;
handle["/start"] = handlers.start;
handle["/time"] = handlers.currentTime;
handle["/greeting/"] = handlers.greeting;

server.start(router.route, handle);