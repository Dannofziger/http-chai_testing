function start(res){
    var writeText = 'ask for /time for current time, '+
    'and /greet/[name] for a personalized greeting!';
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.write(writeText);
    res.end();
}
function currentTime(res){
    var timeNow = new Date();
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.write(timeNow.toString());
    res.end();
}
function greeting(res,req){
    var parseUrl = req.url.split("/");
    var writeText = 'Welcome, '+parseUrl[2]+'';
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    console.log(writeText);
    res.write(writeText);
    res.end();
}

exports.start = start;
exports.currentTime = currentTime;
exports.greeting = greeting;