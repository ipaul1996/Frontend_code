//Object.entries()

//Object.entries() method that accepts an object and returns its own enumerable string-keyed 
//property [key, value] pairs of the object.
//The main difference between the Object.entries() and the for...in loop is that the for...in loop 
//also enumerates object properties in the prototype chain.

const ssn = Symbol('ssn');
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    [ssn]: '123-345-789'
};

const kv = Object.entries(person);

console.log(kv); //[ [ 'firstName', 'John' ], [ 'lastName', 'Doe' ], [ 'age', 25 ] ]
//The ssn is not a string-key property of the person object, so it is not included in the result.

console.log(person);
/*
{
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  [Symbol(ssn)]: '123-345-789'
}

*/