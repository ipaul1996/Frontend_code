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


let arr=[1,2,3,4]

arr.map(function(element, ){

})