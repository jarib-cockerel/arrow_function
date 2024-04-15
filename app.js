/*

ES5 Map Callback

function double(arr) {
    return arr.map(function(val){
        return val * 2;
    })
}

this is a function decloration which is not idea for arrow functions 


function expressions are ideal for arrow functions 


anonymous function expression can also use arrow functions as well  


we want to put this code into a shorthand bsaed on ES2015 version 

*/

/*
ES2015  arrow functions shorthand 

the function double will need to changed from a function decloration to a function expression 

function expression is more ideal for arrow function 

arrow functions focus on shorthanding function and return 

function double(arr) can be changed into a shorthand

const double = (arr) =>

variable = argument => {}

arr.map(function(val){return val * 2})

arr.map(val => val * 2)

need to put arr.map(val => val * 2)


const double = (arr) => arr.map(val => val * 2);

*/

const double = (arr) => arr.map((val) => val * 2);

/*

Refactor all functions with arrow functions:

function squareAndFindEvens(number) {
    var squares = number.map(function(num){
        return num ** 2;
    });
    var evens = squares.filter(function(square){
        return square % 2 === 0;
    });
    return evens;
}


these are function expressions which are ideal for arrow functions 

we need to replace function and return for arrow function short hand

function squareAndFindEvens(numbers){} can be changed to below:

const squareAndFindEvens = numbers => {}

var squares = number.map(function(num){return num ** 2}) can be changed to below:

 let squares = number.map ((num) => num ** 2)

var evens = squares.filter(functio(square) {return square % 2 === 0}) can be change to below:

let evens = squares.filter((square) => % 2 === 0))


*/

// const squareAndFindEvens = numbers => {
//     var squares = numbers.map((num) => num ** 2)

//     var evens = squares.filter((square) => 2 % === 0);

//     => evens
// };
