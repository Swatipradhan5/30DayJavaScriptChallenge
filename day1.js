// Challenge 1:
// Write a JavaScript function that reverses a number.
// Sample Data and output:
// Example: 
// x = 32243;
// Expected Output: 34223


let ans = 0;
let num = 32243;

ans = Number(String(num).split('').reverse().join(''));

console.log("Reversed number is : "+ans);
