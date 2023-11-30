// Challenge 24
// Description:
// Implement a debounce function that takes a function and a delay as arguments. The returned function should ensure that the original function is not called more than once in the specified delay.
// Solution Approach:
// Use a timer and clear it on each invocation to delay the function execution.

function debounce(func, delay = 1000) {
    let timeoutId
  
    return function(...arguments) {
      console.log("function called")
      clearTimeout(timeoutId)
  
      timeoutId = setTimeout(() => {
        func(...arguments)
      }, delay)
    }
  }
  
  function doSomething() {
    console.log("I am doing something")
  }
  
const debounced = debounce(doSomething)

debounced();
debounced();
debounced();