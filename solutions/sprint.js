var http = require('http');

var server = http.createServer(function(request, response){
	response.writeHead(200, {
		'Content-Type': 'text/html'
	});
	response.write('Hello World');
	setTimeout(function(){
		response.write('\nI made you wait 5 seconds')
		response.end();
	}, 5000);
});

server.listen(8080, function(){
	console.log('Server listening on port 8080');
})