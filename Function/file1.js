//Some observations related to function

//In place of function parameter we can only add different variables. This variable can also be reference to a function.But here we can not pass any function declaration or anonymous function. 
//In place of function argument we can pass diffrent values, function reference or anonymous function
// How to define a function in place of a function argument? ---> With the help of anonymous function
//Every function in JavaScript implicitly returns undefined unless you explicitly specify a return value.

function sayHello(callback) {
    callback(125);
}

// sayHello(function(){
//     console.log("Hello")
// })

// sayHello(function(){
//     console.log("Hello");
// })

sayHello(function(x) {
    console.log("Hello"+x);
});

// function call(x) {
//     console.log("Hello"+x);
// }



// The function immediately stops executing immediately when it reaches the return statement. Therefore, you can use the return statement without a value to exit the function prematurely,
function say(message) {
    // show nothing if the message is empty
    if (! message ) {
        return;
    }
    console.log(message);
}

//The window object is the Global Object in the Browser. Any Global Variables or Functions can be accessed as properties of the window object. The variables should not be declared with let or const,if so, then it will not be property of window object. 
//“This” keyword refers to an object that is executing the current piece of code. It references the object that is executing the current function. If the function being referenced is a regular function, “this” references the global object. If the function that is being referenced is a method in an object, “this” references the object itself.

function mt () {
    console.log(this); //Window object
}

function myFunc () {
    return function() {
        return function() {
            return function() {
                return function() {
                    return function() {
                        return function() {
                            return function() {
                                return function() {
                                    console.log(this); //Window Object
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

myFunc()()()()()()()()();

let detailsObj={
    Name:'IP',
    method: function() {
        console.log(this);  //detailsObj
    }
}


let obj1={
    Name:'IP',
    method: function() {
        return function() {
            return function() {
                return function() {
                    console.log(this); //Window object
                }
            }
        }
    }
}

