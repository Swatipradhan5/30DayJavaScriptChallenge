// Challenge 21
// Problem Statement: Write an asynchronous loop function that iterates over an array and performs an asynchronous operation on each element.
// Description: The function should take an array and an async function, applying the async function to each element in the array in sequence.
// Solution Approach: Use async/await within a for...of loop.

async function asyncLoop(arr, func){
    for(let ele of arr)
    {
        await func(ele);
    }
}

async function aysncFunction(item){

    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log(`${item}`);
            resolve();
        }, 1000);
        
    });
}

const array = [1,2, 3, 6, 7, 8, 9];
asyncLoop(array, aysncFunction);