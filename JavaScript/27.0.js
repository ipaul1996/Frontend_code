//JavaScript Default Parameters

//In JavaScript, a parameter has a default value of undefined. 
//It means that if we don’t pass the arguments into the function, 
//its parameters will have the default values of undefined.

function say(message) {
    console.log(message);
}

say(); // undefined

//But if we want to set a default value "Hello World!" then ES6 allows us to do that in the 
//following way:

function say(message = "Hello World!") {
    console.log(message);
}

say(); // Hello World!
say(undefined); // Hello World!
say("Hello"); // Hello


function requiredArg() {
   console.log("The argument is required");
}

function add(x = requiredArg(), y = requiredArg()){
   return x + y;
}
 
add(10); // The argument is required
add(10,20); // returns 30



function add(x = 1, y = x, z = x + y) {
    return x + y + z;
}

console.log(add()); // 4
console.log(add(1, 2, 3)); //6
console.log(add(1, 2)); //6 //arguments are for x and y parameter
console.log(add(1)); //4 //argument is only for x


function subtract(x = y, y = 1) {
    return x - y;
}
console.log(subtract(10)); //9
//subtract(); //Uncaught ReferenceError: Cannot access 'y' before initialization

function myFunc(x = 5, y = 4, z = 3) {
    console.log(arguments.length);
}

myFunc(); //0
myFunc(1); //1
myFunc(1, 2); //2
myFunc(1, 2, 3); //3

//The arguments object is an array-like object that contains all the actual arguments
//(i.e., not the default values passed to the parameter) passed to a function.
 