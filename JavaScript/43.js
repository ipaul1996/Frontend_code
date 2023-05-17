//toString() method

let obj1 = {
    name: "IP",
    age: 26
}

console.log(obj1.toString()); //[object Object]
//As we have not given any custom implementation of the toString() method the toString() method 
//present in Object.prototype will be called. This implementation returns the string "[object Object]" 
//to represent the object.
//We can also provide a custom implementation for toString() method inside the the object itself.

obj1.toString = function() {
    return `Name: ${this.name}, Age: ${this.age}`;
};

console.log(obj1.toString()); //Name: IP, Age: 26


let num = 5;
console.log(typeof num.toString()); //string

//Here num is a primitive but still we are able to call toString() method on it. This is because JS 
//dynamically wraps into an which has the following prototype,
console.log(num.__proto__);
/*
Number {0, constructor: ƒ, toExponential: ƒ, toFixed: ƒ, toPrecision: ƒ, …}
constructor: ƒ Number()
toExponential: ƒ toExponential()
toFixed: ƒ toFixed()
toLocaleString: ƒ toLocaleString()
toPrecision: ƒ toPrecision()
toString: ƒ toString()
valueOf: ƒ valueOf()
[[Prototype]]: Object
[[PrimitiveValue]]: 0

*/
//Same things happens with other primitives such as boolean.

//In JavaScript, the toString() method is used to convert a number to a string. 
///It takes an optional argument, which specifies the base to use for the conversion. 

console.log(num.toString(2)); //101
//It converts the number 5 to a binary string representation with a base of 2.
console.log(num.toString(10)); //5
//It converts the number 5 to a string representation with a base of 10 (which is the default base 
//if no argument is provided).
console.log(num.toString(8)); //5
//It converts the number 5 to an octal string representation with a base of 8.
console.log(num.toString(16)); //5
//It converts the number 5 to a hexadecimal string representation with a base of 16. 


//console.log(null.toString()); //Uncaught TypeError: Cannot read properties of null (reading 'toString')
//console.log(undefined.toString()); //43.js:57 Uncaught TypeError: Cannot read properties of undefined (reading 'toString')
console.log(Symbol(6).toString(), typeof Symbol(6).toString()); //Symbol(6) string
console.log(Symbol(true).toString(), typeof Symbol(true).toString()); //Symbol(true) string
console.log(Symbol().toString(), typeof Symbol().toString()); //Symbol() string
console.log(Symbol(null).toString(), typeof Symbol(null).toString()); //Symbol(null) string
console.log(Symbol(undefined).toString(), typeof Symbol(undefined).toString()); //Symbol() string


let bool = true;
console.log(bool.toString(), typeof bool.toString()); //true string