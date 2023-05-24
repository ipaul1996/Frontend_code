//Spread operator

//The spread operator (...) in JavaScript is a powerful feature introduced in ES6 (ECMAScript 2015) that 
//allows us to expand elements from an iterable (like an array, a string, a map, a set) or properties from an object.
//So what the spread operator does is to basically take all the values out of this array, and then 
//write them individually 
//original array is not affected

const arr = [1, 2, 3];
const newBadArray = [5, 6, arr[0], arr[1], arr[2]];
console.log(newBadArray); //[ 5, 6, 1, 2, 3 ]

const newGoodArray = [5, 6, ...arr];
console.log(newGoodArray); //[ 5, 6, 1, 2, 3 ]

console.log(...newGoodArray); //5 6 1 2 3

const foodArray = ["Pizza", "Pasta", "Biriyani"];
const newFoodArray = [...foodArray, "Ice Cream"];
console.log(newFoodArray); //[ 'Pizza', 'Pasta', 'Biriyani', 'Ice Cream' ]


const numbers = [1, 2, 3, 4, 5];
const maxNumber = Math.max(...numbers);
console.log("Max:", maxNumber); //5



const str = "Indrajit";
const strArray = [...str, "Paul"];
console.log(strArray); //[ 'I', 'n', 'd', 'r', 'a', 'j', 'i', 't', 'Paul']
console.log(...str); //I n d r a j i t
console.log("I", "n", "d", "r", "a", "j", "i", "t"); //I n d r a j i t

function makePasta(ing1, ing2, ing3) {
  return `Here is your pasta with ${ing1}, ${ing2}, ${ing3}`;
}

const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Ingredient 2?"),
//   prompt("Ingredient 3?"),
];

let res = makePasta(...ingredients);
console.log(res); //Here is your pasta with a, b, c

//The spread operator in JavaScript performs a shallow copy, not a deep copy.When we use the spread operator (...)
//to copy an object or an array, it creates a new object or array and copies the enumerable properties or elements
//from the source object or array into the new one. However, if the source object or array contains nested objects
//or arrays, the spread operator creates new references to those nested objects or arrays, rather than creating
//deep copies of them.

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

