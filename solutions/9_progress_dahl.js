var http = require('http');
var fs = require('fs');
var status = 0;
var trumpet = require('trumpet');

var server = http.createServer(function (request, response) {
    response.writeHead(200);
    if (request.method === 'GET') {
        if (request.url === '/checkstatus') {
            response.end(status.toString());
            console.log('/checkstatus: '+status);
            return;
        }
        status = 0;
        fs.createReadStream('9_progress_dahl.html').pipe(response);
    }
    else if (request.method === 'POST') {
        status = 0;
        var outputFile = fs.createWriteStream('output');
        var total = request.headers['content-length'];
        var progress = 0;

        request.on('data', function (chunk) {
            progress += chunk.length;
            var perc = parseInt((progress / total) * 10000)/100;
            status = perc;
        });

        request.pipe(outputFile);

        var tr = trumpet();
        tr.pipe(response);

        var stream = tr.select('#status').createWriteStream();
        stream.end('Finished Upload. 100');

        request.on('end', function () {
            fs.createReadStream('9_progress_dahl.html').pipe(tr)
        });
    }
});


server.listen(8080, function () {
    console.log('Server is listening on 8080');
});