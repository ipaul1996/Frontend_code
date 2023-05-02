//Built-in constructor function

//Object()
//When we create an object with object literal notation JS engine internally executes this 
//constructor to create the object.

/*
new Object(value)
Object(value)

If the value is null or undefined or we pass nothing, it creates and returns an empty object.
Otherwise, it returns an object of a Type that corresponds to the given value.
If the value is an object already, it returns the value.

*/

let myObject = {};

//This synonymous to the following:
//let myObject = new Object();
//We can also create objects in this way, but the object literal notation is more concise & easy.

console.log(myObject instanceof Object); //true


let myObject1 = {
     Height: 5,
     Length: 6,
     Width: 7
}

//We can also create the above object using Object() constructor function
let myObject2 = new Object({
    Height: 5,
    Length: 6,
    Width: 7
});

console.log(myObject2);

let m1 = new Object(2);
let m2 = new Object(true);
let m3 = new Object("Hello");
let m4 = new Object(myFunction);

console.log(m1); //Number {2}
console.log(m2); //Boolean {true}
console.log(m3); //String {'Hello'}
console.log(m4);
//ƒ myFunction(x, y) {
//       return x + y;
//}
      

function Person(name, age) {
    this.Name = name;
    this.Age = age;
}

let p1 = new Person("Indrajit", "Paul");

console.log(p1 instanceof Person); //true
console.log(p1 instanceof Object); //true
//All objects ultimately inherit from the Object constructor, the instanceof operator 
//also returns true




//Function()
//We know functions are first class objects. As they are object so there has to be a constructor 
//that creates the object and it is Function() constructor.

function myFunction(x, y) {
   return x + y;
}
      
console.log(myFunction instanceof Function); //true
//So for function declaration or function expression or named function expression JS engine 
//internally calls Function() constructor to create the function object.
console.log(myFunction instanceof Object); //true


/*

new Function(arg1, arg2, … , argN, functionBody);

We can also remove the new keyword for concise notation

arg1, arg2, ... argN: Optional arguments that represent the names of the function's arguments. 
They are specified as strings and are separated by commas. The number of arguments can range 
from 0 to 255.

functionBody: A string that represents the body of the function. It contains the JavaScript
statements that define the function's behavior.

Using the Function constructor to create functions can be less readable and less 
performant than using function declarations or expressions.


*/

let multiply = new Function('a', 'b', 'return a * b;');
console.log(multiply(3, 4)); // Output: 12

let myFunction1 = new Function('x', 'y', `
  let sum = x + y;
  let difference = x - y;
  let product = x * y;
  let quotient = x / y;
  return [sum, difference, product, quotient];`
);
console.log(myFunction1(4, 2)); // Output: [6, 2, 8, 2]









      