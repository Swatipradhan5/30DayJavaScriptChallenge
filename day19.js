// Challenge 19
// Problem Description:
// Write a JavaScript function named allPositive that checks whether all numbers in a given array are positive using the every() method.
// Inputs:
// An array of numbers.
// Outputs:
// A boolean value. Return true if all numbers are positive, otherwise false.
// Hints:
// The every() method tests whether all elements in the array pass the test implemented by the provided function.
// Solution Approach:
// Use the every() method and provide a callback that checks if the number is positive.

function allPositive(arr){
    let res = arr.every(function(item){
        return item > 0;
    });

    return res;
}

 let array1= [7, 8, -9, 6, -10];

let array2 = [8, 9, 10, 6, 5];

let array3 = [-10, 9];

console.log(allPositive(array1));

console.log(allPositive(array2));

console.log(allPositive(array3));

//2nd way

// let allPositive = array1.every((item)=>{
//     return item > 0;
// });

// console.log(allPositive);
