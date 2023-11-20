// Challenge 14

// Write a JavaScript function to concatenate a given string n times (default is 1). Go to the editor
// Test Data :
// console.log(repeat('Ha!'));
// console.log(repeat('Ha!',2));
// console.log(repeat('Ha!',3));

// Outputs
// "Ha!"
// "Ha!Ha!"
// "Ha!Ha!Ha!"

function concatenateString(str, times=1){

    let ansStr = "";
    for(let i=0; i < times ; i++)
    {
        ansStr+=str;
    }
    return ansStr;
}

console.log(concatenateString("Ha!", 2));
console.log(concatenateString("Ha!"));
console.log(concatenateString("Ha!!", 7));