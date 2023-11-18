// Challenge 8
// Write a JavaScript function to get all possible subsets with a fixed length (for example 2) combinations in an array.
// Sample array : [1, 2, 3] and subset length is 2
// Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]

function subset(arr, arr_size)
 {
    let result_set = [], 
        result;
    
   
for(let x = 0; x < Math.pow(2, arr.length); x++)
  {
    result = [];
    i = arr.length - 1; 
     do
      {
      if( (x & (1 << i)) !== 0)
          {
             result.push(arr[i]);
           }
        }  while(i--);

    if( result.length >= arr_size)
       {
          result_set.push(result);
        }
    }

    return result_set; 
}

console.log(subset([1, 2, 3], 2));
