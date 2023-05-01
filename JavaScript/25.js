//Function - 3

//Anonymous function

//An anonymous function is a function without a name.


(function () {
    console.log("Hello");
});

//Here if we don’t place the anonymous function inside the (), we’ll get a syntax error. By ()
//we are telling JS engine that this a function expression not a function declaration.
//An anonymous function is not accessible after its initial creation. 
//Therefore, either we can call where we have created it or assign it to a variable for later 
//invocation.

(function () {
    console.log("Hello");
})();       //Hello
//This gets immediately invoked after declaration


let x = function () {
    console.log("Hello");
};
//This is called function expression.

x();  //Hello
console.log(x.name); //x

//Since the whole assignment of the anonymous function to the variable x makes a 
//valid expression, we don’t need to wrap the anonymous function inside the parentheses ().


let person = {
    firstName: 'John',
    lastName: 'Doe'
};

(function () {
    console.log(person.firstName + ' ' + person.lastName);
})(person);   //John Doe



//Named function expression
let res = function subtract(a, b) {
    console.log(a - b);
    console.log("Function name is:", subtract.name);
}

res(100, 10); 
//Output: 90
//Function name is: subtract
//subtract(100, 10); //Uncaught ReferenceError: subtract is not defined
console.log(res.name); //subtract


