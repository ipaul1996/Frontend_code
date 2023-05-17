//Object.preventExtension()

/*
An object is extensible if new properties can be added to it. Object.preventExtensions() marks an object 
as no longer extensible, so that it will never have properties beyond the ones it had at the time it was marked 
as non-extensible. Note that the properties of a non-extensible object, in general, may still be deleted. 
Attempting to add new properties to a non-extensible object will fail, either silently or, in strict mode, 
throwing a TypeError.
Object.preventExtensions() only prevents addition of own properties. Properties can still be added to the 
object prototype.
This method makes the [[Prototype]] of the target immutable; any [[Prototype]] re-assignment will throw a TypeError.
There is no way to make an object extensible again once it has been made non-extensible.


*/


let obj = { a: 1, b: 2 };

console.log(Object.isExtensible(obj)); // true

// Prevent the object from being extended
Object.preventExtensions(obj);

console.log(Object.isExtensible(obj)); // false

// Attempt to add a new property to the object
obj.c = 3; // This fails in non-strict mode and throws a TypeError in strict mode

// Attempt to delete an existing property from the object
delete obj.a; // This succeeds
console.log(obj.a); //undefined

// Add a property to the object prototype
Object.prototype.d = 4;

console.log(obj.d); // Outputs 4
console.log(obj.__proto__.d); //4

// Attempt to reassign the object's prototype
// Object.setPrototypeOf(obj, {}); // This throws a TypeError

