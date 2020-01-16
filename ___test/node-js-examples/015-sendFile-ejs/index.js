var express = require('express');

var app = express();

app.set('view engine', 'ejs'); // Какой шаблонизатор мы используем ($ npm install ejs)

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get('/about', function(req, res) {
    res.sendFile(__dirname + "/about.html");
});

app.get('/news/:id', function(req, res) {
    var obj = {title: "Новость", id: 4, paragraphs: ['Параграф', 'Обычный текст', 'Числа: 2, 4, 6', 99]};
    res.render('news', {newsId: req.params.id, obj: obj}); // Ищет файлы в папке views/
});

app.listen(3000);