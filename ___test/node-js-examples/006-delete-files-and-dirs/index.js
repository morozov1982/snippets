var fs = require('fs');

/* fs.unlink('file.txt', function(){}); */ // Асинхронное удаление файла
/* fs.unlinkSync('file.txt', function(){}); */ // Синхронное удаление файла

/* mkdirSync('new-one'); */ // Создаём директорию
/* rmdirSync('new-one'); */ // Удаляем директорию

/* fs.mkdir('new-one', function() {
    fs.writeFile('./new-one/some_new.txt', 'Хай ворлд!', function() {
        console.log('Пахамба!');
    });
}); */

/* fs.rmdir('new-one', function(){}); */ // Сначала нужно удалить файлы в папке (fs.unlink())