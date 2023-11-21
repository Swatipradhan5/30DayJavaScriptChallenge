// Challenge 15
// Problem Description -
// create a string_chop function that takes a string and chop factor(size) and chops out the string into the factor(size) that has been passed
// Test Data :
// console.log(string_chop('Scaler'));
// console.log(string_chop('Scaler',2));
// ["Scaler"]
// ['Sc' , 'al' ,'er']


function stringChop(str,len){

    if(len===undefined)
    {
        return [str];
    }
    else
    {
        let splitString = [];
        for (let i = 0; i < str.length; i = i + len) {
            splitString.push(str.slice(i, i + len));
        }
        return splitString;
    }
    
}

console.log(stringChop("Swati Pradhan"));
console.log(stringChop("Swati Pradhan",3));