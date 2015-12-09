var http = require('http');
var url = process.argv[2];


http.get(url , function(response)
{
	var result = [];
	response.setEncoding('utf8');
	response.on('data',function(data)
	{
		result.push(data);

	});

	response.on('error',console.error);
	response.on('end', function(end){
		result = result.join("");
		console.log(result.length);
		console.log(result);

	});

});

/*
FIRST: 	npm install bl
bl (buffer list)
var http = require('http')
    var bl = require('bl')
    
    http.get(process.argv[2], function (response) {
      response.pipe(bl(function (err, data) {
        if (err)
          return console.error(err)
        data = data.toString()
        console.log(data.length)
        console.log(data)
      }))  
    })


 */