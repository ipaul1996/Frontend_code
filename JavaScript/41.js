//Object.freeze()

/*
The Object.freeze() static method freezes an object i.e., it makes the object immutable. Freezing an object 
prevents extensions and makes existing properties non-writable and non-configurable. 
A frozen object can no longer be changed: new properties cannot be added, existing properties 
cannot be removed, their enumerability, configurability, writability, or value cannot be changed, and the 
object's prototype cannot be re-assigned. freeze() returns the same object that was passed in.


*/

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25
};

Object.freeze(person);

console.log(Object.isFrozen(person)); //true

let descriptor = Object.getOwnPropertyDescriptors(person);
console.log(descriptor);

/*
{
  firstName: {
    value: 'John',
    writable: false,
    enumerable: true,
    configurable: false
  },
  lastName: {
    value: 'Doe',
    writable: false,
    enumerable: true,
    configurable: false
  },
  age: { 
    value: 25, 
    writable: false, 
    enumerable: true, 
    configurable: false }
}

*/

for(let x in person) {
  console.log(x);
}

/*
firstName
lastName
age
*/

Object.prototype.num = 5; //we can still define properties in its prototype.
console.log(person.num); //5

person.num = 6; //we can not modify or delete
console.log(person.num); //5

//We can also make an array freeze.
let arr = [1, 2, 3, 4, 5, 6];

Object.freeze(arr);

//let length1 = arr.push(5); //Uncaught TypeError: Cannot add property 6, object is not extensible
arr[0] = 100; //can not be modified
console.log(arr); //[1, 2, 3, 4, 5, 6]


//Note that Object.freeze() only makes the top-level properties of an object immutable. If an object contains 
//nested objects, those nested objects are not automatically frozen. To make all properties of an object and 
//its nested objects immutable, we can use a recursive function that applies Object.freeze() to each nested object.



function deepFreeze(obj) {
  Object.freeze(obj);

  Object.getOwnPropertyNames(obj).forEach(function(prop) {
    const propVal = obj[prop];

    if (typeof propVal === "object" && propVal !== null && !Object.isFrozen(propVal)) {
      deepFreeze(propVal);
    }
  });

  return obj;
}

const nestedObj = {
  prop1: {
    prop2: {
      prop3: "hello"
    }
  }
};

deepFreeze(nestedObj);

// Attempt to modify a nested property
nestedObj.prop1.prop2.prop3 = "world"; // fails silently
console.log(nestedObj.prop1.prop2.prop3); //hello





//Object.getOwnPropertyNames()
//The Object.getOwnPropertyNames() static method returns an array of all properties 
//(including non-enumerable properties except for those which use Symbol) found directly in a given object.

const object1 = {
  a: 1,
  c: 3
};

Object.defineProperty(object1, "d", {
  value: 2,
  enumerable: false
});

console.log(Object.getOwnPropertyNames(object1)); // ["a", "b", "d"]
console.log(Object.keys(object1)); //['a', 'c']