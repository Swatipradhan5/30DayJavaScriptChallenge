let arr = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];

function bubbleSort(arr){  
    for(let i=0;i<arr.length;i++){  
        for(let j=0;j<arr.length-i-1;j++){  
            if(arr[j]>arr[j+1]){  
                let tmp= arr[j];  
                arr[j]=arr[j+1];  
                arr[j+1]=tmp;  
            }  
        }  
    }  
}

bubbleSort(arr);
console.log("Sorted array: ", arr);