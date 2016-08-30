// import required modules

var http = require('http');

// Create the server
http.createServer(function(request, response) {
    response.writeHead(200, {'content-type': 'text/plain'});
    response.end("Hello World");
}).listen(8081);

console.log('Server running on port 8081');
