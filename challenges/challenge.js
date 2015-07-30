/*
*	1) Read data off the request, and send it to the response using the 'readable' event
*
*	2) Use the 'pipe()' method to send data from the request to the response
*
*	3) Use the 'fs' module to send filechooser.html to the response
*
*	4) Save the chosen file to disk
*
*	5) Gzip the file using zlib.createGzip(). Remember to require('zlib').
*
*	6) Send file upload progress to process.stdout / console.log
*
*/

var http = require('http');

var server = http.createServer(function(request, response){
	response.writeHead(200);
	response.write('Hello World');
	response.end();
});

server.listen(8080, function(){
	console.log('Server is listening on 8080');
});