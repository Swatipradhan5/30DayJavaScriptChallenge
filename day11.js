// Challenge 11
// Write a JavaScript program to list the properties of a JavaScript object.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
// Sample Output: name,sclass,rollno

let student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 
};

let keys= Object.keys(student);
console.log(keys);

//below code using for in loop

// function listObjProperties(obj){
//     for(let item in obj) {
//         console.log(item);
//     }
// }

// listObjProperties(student);