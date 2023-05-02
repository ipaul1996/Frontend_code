//Function - 2

/*
In JavaScript, functions are first-class objects. It means that:

1. Functions can be assigned to variables or passed as arguments to other functions.
2. Functions can be returned as values from other functions.
3. Functions can be stored in data structures like arrays or objects.
4. They can also have properties and methods just like any other object.

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


//We can add property and methods to a function.
function mySubtract(a, b) {
    return a - b;
}
 
mySubtract.color = "red";
mySubtract.sayHello = function() {
    console.log("Hello!");
}
 
console.log(mySubtract.color); //red
mySubtract.sayHello(); //Hello
console.log(mySubtract.sayHello);
/*
ƒ () {
    console.log("Hello!");
}
*/
console.log(Object.keys(mySubtract)); //['color', 'sayHello']
console.log(Object.values(mySubtract)); //['red', ƒ]
