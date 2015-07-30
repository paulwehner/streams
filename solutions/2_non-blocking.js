/**
*	NON-BLOCKING
*
*	NodeJS was built from the ground-up to be non-blocking. This is especially important
*	for todays web and mobile applications which increasingly expect real-time interaction.
*
*	To see this in action, what do you think will happen when two subsequent requests hit our
*	server? Will it responsd to the first request, wait 5 seconds, and then respond to the second?
*	Or will it respond to the second request immediately, while its still processing the first?
*
*	TO DO: Go to http://localhost:8080, and see that the browser prints out Hello World, and then
*	I made you wait 5 seconds later. Open in two tabs too see that the server isn't blocking.
*/

var http = require('http');

var server = http.createServer(function(request, response){
	response.writeHead(200);
	response.write('Hello World\n');
	setTimeout(function(){
		response.write('I made you wait 5 seconds.\n');
		response.end();
	}, 5000);
})

server.listen(8080, function(){
	console.log('Server is listening on 8080');
});