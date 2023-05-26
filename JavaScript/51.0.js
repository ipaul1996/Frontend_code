//Higher Order Functions - 1

function javascript1(message) {
  console.log("Welcome to JS"+" "+message);
}

javascript1("HOF");
//Order of Execution:  8 -> 3 -> 4



javascript2();

function javascript2() {
  console.log("Hello World!");
}
//Order of Execution:  12 -> 14 -> 15


//Callback function - A callback function is a function passed into another function as an 
//argument, which is then invoked inside the outer function to complete some kind of routine 
//or action.

//Higher-order function - A higher-order function is a function that can take one or more 
//functions as arguments or can return a function as its result

function eatBreakFast(item, time, x) {
  x();
  console.log("I will eat", item, "as my breakfast at", time, "a.m")
}
  
eatBreakFast("maggi", 9, doBrush);
  
function doBrush() {
  console.log("Do Brush First");
}
  
//Order of Execution: 32->27->28->34->35->29
//Here eatBreakFast(...) is a HOF
//doBrush() is a callback function


function multiplyBy(num) {
    return function(x) {
        return x * num;
    }
}

const multiplyBy2 = multiplyBy(2);
const multiplyBy3 = multiplyBy(3);

console.log(multiplyBy2(5)); // Output: 10
console.log(multiplyBy3(5)); // Output: 15
  
//Here multiplyBy(...) is a HOF




function web19(count, a) {
    console.log("We are students of WEB-19 and we are", count, "in number")
    a();
};
  
web19(700, web18); 
//Here as an argument we need to pass the reference of the callback function that will be 
//called inside the function web19(...)
  
function web18() {
    console.log("There are 130 web-18 students as well");
}
  
//Order of Execution:65->60->61->62->69->70
//Here web19 is HOF & web18 is callback

  
//If a function takes a function as an argument then while calling that function either 
//we can pass reference of a function or directly pass an anonymous function.
//you can also pass a named function declaration while calling a higher-order function 
//that takes a function as an argument. However, it's generally considered best practice 
//to use anonymous function expressions for this purpose.

web19(700, function() {
    console.log("There are 130 web-18 students as well");
});
