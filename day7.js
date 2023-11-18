function checkValue(a,b){
    let sum=a+b;

    if(sum === 50 || a===50 || b===50){
        return true;
    }
    else
    {
        return false;
    }
}

console.log(checkValue(50,50));
console.log(checkValue(40,100));
console.log(checkValue(20,30));