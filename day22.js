// Challenge 22
// Problem Statement: Write a function to deeply compare two objects for equality.
// Description: Given two objects, the function should return true if they are deeply equal and false otherwise.
// Solution Approach: Recursively compare properties of both objects.

function deepEqual(obj1, obj2){

    if(typeof obj1 !== 'object' || typeof obj2 !== 'object'){
        return obj1 === obj2;
    }

    if(obj1 === null && obj2 === null){
        return true;
    }

    const keysObj1 = Object.keys(obj1);
    const keysObj2 = Object.keys(obj2);

    if(keysObj1.length !== keysObj2.length)
    {
        return false;
    }

    for(let key of keysObj1){

        if(!keysObj2.includes(key) || !deepEqual(obj1[key], obj2[key]))
        {
            return false;
        }
    }
    return true;
}

const A = {
    name:"Swati",
    age : 20,
    address : {
        city : "Mumbai",
        pin: 98538
    }
}

const B = {
    name:"Swati",
    age : 20,
    address : {
        city : "Mumbai",
        pin: 98538
    }
}

const C ={
    name:"Swati",
    age : 20,
    address : {
        city : "Mumbai",
        pin: 78932
    }
}

console.log(deepEqual(A,B));
console.log(deepEqual(A,C));