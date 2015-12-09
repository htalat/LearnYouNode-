var fs = require('fs');
var file = fs.readFile(process.argv[2],function(err,data){
	if(err) return console.error(err);
	var length = data.toString().split('\n').length;
		length--;
	console.log(length);
});
