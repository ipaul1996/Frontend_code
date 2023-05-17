//Object.seal()

/*
The Object.seal() static method seals an object. Sealing an object prevents extensions and makes existing 
properties non-configurable. A sealed object has a fixed set of properties: new properties cannot be added, 
existing properties cannot be removed, their enumerability and configurability cannot be changed, and its 
prototype cannot be re-assigned. Values of existing properties can still be changed as long as they are writable. 
seal() returns the same object that was passed in.

Object.seal() allows us to modify the values of existing properties but not add or remove properties, 
while Object.freeze() makes the object completely immutable by preventing any modifications to the object's 
properties.

If an object is freezed then it is also sealed but the reverse is not true.

*/


const person = {
    name: "Alice",
    age: 30,
};
  
Object.seal(person);

person.age = 31; // Allowed, since age is writable
console.log(person.age); //31
person.gender = "female"; // Not allowed, since gender is not a property of person
console.log(person.gender); //undefined
delete person.name; // Not allowed, since name is non-configurable
console.log(person.name); //Alice
//Object.defineProperty(person, "age", { configurable: true }); // Not allowed, since age is non-configurable
//Object.setPrototypeOf(person, { name: "Bob" }); // Not allowed, since prototype cannot be re-assigned

console.log(person); // { name: "Alice", age: 31 }

console.log(Object.isSealed(person)); //true


  