var http = require('http');
var port = 9000;

http.createServer(function(reg, res){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello there, world!\n');
}).listen(port);

console.log('Listening to port ' + port);
