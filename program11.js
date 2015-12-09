var http = require('http');
var map = require('through2-map');

server = http.createServer(function(req,res){

	if(req.method=="POST")
	{
		req.pipe(map(function(chunk){
			return chunk.toString().toUpperCase();
		})).pipe(res);

	}else
		res.end('send me POST\n');

});

server.listen(process.argv[2]);