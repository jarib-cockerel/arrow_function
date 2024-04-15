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
