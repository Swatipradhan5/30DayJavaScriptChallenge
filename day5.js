// Challenge 5:
// Write a JavaScript exercise to get the filename extension.


function getFileExtension(fileName){

    return fileName.split(".").pop();

}


console.log(getFileExtension("day5.js"));

console.log(getFileExtension("index.html"));

console.log(getFileExtension("style.css"));