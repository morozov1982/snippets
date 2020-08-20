let checkHandler = () => {
    let chbox = document.getElementById('one');

    if (chbox.checked) {
        console.log('Чекбокс отмечен');
    } else {
        console.log('Чекбокс НЕ отмечен');
    }
}

let radioHandler = () => {
    let rad  = document.getElementsByName("r1");

    for (let i = 0; i < rad.length; i++) {
        if(rad[i].checked) {
            console.log('Отмечен ' + i + ' точк, у которого value = ' + rad[i].value);
        }
    }
}