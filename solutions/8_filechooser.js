/**
*	PROGRESS BAR - File CHOOSER
*/

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response){

	response.writeHead(200, {
		'Content-Type': 'text/html; charset=UTF-8'
	});

	if(request.method === 'GET'){
		fs.createReadStream('filechooser.html').pipe(response);		
	}
	else if(request.method === 'POST' || request.method === 'PUT'){
		var outputFile = fs.createWriteStream('UPLOADED_FILE');
		var total = request.headers['content-length'];
		var progress = 0;

		response.write('STARTING UPLOAD');
		console.log('\nSTARTING UPLOAD\n');

		request.on('data', function(chunk){
			fakeNetworkLatency(function(){
				progress += chunk.length;
				var perc = parseInt((progress/total)*100);
				console.log('percent complete: '+perc+'%\n');
				response.write('<p>percent complete: '+perc+'%\n');				
			});
		});

		request.pipe(outputFile);

		request.on('end', function(){
			fakeNetworkLatency(function(){
				response.end('<p>FILE UPLOADED!\n');
				console.log('FILE UPLOADED\n');
			});

		});
	}

});

server.listen(8080, function(){
	console.log('Server is listening on 8080');
});


var delay = 100; //delay of 100 ms per chunk
var count =0;
var fakeNetworkLatency = function(callback){
    setTimeout(function() {
    	callback();
    }, delay*count++);
};