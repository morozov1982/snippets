let rangeHandler = (e) => {
    let rangeId = e;

    let corner = e.substr(2,2);
    let inpId = corner + 'txt';

    let inp = document.getElementById(inpId);

    let range = document.getElementById(rangeId);
    let block = document.getElementById('block');

    inp.value = range.value;

    switch (corner) {
        case ('tl'): {
            block.style.borderTopLeftRadius = range.value + '%';
            break;
        }
        case ('tr'): {
            block.style.borderTopRightRadius = range.value + '%';
            break;
        }
        case ('br'): {
            block.style.borderBottomRightRadius = range.value + '%';
            break;
        }
        case ('bl'): {
            block.style.borderBottomLeftRadius = range.value + '%';
            break;
        }
    }
}