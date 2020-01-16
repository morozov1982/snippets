var fs = require('fs');

fs.readFile('text.txt', 'utf8', function(err, data) {
    console.log(data);
});

fs.writeFile('new_text.txt', 'Hi async', function(err, data) {});

console.log('Test');