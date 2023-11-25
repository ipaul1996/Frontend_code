//Spread syntax

// The spread syntax (...) in JavaScript is a powerful feature introduced in ES6 (ECMAScript 2015) that 
// allows us to expand elements from an iterable (like an array, a string, a map, a set) or properties from an object.
// So what the spread syntax does, is to basically take all the values out of this array, and then 
// write them individually. The original iterable is not affected. Spread syntax looks exactly like rest syntax. In a way, 
// spread syntax is the opposite of rest syntax. Spread syntax "expands" an array into its elements, while rest syntax collects 
// multiple elements and "condenses" them into a single element.

/*
Syntax:

Spread syntax can be used when all elements from an object or array need to be included in a new array or object, 
or should be applied one-by-one in a function call's arguments list. There are three distinct places that accept 
the spread syntax:

Array Literals: [1, ...iterableObj, '4', 'five', 6]
Object Literals: { ...obj, key: 'value' }
Function Arguments: myFunction(a, ...iterableObj, b)

*/

// Only iterable values, like Array and String, can be spread in array literals and argument lists. 
// Many objects are not iterable, including all plain objects that lack a Symbol.iterator method.

const arr = [1, 2, 3];
const newBadArray = [5, 6, arr[0], arr[1], arr[2]];
console.log(newBadArray); //[ 5, 6, 1, 2, 3 ]

const newGoodArray = [5, 6, ...arr];
console.log(newGoodArray); //[ 5, 6, 1, 2, 3 ]
console.log(...newGoodArray); //5 6 1 2 3

const foodArray = ["Pizza", "Pasta", "Biriyani"];
const newFoodArray = [...foodArray, "Ice Cream"];
console.log(newFoodArray); //[ 'Pizza', 'Pasta', 'Biriyani', 'Ice Cream' ]


const obj = { key1: "value1" };
// const array = [...obj]; // TypeError: obj is not iterable


// When spreading in object literals, the spread syntax enumerates the own properties of the value being spread. 
// For arrays, all indices are enumerable own properties, making arrays suitable for spreading into objects. The spread operation 
// creates a new object, and each array element becomes a property in the new object, where the array indices serve as 
// property names. This behavior is possible because arrays in JavaScript are essentially objects where the keys are 
// the indices. However, it's important to note that this process might not work as expected if the array has additional 
// properties or if the indices are not sequential, as only the own enumerable properties are included in the new object 
// during the spread operation.

const array1 = [1, 2, 3];
const obj1 = { ...array1 }; // Output: { 0: 1, 1: 2, 2: 3 }




// All primitives can be spread in objects. Only strings have enumerable own properties, and spreading anything else doesn't 
// create properties on the new object.

const str = "Indrajit";
const strArray = [...str, "Paul"];
console.log(strArray); //[ 'I', 'n', 'd', 'r', 'a', 'j', 'i', 't', 'Paul']
console.log(...str); //I n d r a j i t
console.log("I", "n", "d", "r", "a", "j", "i", "t"); //I n d r a j i t

const obj2 = { ...true, ..."test", ...10 }; // { '0': 't', '1': 'e', '2': 's', '3': 't' }




// spread syntax in function calls
const numbers = [1, 2, 3, 4, 5];
const maxNumber = Math.max(...numbers);
console.log("Max:", maxNumber); //5

function makePasta(ing1, ing2, ing3) {
  return `Here is your pasta with ${ing1}, ${ing2}, ${ing3}`;
}

const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Ingredient 2?"),
//   prompt("Ingredient 3?"),
];

let res = makePasta(...ingredients);
console.log(res); // Here is your pasta with a, b, c




// The spread syntax in JavaScript performs a shallow copy, not a deep copy.When we use the spread syntax (...)
// to copy an object or an array, it creates a new object or array and copies the enumerable properties or elements
// from the source object or array into the new one. However, if the source object or array contains nested objects
// or arrays, the spread syntax creates new references to those nested objects or arrays, rather than creating
// deep copies of them.

const originalArray = [1, 2, 3];
const copyArray = [...originalArray];

originalArray[0] = 10;

console.log(originalArray); // Output: [10, 2, 3]
console.log(copyArray); // Output: [1, 2, 3]

const originalObject = {
    name: "John",
    hobbies: ["reading", "playing"]
};
  
const copyObject = { ...originalObject };

originalObject.hobbies.push("painting");

console.log(originalObject); // Output: { name: "John", hobbies: ["reading", "playing", "painting"] }
console.log(copyObject);     // Output: { name: "John", hobbies: ["reading", "playing", "painting"] }


const customerDetails = [

    {
        name: "IP",
        age: 26,
    },
    {
        name: "Indrani",
        age: 24,
    },
    {
        name: "Asmita",
        age: 21,
    },
    {
        name: "Kaju",
        age: 20,
    }
];

const newCustomerDetails = [...customerDetails];
newCustomerDetails[0].name = "Indrajit Paul";
console.log(customerDetails[0].name); //Indrajit Paul




// Conditionally adding values to an array
const isSummer = false;
const fruits = ["apple", "banana", ...(isSummer ? ["watermelon"] : [])]; // ['apple', 'banana']


// Conditionally adding properties to an object
const isSummer1 = false;
const fruits1 = {
  apple: 10,
  banana: 5,
  ...(isSummer1 ? { watermelon: 30 } : {}),
}; // { apple: 10, banana: 5 }



// Overriding properties
const obj1A = { foo: "bar", x: 42 };
const objB = { foo: "baz", y: 13 };
const mergedObj = { x: 41, ...objA, ...objB, y: 9 }; // { x: 42, foo: "baz", y: 9 }



