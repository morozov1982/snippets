var http = require('http');

var server = http.createServer(function(req, res) {
    console.log("URL страницы: " + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'}); // Можно: text/html
    res.end('Ну ничего себе!'); // Выводится на странице
});

server.listen(3000, '127.0.0.1'); // http://127.0.0.1:3000/
console.log('Хакер 3000 уровня!');