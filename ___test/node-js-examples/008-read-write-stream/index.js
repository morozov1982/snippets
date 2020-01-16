var fs = require('fs');

var myReadShort = fs.createReadStream(__dirname + '/article.txt', 'utf8');
var myWriteShort = fs.createWriteStream(__dirname + '/news.txt');

myReadShort.on('data', function(chunk) {
    console.log("Новые данные получены:\n\n\n\n\n\n");// + chunk);
    myWriteShort.write(chunk);
});