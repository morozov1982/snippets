/***** ============================ *****/
/*****          Способ - 1          *****/
/***** ============================ *****/

/* var array_counter = function (arr) {
    return "В массиве " + arr.length + " элементов";
};

var multiply = function (x,y) {
    return `${x} умножить на ${y} равно ${x * y}`;
};

var some_value = 451;

module.exports.array_counter = array_counter;
module.exports.multiply = multiply;
module.exports.some_value = some_value; */


/***** ============================ *****/
/*****          Способ - 2          *****/
/***** ============================ *****/

/* var array_counter = function (arr) {
    return "В массиве " + arr.length + " элементов";
};

var multiply = function (x,y) {
    return `${x} умножить на ${y} равно ${x * y}`;
};

var some_value = 451;

module.exports = {
    array_counter: array_counter,
    multiply: multiply,
    some_value: some_value
}; */

/***** ============================ *****/
/*****          Способ - 3          *****/
/***** ============================ *****/
/***** То же, что и выше, но короче *****/
/***** ============================ *****/

module.exports.array_counter = function (arr) {
    return "В массиве " + arr.length + " элементов";
};

module.exports.multiply = function (x,y) {
    return `${x} умножить на ${y} равно ${x * y}`;
};

module.exports.some_value = 451;