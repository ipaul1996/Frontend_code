//JavaScript has 7 primitive types: number, string, boolean, null, undefined, symbol 
//and bigint and a complex type: object.

//typeof operator - checks data type of the operand. It returns a string 
//that indicates the type of the operand.

// Type Coercion refers to the process of automatic or implicit conversion of values 
// from one data type to another. This includes conversion from Number to String, 
// String to Number, Boolean to Number etc. when different types of operators are 
// applied to the values.

let counter = 1;
console.log(typeof counter);   //"number"

counter = false;
console.log(typeof counter);   //"boolean"

counter = "Hello";
console.log(typeof counter);  //"string"


/* **************************** undefined type ********************************* */

let myVar;
console.log(myVar);  // undefined --> Here the value of myVar is undefined
console.log(typeof myVar); // "undefined" --> Here the type of myVar is returned as a string


console.log(typeof z); // "undefined" --> For undeclared variables
console.log(typeof undefined); // "undefined"

/* **************************** null type ********************************* */

let y = null;
console.log(typeof y); //"object"

/* **************************** number type********************************* */

//JavaScript uses the number type to represent both integer and floating-point numbers.

let price = 12.00; // It is interpreted as 12 - JS always try to reduce memory usage
let discount = 0.05;

let num = 200.00;
console.log(num);  // interpreted as 200
// Note that JavaScript automatically converts a floating-point number 
// into an integer number if the number appears to be a whole number as it takes less memory.

// In JavaScript, Number.MAX_VALUE is the largest finite number 
// that can be represented by a specific data type called "floating-point number"
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324


console.log(Number.MAX_VALUE + Number.MAX_VALUE); // Infinity
console.log(-Number.MAX_VALUE - Number.MAX_VALUE); // -Infinity

console.log(Number.MAX_VALUE * 2); //Infinity

// NaN -> Not a number - a special numeric value that represents a value that is not a valid number.

console.log("a"/2); //NaN 

//Any operations with NaN will give NaN
console.log(NaN/2); //NaN

console.log(NaN == 5); //false

console.log(NaN == NaN); //false

/* **************************** string type ********************************* */

let greetings = 'Hello';
let greetings1 = "Hello";

let greet = greetings;

greetings = greetings + " World!"; // Concatenating a string using '+' operator

console.log(greetings); // Hello World!
console.log(greet); // Hello
// So Strings are immutable in JS - can not be modified. If we try to do so, new String will 
// be created.


let s = "JavaScript";

console.log(s.length); // length is a property of strings
console.log(s[0]); // J
console.log(s[1]); // a
console.log(s[s.length - 1]); // t

s[0] = 'j';
console.log(s); // JavaScript ---> As Strings are immuatble in nature in JS

// If we want to use single quote(') or double quote(") or new line or tab inside a String 
// we need to use escape character(backslash followd by a character)
let myString1 = "This is a string with a \'single quote\' in it.";
console.log(myString1); // This is a string with a 'single quote' in it.

let myString2 = "This is a string with a \"double quote\" in it.";
console.log(myString2); // This is a string with a "double quote" in it.
 
let myString3 = "This is a string\nwith a newline character.";
console.log(myString3);
// This is a string
// with a newline character.

let myString4 = "This is a string\twith a tab character.";
console.log(myString4); // This is a string	with a tab character.

let myString5 = "This is a string \\ with a backslash character";
console.log(myString5); // This is a string \ with a backslash character

let myStringR = "Hey, how will you introduce your wife to your collegues Mr. Aditya Sharma?\rThis text will overwrite the previous line.";
console.log(myStringR); //This text will overwrite the previous line.ur collegues Mr. Aditya Sharma?



// Template Literal: 
// It allows us to use the single quotes and double quotes 
// inside a string without the need of escaping them.
// Template literals --> ``(Backticks)
let myString6 = `Hey! "Indrajit", How are you?`;
console.log(myString6); // Hey! "Indrajit", How are you?

// Also we can embed varibles or expression inside the String.
let studentName = 'John';
let message = `Hi, I'm ${ studentName }.`; // Hi, I'm John.
console.log(message);


// Converting a non-string value to a string
let n1 = 5;
let ns1 = String(5);
let ns2 = "" + n1;
let ns3 = n1.toString();
console.log(typeof n1); //number
console.log(typeof ns1); //string
console.log(typeof ns2); //string
console.log(typeof ns3); //string
// toString() does not work on undefined and null

let status1 = false;
let str = status1.toString(); // "false"
let bool = Boolean(str); // true 
// As str is used here in the boolean context, and it is a non-empty string. Hence it is 
// considered as a truthy value, so the Boolean() function converts it to true. 
// false ---> "false" ---> true


// strings are compared lexiographically using comparison operators( >, >=, <, <=, ==)
// Comparison happens based on corresponding Unicode values
let result1 = 'a' < 'b';
console.log(result1); // true

let result2 = 'a' < 'B';
console.log(result2); // false


/* **************************** boolean type ********************************* */

let flag1 = true;
let flag2 = false;

console.log(typeof flag1); // boolean

//string to boolean
console.log(Boolean("Hi")); // true // Non-empty String
console.log(Boolean("")); // false // empty String

// number to boolean
console.log(Boolean(56)); // true // Non-zero number
console.log(Boolean(Infinity)); // true
console.log(Boolean(-Infinity)); // true

console.log(Boolean(0)); // false
console.log(Boolean(NaN)); // false


// object to boolean
console.log(Boolean({foo: 100}));  // true on non-empty object
console.log(Boolean(null)); // false

// undefined to boolean
console.log(Boolean(undefined)); //false

/* **************************** symbol type ********************************* */
// JavaScript added a primitive type in ES6: the symbol. 
// Different from other primitive types, the symbol type does not have a literal form.

let sym = Symbol();
console.log(sym); //Symbol()
console.log(typeof sym); //symbol

console.log(Symbol() == Symbol()); //false
// The Symbol function creates a new unique value every time you call it.


/* **************************** bigint type ********************************* */
// this data type is used to represent whole numbers greater than 2^53 - 1

let pageView = 9007199254740991n;
console.log(typeof pageView); // 'bigint'


/* **************************** object type ********************************* */

// object --> Unordered Collection of properties(key-value pairs)

let person = {
    firstName: "John",
    lastName: "Doe"
};

let contact = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '(408)-555-9999',
    address: {
        building: '4000',
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
}



