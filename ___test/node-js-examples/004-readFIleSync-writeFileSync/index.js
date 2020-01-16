var fs = require('fs');

var file_readed = fs.readFileSync('text.txt', 'utf8');
console.log(file_readed);

var message = "Привет, мир!\n" + file_readed;
fs.writeFileSync('new_file.txt', message);

var new_file_readed = fs.readFileSync('new_file.txt', 'utf8');
console.log(new_file_readed);