// Challenge 26
// Description:
// Write a function calculateTotal that takes an array of numbers, filters out the even numbers, squares the remaining numbers, and then calculates their sum.
// Solution Approach:
// Combine map, filter, and reduce array methods.

function calculateTotal(arr){
    let result = arr.filter((num) =>{
        return num % 2 !==0;
    } ).map((oddNum) =>{
        return oddNum*oddNum;
    }).reduce((sum,squaredNum) =>{
        return sum+=squaredNum;
    },0);

    return result;
}

let arr =[4, 5, 2, 3, 1, 3 ];

console.log(calculateTotal(arr));