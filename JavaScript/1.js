//Variable

var message; //special value - undefined ---> Undefined variable
console.log(message); //undefined
// In JavaScript, when you declare a variable using let (or var or const), it is automatically initialized 
// with the value undefined. 

let message1;

message1 = "Hello";
message1 = "Bye";
message1 = 30; //Assigning a different data type --> Valid but Not recommended

//Another way of declaring variables
let x = 30,
    y = 50;

//console.log(z); //ReferenceError: z is not defined
//Here z is not declared - Undeclared variable

const workDays = 5;

//workDays = 6;  //Uncaught TypeError: Assignment to a constant variable.

