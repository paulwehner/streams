/**
*	HELLO WORLD
*
*	To begin we will require the 'http' module. This is one of the core modules
*	that NodeJS is shipped with. 'http' provides an HTTP server and client.
*
*	Documentation for 'http': https://nodejs.org/api/http.html
*
*	Notice that 'http' has a 'Stability' score of '3 - Stable'. This means you
*	can incorporate it into your project and not worry about the 1.0.0 release
* 	of Node breaking your applications. As of 7/19/2015 NodeJS is pre 1.0.0.
*
*	"[Ryan Dahl] was bang on when he could see the problem with blocking on I/O 
* 	and how JavaScript was the perfect language for getting mainstream programmers 
*	doing asynchronous programming on the server."
*
*	Original NodeJS presentation by Ryan Dahl: https://nodejs.org/jsconf.pdf
*
*	TO DO: Go to http://localhost:8080 in your browser to see 'Hello World' printed out
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