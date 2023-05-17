//Object.isExtensible()
//The Object.isExtensible() static method determines if an object is extensible 
//(whether it can have new properties added to it).
//Objects are extensible by default: they can have new properties added to them, 
//and their [[Prototype]] can be re-assigned.


const object1 = {};

console.log(Object.isExtensible(object1));
// Expected output: true

Object.preventExtensions(object1);

console.log(Object.isExtensible(object1));
// Expected output: false


console.log(Object.isExtensible(1)); //false
