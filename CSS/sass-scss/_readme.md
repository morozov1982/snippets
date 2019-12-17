## Устанавливаем SASS (под правами SU):
    $ npm install -g sass

## Приписываем пути в файле .bashrc (/home/имя_пользователя/.bashrc):
## export PATH="your-dir:$PATH"
    export PATH="/usr/lib/node_modules/sass:$PATH"

## Компилируем CSS из SCSS или SASS:
    $ sass style.scss style.css

## Компилируем в реальном времени CSS из SCSS или SASS:
    $ sass --watch style.scss:style.css
## либо
    $ sass --watch scss/style.scss:css/style.css


##################################
### Встроенныйе функции:
    https://sass-lang.com/documentation/modules