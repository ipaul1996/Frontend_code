//Function - 2

/*
Functions are first-class citizens in JavaScript. That means they are treated as regular values
and can be used like any other data type, such as strings or numbers. Specifically, 
it means that:

1. Functions can be assigned to variables or passed as arguments to other functions.
2. Functions can be returned as values from other functions.
3. Functions can be stored in data structures like arrays or objects.

*/

function add(a, b) {
    console.log(a + b);
}

let sum = add;

//We can call the function in the following ways:
add(10, 20); //30
sum(10, 20); //30
console.log(sum.name); //add


function addition(a, b) {
    return a + b;
}

function average(a, b, fn) {
    return fn(a, b) / 2;
}

let res1 = average(30, 20, addition);
console.log(res1); //25
 


function multiply(x) {
    return function(y) {
      return x * y;
    };
}

console.log(multiply(5)(6)); //30 
//Last two functions are called higher order functions


function myFunc () {
    return function() {
        return function() {
            return function() {
                return function() {
                    return function() {
                        return function() {
                            return function() {
                                return function() {
                                    console.log("Hello World!"); 
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

myFunc()()()()()()()()(); //Hello World!

