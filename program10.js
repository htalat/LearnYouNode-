var net = require('net');

function fill(i){
	return (i < 10 ? '0' : '') + i
}

var server = net.createServer(function(socket){

	var date = new Date();
	var data = date.getFullYear()+"-"+
			   (date.getMonth()+1)+"-"+
			   fill(date.getDate())+" "+
			   fill(date.getHours())+":"+
			   fill(date.getMinutes())+'\n';

	socket.write(data).end();
});
server.listen(process.argv[2]);
