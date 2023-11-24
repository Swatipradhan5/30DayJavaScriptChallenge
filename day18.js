// Challenge 18
// Problem Description:
// Write a JavaScript function named doubleValues that takes an array of numbers and returns a new array where each number is doubled using the map() method.
// Inputs:
// An array of numbers.
// Outputs:
// An array of numbers where each number is doubled.
// Hints:
// The map() method creates a new array with the results of calling a function for every array element.

function doubleValues(arr){
    let res = arr.map((item)=>{
        return 2*item;
    });
    return res;
}

let arr = [2, 4, 6, 7, 9, 15];

console.log(doubleValues(arr));

//2nd way
// let resArr = arr.map((item)=>{
//     return 2*item;
// });
// console.log(resArr);