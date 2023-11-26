// Challenge 20
// Problem Description:
// Write a JavaScript function named findFirstNegative that finds and returns the first negative number in an array using the find() method.
// Inputs:
// An array of numbers.
// Outputs:
// A number representing the first negative number in the array or undefined if there are no negative numbers.
// Hints:
// The find() method returns the value of the first element in the array that satisfies the provided testing function.
// Solution Approach:
// Use the find() method and provide a callback that checks if the number is negative.

function findFirstNegetive(arr){
    let res = arr.find((item) =>{
        return item < 0;
    });
    return res;
}

let array1 = [1, 4, 6, -7, -9, 0];
let array2 = [-1, 7, 8, -5, 9];
let array3 = [1, 4, 5, 8, -9];
let array4 = [7, 8, 5, 0, 3];

console.log(findFirstNegetive(array1));
console.log(findFirstNegetive(array2));
console.log(findFirstNegetive(array3));
console.log(findFirstNegetive(array4));

//2nd way

// let res = array1.find((item) =>{
//     return item < 0;
// });

// console.log(res);