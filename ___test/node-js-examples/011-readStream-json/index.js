var fs = require('fs');

// Подключение к локальному серверу
var http = require('http');

var server = http.createServer(function(req, res) {
    console.log("URL страницы: " + req.url);
    res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
    
    var obj = {
        model: 'Audi',
        speed: '234.5',
        wheels: 4
    };
    res.end(JSON.stringify(obj));
});

server.listen(3000, '127.0.0.1'); // http://127.0.0.1:3000/
console.log('Хакер 3000 уровня!');