// Challenge 9
// Write a JavaScript function to find the first not repeated character.
// Sample arguments : 'abacddbec'
// Expected output : 'e'

function checkFirstNotRepeatedChar(str){
    let arr=str.split('');
    let result='';
    let counter;

    for(let i=0; i<arr.length; i++)
    {
        counter=0;
        for(let j=0;j<arr.length;j++)
        {
            if(arr[i] === arr[j])
            {
                counter++;
            }
        }

        if(counter < 2)
        {
            result=arr[i];
            break;
        }
    }
    return result;
}

console.log(checkFirstNotRepeatedChar('aabdbddccedc'));