let selectHandler = () => {
    const sel = document.getElementById('fruitSelector').selectedIndex;
    const opts = document.getElementById('fruitSelector').options;
    console.log('sel.value = ' + opts[sel].value);
    console.log('sel.text = ' + opts[sel].text);
}

let inputHandler = () => {
    const rng = document.getElementById('rng');
    const rngTxt = document.getElementById('rngTxt');
    const rngInp = document.getElementById('rngInp');
    const rngDiv = document.getElementById('rngDiv');
    rngTxt.innerText = 'Range: ' + rng.value;
    rngInp.value = rng.value;
    rngDiv.style.width = rngInp.value * 2 + 'px';
}