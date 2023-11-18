// Challenge 2:
// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.

// Example string: 'the quick brown fox'
// Expected Output: 'The Quick Brown Fox '

/*  Explanation of line-18
- Fetching the first char of words[0] and converting it to uppercase
- Concatenating the rest char of words[0] with the first char and storing it to words[0]
*/ 

function firstLetterUppercase(str){

    let words=str.split(" ");     //to split the string into words with space
          
    for(let i=0; i<words.length;i++)    //iterating through each word
    {
        words[i]=words[i].charAt(0).toUpperCase()+words[i].slice(1);
    }

    return words.join(" ");  //helps in joining each word with space and converting into a string
}

const str="the quick brown fox";

const ansStr=firstLetterUppercase(str);  //calling the function by passing the parameter str

console.log("Converted string - ",ansStr);