// Challenge 6
// Write a JavaScript program to compute the sum of the two given integers. 
// If the two values are the same, then return triple their sum.

function calculateSum(a,b){
    if( a === b )
    {
        let sum=a+b;
        return 3*sum;
    }
    else
    {
        return a+b;
    }
}

console.log("Sum= ",calculateSum(5,4));
console.log("Sum= ", calculateSum(4,4));