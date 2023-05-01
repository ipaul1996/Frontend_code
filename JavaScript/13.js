//Arrays

//In JavaScript, an array is an ordered list of values. 
//Each value is called an element specified by an index:

//elements: 1 , 2, "Three", null, true
//indexes:  0   1     2      3     4

//An array can hold values of mixed types.
//The size of an array is dynamic and auto-growing i.e., we don’t need to specify 
//the array size up front.
//Array is a kind of object in JS

//Ways of creating an array in JS

//Array literal notation - prefered way of creating an array
let arr1 = []; //empty array
let arr2 = [1, 2, "Three", true, null];
console.log(typeof(arr2)); //object


//Using Constructor function to create an array - rarely used
let arr3 = new Array(); //empty array
let arr4 = new Array(5); //array of initial size 5
let arr5 = new Array(1, 2, 3); //array with three elements 1,2 3

let ar = new Array(10).fill(15); //an array of 15 elements, all initialized to 15 

//JS allow us to omit the "new" keyword while creating an array i.e.,
let arr6 = Array();
let arr7 = Array(5);
let arr8 = Array(1, 2, 3);


//Array.of() method
let arr9 = Array.of(5); //an array having single element 5
let arr10 = Array.of(1, 2, "Three", true, null);


//Array.from() method
let str = "Hello"
let arr11 = Array.from(str);
console.log(arr11); //[ 'H', 'e', 'l', 'l', 'o' ]

let arr12 = Array.from(arr8);
console.log(arr12); //[ 1, 2, 3 ]


//Basic operations on array

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

//Adding an element at the beigin of the array
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

