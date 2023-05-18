//call() method

//In JavaScript, a function is an instance of the Function type. 

function add(x, y) {
    console.log(add.arguments);
    return x + y;
}
  
console.log(add instanceof Function); // true
//In JS, functions are first class objects. As they are objects, they have properties and methods. 
//Function() is a constructor function for all function objects. That means all means all the properties defined 
//in Function.prototype can be accessed through any function objects.

console.log(Object.getOwnPropertyNames(add)); //['length', 'name', 'arguments', 'caller', 'prototype']

console.log(Object.getOwnPropertyNames(add.__proto__));
//['length', 'name', 'arguments', 'caller', 'constructor', 'apply', 'bind', 'call', 'toString']

console.log(Object.getOwnPropertyNames(Function.prototype));
//['length', 'name', 'arguments', 'caller', 'constructor', 'apply', 'bind', 'call', 'toString']


console.log(add.length); //2
//The length property determines the number of named arguments specified in the function declaration.

console.log(add.name); //add
//Returns the name of the function. Function names are read-only and can not be changed.


console.log(add.prototype); //{constructor: ƒ}
//This is an object. If add is used as a constructor function then it will be set as prtotype of all the
//instances of the constructor.

/*
functionName.call(thisArg, arg1, arg2, ...);
Here the call() method calls a function functionName with the arguments (arg1, arg2, …) 
and the this set to thisArg object inside the function. 
The call() method returns the result of calling the functionName().

*/

var greeting = 'Hi';

var messenger = {
    greeting: 'Hello'
}

function say(name) {
    console.log(this.greeting + ' ' + name);
}

say.call(messenger, "Raja"); //Hello Raja
say.call(messenger, "Ajay"); //Hello Ajay
say.call(this, "Indrajit"); //Hi Indrajit
//Here this represent the global object where greeting variable is defined.



//Constructor chaining using call
function Box(height, width) {
    this.height = height;
    this.width = width;
}
  
function Widget(height, width, color) {
    Box.call(this, height, width);
    this.color = color;
}
  
let widget = new Widget('red', 100, 200);
  
console.log(widget); //Widget { height: 'red', width: 100, color: 200 }




//function borrowing
let obj1={
    firstName: "Indrajit",
    lastName: "Paul",
    printFullName: function(Hometown,Year) {
        console.log(`${this.firstName} ${this.lastName} lives in ${Hometown} since ${Year}`)
    }
}

//Let us call printFullName Method
obj1.printFullName("Kolkata",1996); //Indrajit Paul lives in Kolkata since 1996


let obj2={
    firstName:"Asmita",
    lastName:"Biswas",
}

/*
The owner object of printFullName method is obj1 i.e., 'this' refers to obj1.
Therefore the method can access all the properties of obj1 during the execution. 
But, suppose, if we want to execute the printFullName method with the properties of obj2. 
Then what can we do?
1. We can add the same method in obj2.
2. We can use a pre-defined javascript method,'call method'.call method sets its 
first argument(Here, obj2) as 'this' of the method(Here, printFullName method). 
Therefore it can access all the properties of obj2.In call method, after the 1st argument 
all the arguments are the arguments of the method(Here printFullName) listed by commas.
When we use a method of one object(Here obj1) with other object(Here obj2) it is called 
function borrowing. Here obj2 is borrowing the methods of obj1.
*/

obj1.printFullName.call(obj2, "Bangalore", 2019); //Asmita Biswas lives in Bangalore since 2019
console.log(obj2); //{firstName: 'Asmita', lastName: 'Biswas'}
obj1.printFullName.call(this, "Bangalore", 2019); //undefined undefined lives in Bangalore since 2019
//Here this represent window object



function greet() {
    console.log("Hello", this.fname);
}
  
greet.call({ fname: 'John' }); // Output: Hello John

greet.call(); 
// Output: Hello undefined (non-strict mode) or TypeError: Cannot read property 'fname' of undefined (strict mode)
//Here this refers to the global object window. 



function isOdd(number) {
    return number % 2;
}

function getOddNumbers() {
    return Array.prototype.filter.call(arguments, isOdd);
}

let results = getOddNumbers(10, 1, 3, 4, 8, 9);
// console.log(results); //[1, 3, 9]



function subtract(a, b) {
   console.log(a - b);
}

subtract(20, 10); //10
subtract.call(this, 30, 12); //18




