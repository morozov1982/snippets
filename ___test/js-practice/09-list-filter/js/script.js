let filterList = () => {
    let search = document.getElementById('search');
    let searchTxt = search.value.toUpperCase();
    let ul = document.getElementById('namesList');

    let names = ul.getElementsByTagName('li');

    for(let i = 0; i < names.length; i++) {
        let name = names[i].innerText.toUpperCase();
        
        if (name.indexOf(searchTxt) > - 1) {
            //console.log(name);
            names[i].style.display = 'block';
        }
        else {
            //console.log(name);
            names[i].style.display = 'none';
        }
    }
}