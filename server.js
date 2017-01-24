
var http = require("http");

http.createServer(function(request, response) {
   // Send the HTTP header
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, { 'Content-Type': 'text/plain' });

   // Send the response body as "Hello World"
   response.end('Hello World\n');
	}).listen(5555);

// .listen(5555); most important, concatining http and defining the port in this case 5555 (same as writing http.listen(5555))

//- 200 http status for ok, 500 forbidden, 404 not found