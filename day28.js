// Challenge 28
// Description:
// Create a proxy object that intercepts and logs all property access.
// Solution Approach:
// Use the Proxy object to create a wrapper around another object.

const myObj = {
    name:'Swati',
    city:'Delhi'
};

const proxyObject = new Proxy(myObj,{
    get: function (target, property, receiver){
        console.log(`Property ${property} accessed`);
        return Reflect.get(target,property,receiver);
    }
});

console.log(proxyObject.name);
console.log(proxyObject.city);

