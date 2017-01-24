
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


// read a txt file
/*var fs = require("fs");

fs.readFile('input.txt', function(err, data) {
   if (err) return console.error(err);
   console.log(data.toString());
});

console.log("Program Ended"); */

// process is a native object which indicates the initialization of the surver argv is the argument that is passed to node. it returns the location
// off node in your machine. 

process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
});

const name = process.argv[2] + ' ' + process.argv[3];
console.warn(`Goodmorning ${name}, welcome back`);

// += is current value + new one _ the array is native
