// Challenge 27
// Description:
// Write a generator function range that takes two arguments, start and end, and yields all the numbers in that range.
// Solution Approach:
// Use the function* syntax for generator functions and the yield keyword.


function* generateRange(start, end){

    for(let i=start;i<=end;i++)
    {
        yield i;
    }
}

const startVal = 2;
const endVal = 18;

const generatedRangeVal = generateRange(startVal,endVal);

for(let num of generatedRangeVal)
{
    console.log(num);
}