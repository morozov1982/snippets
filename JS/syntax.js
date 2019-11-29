window.onload = function () {

    function myFunction() {
        console.log('myFunction');
    };
    myFunction();

// Эту функцию:
    let myFunc = function() {
        console.log('myFunc');
    };
    myFunc();
// можно записать как:
    let myFuncNew = () => { // стрелочные функции, в () можно писать параметры
        console.log('myFuncNew');
    };
    myFuncNew();

}