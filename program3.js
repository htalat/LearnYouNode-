var fs = require('fs');

file = fs.readFileSync(process.argv[2]);
content = file.toString();
console.log(content.split('\n').length -1);
