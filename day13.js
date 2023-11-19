// Challenge 13
// Problem Statement: Implement a memoization function.

// Description: Write a function that takes a function as its argument and returns a memoized version of the function.

// Solution Approach: Store the function's results for previous inputs and return the stored result for repeated inputs.

let sum=0;
const sumFun=(n)=>{
    for(let i=0;i<=n;i++)
    {
        sum+=i;
    }
    return sum;
}
const memoize=(fun)=>{
    let cache = {};
    return function(...args){
        let n=args[0];
        if(n in cache){
            console.log("Fetching from cache : ");
            return cache[n];
        }
        else{
            console.log("Calculating for the first time : ");
            let result = fun(n);
            cache[n]=result;
            return result;
        }
    }
}

console.time();
const effecient = memoize(sumFun);
console.log(effecient(5));
console.timeEnd();

console.time();
console.log(effecient(5));
console.timeEnd();