var server = require("./httpServer");
var router = require("./route");
var handlers = require("./handlers");

var handle = {};
handle["/"] = handlers.start;
handle["/start"] = handlers.start;
handle["/time"] = handlers.currentTime;
handle["/greeting/"] = handlers.greeting;

server.start(router.route, handle);