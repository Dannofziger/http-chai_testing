function route(handle, pathname, response, request){
    var pathArray = pathname.split("/");
    if(typeof handle[pathname] === 'function'){
        handle[pathname](response, request);
    }else if(pathArray[1] === 'greeting'){
        handle['/greeting/'](response, request);
    }else{
        response.writeHead(404, {
            'Content-Type': 'text/plain'
        });
        response.write('404 Not found\n');
        response.end();
    }
}
exports.route = route;