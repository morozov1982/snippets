var fs = require('fs');

// Подключение к локальному серверу
var http = require('http');

var server = http.createServer(function(req, res) {
    console.log("URL страницы: " + req.url);
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

    var myReadShort = fs.createReadStream(__dirname + '/index.html', 'utf8');
    
    myReadShort.pipe(res); // Выводится на странице
});

server.listen(3000, '127.0.0.1'); // http://127.0.0.1:3000/
console.log('Хакер 3000 уровня!');