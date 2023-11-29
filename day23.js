// Challenge 23
// Problem : Closure Challenge
// Description:
// Write a function counter that returns a new function on each invocation. The returned function, when called, should increment the counter value and return it.
// Solution Approach:
// Utilize closure to maintain the state of the counter

const add = (function () {
    let counter = 0;
    return function () {counter += 1; return counter}
  })();
  
console.log(add());
console.log(add());
console.log(add());