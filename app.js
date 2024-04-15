//ES5 Map Callback
/*
function double(arr) {
    return arr.map(function(val) {
        return val * 2
    });
}
*/

//ES2015 version

//arr is the object
//map is the array method we to use
//end result is to have each value passed thru to be multiplied by 2

const double = (arr) => arr.map((val) => val * 2);
