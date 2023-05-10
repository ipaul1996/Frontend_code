//Boxing

let str = "Hello";
console.log(Object.getPrototypeOf(str)); //String {'', constructor: ƒ, anchor: ƒ, at: ƒ, big: ƒ, …}


let boolean = true;
console.log(Object.getPrototypeOf(boolean)); //Boolean {false, constructor: ƒ, toString: ƒ, valueOf: ƒ}


let num = 5;
console.log(Object.getPrototypeOf(num)); //Number {0, constructor: ƒ, toExponential: ƒ, toFixed: ƒ, toPrecision: ƒ, …}


let num1 = 5n;
console.log(Object.getPrototypeOf(num1)); //BigInt {Symbol(Symbol.toStringTag): 'BigInt', constructor: ƒ, toLocaleString: ƒ, toString: ƒ, valueOf: ƒ}


let x = Symbol();
console.log(Object.getPrototypeOf(x)); //Symbol {Symbol(Symbol.toStringTag): 'Symbol', constructor: ƒ, toString: ƒ, valueOf: ƒ, …}


/*

Here all of the above types are of primitive types, then how we are getting their prototypes?

In JavaScript, there are seven primitive types: string, number, bigint, boolean, null, undefined, and symbol. 
These types are referred to as "primitive" because they are immutable and do not have properties or methods of 
their own. However, JavaScript treats primitive values as objects when necessary, by creating temporary wrapper 
objects around them.

*/


let greet = "Hello";
console.log(greet.toUpperCase()); //HELLO

/*
In this code, we create a string primitive "Hello" and then call the toUpperCase() method on it. 
This code works even though the string primitive greeting does not have a toUpperCase() method of its own.
When we try to call a method or property on a primitive value, JavaScript automatically converts the value 
to an object of the corresponding type, which is called "boxing" or "wrapping". The boxed object has a prototype 
associated with it, which contains the methods and properties of the corresponding type.
In the case of strings, when we call a method on a string primitive, JavaScript automatically boxes the primitive 
value into a String object, which has a prototype that contains methods like toUpperCase(), charAt(), slice(), 
and so on.
Similarly, when we call a method on a number primitive, JavaScript boxes the primitive value into a Number object, 
which has a prototype that contains methods like toFixed(), toExponential(), toLocaleString(), and so on.
The same is true for boolean, bigint, and symbol primitives, which are boxed into Boolean, BigInt, 
and Symbol objects, respectively.
This is the reason when we call,
Object.prototype(primitive);
we get the correspoding prototype object.


We can create wrapper objects explicitly in JavaScript by using the constructor functions for the 
corresponding object types. The constructor functions for the wrapper objects have the same name as the 
object types but with the first letter capitalized.

*/

//Boxing a string primitive into a String object explicitly
let greeting = "Hello";
let greetingObject = new String(greeting);
console.log(greetingObject); // String {"Hello"}

// Boxing a number primitive into a Number object explicitly
let numb = 5;
let numObject = new Number(numb);
console.log(numObject); // Number {5}

// Boxing a boolean primitive into a Boolean object explicitly
let bool = true;
let boolObject = new Boolean(bool);
console.log(boolObject); // Boolean {true}

/*

In each of these examples, we create a wrapper object explicitly by using the constructor function 
for the corresponding object type. The constructor function takes the primitive value as an argument 
and returns a new instance of the corresponding wrapper object type.

Note that creating wrapper objects explicitly is not commonly done in JavaScript, as it can have performance 
implications and is generally not necessary for most use cases. It's usually better to work with the 
primitive values directly, unless there is a specific need to use the wrapper objects.

*/







 