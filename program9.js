var http = require('http');
var result = [];
var count = 0;

function print()
{
	for(var i=0;i<3;i++)
		console.log(result[i]);
}


function httpGet(index)
{
	var res = [];
	http.get(process.argv[2+index], function(response)
	{
			response.setEncoding('utf8');
			response.on('error',console.error);
			response.on('data',function(data)
			{
				res.push(data);
			});
			response.on('end',function(end)
			{
				res = res.join('');
				result[index] = res;
				count++;

				if(count==3)	print();
			});

	});

}

for(var i=0;i<3;i++)
{
	httpGet(i);
}

// alternate method .. using bl module