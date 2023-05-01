//Function - 1
/*
A function is a block of code that performs a specific task or set of tasks when called upon.

function functionName(parameters) {
    function body
    ...
}

Creating function in this way is called "Function Declaration".

function --> a keyword
functionName --> must be a valid JS identifier, camel case
parameters ---> zero, one or multiple parameters

To use a function we need to call it. (Calling a function or invoking a function 
or running a function)

functionName(arguments);

When declaring a function, we specify the parameters. However, when calling a function, 
we pass the arguments that are corresponding to the parameters. We can think of parameters
as empty spaces and when we call the function with arguments these empty spaces get filled 
with the arguments.

Every function in JavaScript implicitly returns undefined unless we explicitly 
specify a return value. The value is returned where the function is being called.
We use the return statement to return a value from a function explicitly. 
The return statement returns immediately i.e., any statement written after return statement
is never executed

*/

function say(message) {
    console.log(message);
}

say("How are you?");


let result = say("I am fine");
console.log("result:", result); 
//I am fine
//result: undefined


function add(a, b) {
    return a + b;
}

let res = add(10, 20);
console.log('Sum:', res); //Sum: 30


function compare(a, b) {
    if (a > b) {
        return -1;
    } else if (a < b) {
        return 1;
    }
    return 0;
}

console.log(compare(5, 2)); //-1


function getNames() {

    let firstName = 'John',
        lastName = 'Doe';

    // return as an array
    return [firstName, lastName];
}


let names = getNames();
console.log(names); //['John', 'Doe']


function getNames1() {
    
    let firstName = 'John',
        lastName = 'Doe';
  
    // return values
    return {
      'firstName': firstName,
      'lastName': lastName
    };
}

let names1 = getNames1();
console.log(names1); //{firstName: 'John', lastName: 'Doe'}

//JavaScript allows us to define multiple functions with the same name, but only the most 
//recent definition will be used. This is known as function overloading. When we define a 
//function with the same name as an existing function, the new function will replace the old one.
//But it is not recommended as it's lead to confusions.


//In JavaScript, the arguments object is a local variable that is available in all functions.
//It contains an array-like list of the arguments(but not an instance of the Array type) that 
//were passed to the function when it was called, regardless of whether or not the function 
//specifies formal parameters.

function sum() {

    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
      result += arguments[i];
    }
    return result;

}

sum(1, 2, 3); // returns 6
sum(4, 5, 6, 7); // returns 22
sum(); // returns 0 (no arguments passed)
console.log(sum.name); //sum


//Due to hoisting we can call a function before declaring it
subtract(5, 3); //2

function subtract(a, b) {
    console.log(a - b);
}




  