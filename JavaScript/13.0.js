//Arrays

//In JavaScript, an array is an ordered list of values. 
//Each value is called an element specified by an index:

//elements: 1 , 2, "Three", null, true
//indexes:  0   1     2      3     4

//An array can hold values of mixed types - This means you can store elements of different data types, 
//such as numbers, strings, objects, functions, and even other arrays, all within a single array.
//The size of an array is dynamic and auto-growing i.e., we don’t need to specify 
//the array size up front.
//Array is a special kind of object in JS.

//Ways of creating an array in JS

//Array literal notation - prefered way of creating an array
let arr1 = []; //empty array
let arr2 = [1, 2, "Three", true, null];
console.log(typeof arr2); //object
let mixedArray = [42, "hello", { key: "value" }, function() { console.log("Function called"); }];


//Using Constructor function to create an array - rarely used
let arr3 = new Array(); //empty array
let arr4 = new Array(5); //array of initial size 5, [undefined, undefined,undefined,undefined,undefined]
let arr5 = new Array(1, 2, 3); //array with three elements 1,2 3

let ar = new Array(10).fill(15); //an array of 10 elements, all initialized to 15 

//JS allow us to omit the "new" keyword while creating an array i.e.,
let arr6 = Array();
let arr7 = Array(5);
let arr8 = Array(1, 2, 3);


//Array.of() method - It is used to create a new array instance with a variable number of elements, 
//regardless of the number or types of the arguments passed to it.
//const newArray = Array.of(element1, element2, ...);
let arr9 = Array.of(5); //an array having single element 5
let arr10 = Array.of(1, 2, "Three", true, null);

const arrayOfArrays = Array.of([1, 2], [3, 4], [5, 6]);
console.log(arrayOfArrays); // Output: [[1, 2], [3, 4], [5, 6]]

const str1 = 'hello';
const charArray = Array.of(...str1); // spread syntax
console.log(charArray); // Output: ['h', 'e', 'l', 'l', 'o']

const values = [10, 20, 30];
const combinedArray = Array.of(...values, 40, 50); // spread syntax
console.log(combinedArray); // Output: [10, 20, 30, 40, 50]


//Array() v/s Array.of()
const a1 = Array(3);      // [undefined, undefined, undefined]
const a2 = Array.of(3);   // [3]



//Array.from() method
let str = "Hello"
let arr11 = Array.from(str);
console.log(arr11); //[ 'H', 'e', 'l', 'l', 'o' ]

let arr12 = Array.from(arr8);
console.log(arr12); //[ 1, 2, 3 ]



//Basic operations on arrays

let a = [1, 2, 3, "Hello", null]
//Finding length of an array
console.log(a.length); //5 //length is a property

//Accessing elements in an array
console.log(a[0]); //1
console.log(a[a.length - 1]); //null

//Adding an element at the end of an array
let newLength1 = a.push(true);
console.log(a); //[ 1, 2, 3, 'Hello', null, true ]
console.log(newLength1); //6

//Adding an element at the begining of the array
let newLength2 = a.unshift("Masai");
console.log(a); //[ 'Masai', 1, 2, 3, 'Hello', null, true ]
console.log(newLength2); //7

//Removing an element from the end of an array
let removedElement1 = a.pop();
console.log(a); //[ 'Masai', 1, 2, 3, 'Hello', null ]
console.log(removedElement1); //true

//Removing an element from the begining of an array
let removedElement2 = a.shift();
console.log(a); //[ 1, 2, 3, 'Hello', null ]
console.log(removedElement2); //Masai

//Finding index of an element
console.log(a.indexOf("Hello")); //3 //Returns index of first occurrance

//Checking that a variable is holding a reference to an array object or not
console.log(Array.isArray(a)); //true

