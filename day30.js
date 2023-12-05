// Challenge 30
// Description:
// Implement a throttle function that ensures a given function is not called more than once in a specified time interval.
// Solution Approach:
// Use a timestamp to track the last invocation time and prevent calling the function if it's within the throttle interval.

function throttle(func, delay) {
    let lastCallTime = 0;
    let timer;
  
    return function (...args) {
      const now = Date.now();
  
      if (now - lastCallTime >= delay) {
        lastCallTime = now;
        clearTimeout(timer);
        func.apply(this, args);
      } else {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
      }
    };
}
const logMousePosition = (x, y) => console.log(`Mouse at: x=${x}, y=${y}`);
const throttledLog = throttle(logMousePosition, 100);

const simulateMouseMove = (x, y) => {
    throttledLog(x, y);
};
  
simulateMouseMove(10, 20); 
setTimeout(() => simulateMouseMove(30, 40), 100); 