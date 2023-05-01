//pass by value & pass by reference in JS

//In JS, primitive values are pass by value i.e., when a primitive value is passed 
//to a function, a copy of that value is created and passed to the function. 
//This means that any changes made to the parameter inside the function will not 
//affect the original value outside of the function.

let x = 10;

function addOne(num) {
  num++;
}

addOne(x);
console.log(x); // Output: 10


//On the other hand, objects are pass by reference i.e., When an object is passed to a function,
//a reference to that object is passed instead of a copy. This means that any changes 
//made to the parameter inside the function will affect the original object outside 
//of the function. 


let person = {
    name: "IP",
    age: 26
}

function increaseAge(p) {
    p.age = p.age + 1;
    console.log(p.age);
}

increaseAge(person); //27

console.log(person.age); //27


//Recursive function
//In JavaScript, a recursive function is a function that calls itself repeatedly 
//until it reaches a base case that stops the recursion. Recursive functions are used to 
//solve problems that can be broken down into smaller, simpler versions of the same problem.

function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}


let res = factorial(5);
console.log(res); //125

/*
When factorial(5) is called the following happens:

factorial(5)

5 * factorial(4)
5 * 4 * factorial(3)
5 * 4 * 3 * factorial(2)
5 * 4 * 3 * 2 * factorial(1)
5 * 4 * 3 * 2 * 1 * factorial(0)
5 * 4 * 3 * 2 * 1 * 1

120

*/