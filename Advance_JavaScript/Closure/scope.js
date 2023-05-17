//Scope

// Scope determines the accessibility of variables from different parts of the code. 
//JavaScript has three scopes:
// The global scope
// Local scope
// Block scope (started from ES6)

//A variable declared at the top of a program or outside of a function is considered a 
//global variable and it has a global scope i.e., it can be accessed from anywhere, 
//globally or inside of a function or inside of a block.
//The value of a global variable can be changed inside a function. For example,
let a = "hello";

function greet() {
    a = 3;
}

// before the function call
console.log(a); //"Hello"

//after the function call
greet();
console.log(a); // 3

//Note: It is a good practice to avoid using global variables because the value of 
//a global variable can change in different areas in the program. It can introduce unknown 
//results in the program.

//Variables declared with var, let and const are quite similar when declared globally, they all have global scope.

//In JavaScript, a variable can also be used without declaring it. If a variable is used without declaring it, that variable automatically becomes a global variable even if the variable is inside of a function(Unless we use strict mode in which a variable cannot be used without declaring it) or inside of a block.  For example,
function greet() {
    b = "hello"
}

greet();

console.log(b); // hello


//JavaScript has function scope: Each function creates a new scope.

// Variables defined inside a function are not accessible (visible) from outside the function. These variable are conidered as local variables and they all have local scope or function scope.
//Function parameters work as local variables inside functions.
//Variables declared with var, let and const are quite similar when declared inside a function.
//Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.

var x=5;
console.log(window);
//Global variables defined with the var keyword belong to the window object
//Global variables defined with the let keyword or const keyword do not belong to the window object



//A block is a chunk of code bounded by {}.Variables declared inside a {} block cannot be accessed from 
//outside the block. These variable are called block-scoped variable and they have a block scope. 
//Block-scoped variable should always be declared with let and const. If we use var then it can't be block-scoped  
//and can be accessed outside the block.

{
    var u = 2;
    let v = 3;
    const w = 4;
}

console.log("u:",u); //u=2
//console.log('v:',v); //Reference Error
//console.log('w:',w); //Reference Error


//The variables declared with var are hoisted to the top of the scope of the program and initialized with undefined. 
//For example,
//console.log(k);
var k; // undefined (not an error)
//The variables declared with let are hoisted to the top of the scope of the program but are not initialized. For example,
//console.log(m);
let m; // Uncaught ReferenceError: m is not defined


// A variable declared with var can be redeclared again. For example,
var f = 5; // 5
var f = 3; // 3

//A variable declared with let cannot be redeclared within the same block or same scope.However, if the same variable is defined in different scopes, there will be no error because although they have same names in different scopes but they are treated as different variables. For example,
// let p = 5;
// let p = 3; // error 

//Point to be noted here, variable declared with var and let both can be updated with new value. 

//Variables declared with the const maintain constant values.This means that the value of a variable declared 
//with const remains the same within its scope. It cannot be updated or re-declared. So if we declare a variable 
//with const, we can neither do this:
const greeting = "say Hi";
//greeting = "say Hello instead";// error: Assignment to constant variable.

//nor,
//const greeting = "say Hi";
//const greeting = "say Hello instead";// error: Identifier 'greeting' has already been declared
//Every const declaration, therefore, must be initialized at the time of declaration.

//This behavior is somehow different when it comes to objects declared with const. While a const object cannot 
//be updated  with a reassignment of a new obj, the properties of this objects can be updated(Values of the properties).
//The variables declared with const are hoisted to the top of the scope of the program but are not initialized. 
//For example,
//console.log(t);
let t; // Uncaught ReferenceError: t is not defined


//Closure
// Variable Lifetime
// Global variables live until the page is discarded, like when you navigate to another page or close the window.

// Local variables have short lives. They are created when the function is invoked, and deleted when the function 
//is finished.
//Closure means an inner function has alaways access to outer function scope i.e., it has access to 
//all the the variables declared inside the outer function, even after the outer function has closed.

//Let us make a nested function,

function sayHi () {
    let q='ram';
    return function() {
        console.log(q);
    }
}
let receive=sayHi();  //We are invoking the function sayHi and storing the returned value(a function) in receive.
//As functions are first class citizens in js we can call this returned function as follows,
receive(); //ram
//This inner-function is able to access to variable q which is defined in outer function sayHi is due closure.



function sayHello () {
    let n='raj';
    return  function() {
                return function() {
                            console.log(n);
                        }
            }
}

let rec1=sayHello();
let rec2=rec1();
rec2(); //rec2 is able to access variable declared inside sayhello beacuse of closure;