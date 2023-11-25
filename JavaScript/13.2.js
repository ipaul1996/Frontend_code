//shallow vs deep copy

// A shallow copy creates a new object or array, but it doesn't create copies of the nested objects or arrays within 
// the original object or array. Instead, it copies references to those nested objects or arrays. Therefore, changes made 
// to the nested objects or arrays will affect both the original and the copied object or array.

const originalArray = [1, 2, [3, 4]];

// Shallow copy using slice for arrays
const shallowCopy = originalArray.slice();

shallowCopy[2][0] = 99;

console.log(originalArray); // Output: [1, 2, [99, 4]]
console.log(shallowCopy);   // Output: [1, 2, [99, 4]]
// the change in the nested array [3, 4] is reflected in both the original and the shallow copy because 
// they share a reference to the same nested array.


// A deep copy, on the other hand, creates a completely independent copy of the original object or array, 
// along with copies of all nested objects and arrays. Changes made to the nested objects or arrays in the copied 
// structure do not affect the original.


const originalArray1 = [1, 2, [3, 4]];

// Deep copy using JSON.stringify and JSON.parse
const deepCopy = JSON.parse(JSON.stringify(originalArray1));

deepCopy[2][0] = 99;

console.log(originalArray1); // Output: [1, 2, [3, 4]]
console.log(deepCopy);      // Output: [1, 2, [99, 4]]
// the change in the nested array [3, 4] only affects the deep copy, leaving the original array unchanged.

// Shallow copies are generally quicker to create and may be sufficient in many cases. However, they can 
// lead to unexpected behavior if the nested structures contain mutable objects.
// Deep copies ensure complete independence between the original and the copied structures but can be 
// less performant and may not work well with objects or arrays that contain functions or circular references.

// Deep copy using JSON.stringify and JSON.parse
const original = [1, 2, { func: function() { console.log("Hello!"); } }];
const deepCopy = JSON.parse(JSON.stringify(original));

// Attempting to call the function in the deep copy
// deepCopy[2].func(); // Throws a TypeError: deepCopy[2].func is not a function

console.log(deepCopy); //Output: [ 1, 2, {} ]
// the deep copy method fails to preserve the function within the nested object. The resulting deepCopy[2].func is not a function, 
// and attempting to call it throws a TypeError. The reason deep copy methods like JSON.stringify and JSON.parse fail to preserve 
// functions is related to the fact that functions are not valid JSON data types. JSON (JavaScript Object Notation) is a data 
// interchange format, and it has a limited set of allowed data types: Object, Array, String, Number, Boolean, null. Functions, 
// being a part of JavaScript's broader set of data types, are not included in the JSON specification. When you attempt to stringify 
// an object containing a function using JSON.stringify, the function is simply omitted from the resulting JSON string. 
// When you later parse this string using JSON.parse, the function information is lost.

const shallowCopy = original.slice();

// Attempting to call the function in the shallow copy
shallowCopy[2].func(); // Hello!

console.log(shallowCopy); // [ 1, 2, { func: [Function: func] } ]
