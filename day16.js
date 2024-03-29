// Challenge 16
// Problem Description:
// Write a JavaScript function named sumArray that takes an array of numbers and returns the sum of all the numbers in the array using the reduce() method.
// Inputs:
// An array of numbers.
// Outputs:
// A number representing the sum of the array.
// Hints:
// The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
// Solution Approach:
// Initialize the reduce() method with an initial accumulator value of 0. Then, for each value in the array, add it to the accumulator.
// let arr = [2,2,5,5,10,20];

function sumArray(arr){
    let sum = arr.reduce(function(acc, item){
        acc+=item;
        return acc;
    }, 0);

    return sum;
}

console.log(sumArray(arr));

//2nd way
// const sumArray = arr.reduce(function(acc, item){
//     acc+=item;
//     return acc;

// },0);
// console.log(sumArray);

