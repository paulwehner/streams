/**
*	PROGRESS BAR
*
*	TO DO: curl --upload-file big.json http://localhost:8080
*/

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response){
	var outputFile = fs.createWriteStream('UPLOADED_FILE');
	var total = request.headers['content-length'];
	var progress = 0;

	request.on('data', function(chunk){
		progress += chunk.length;
		var perc = parseInt((progress/total)*100);
		response.write('percent complete: '+perc+'%\n');
	});

	request.pipe(outputFile);

	request.on('end', function(){
		response.end('\nArchived File\n\n');
	});
});

server.listen(8080, function(){
	console.log('Server is listening on 8080');
});

