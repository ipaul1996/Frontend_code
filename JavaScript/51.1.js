//HOF - 1.1

function hof(sayHello) {
    sayHello();
}


function sayHello() {
    console.log("Hello World!");
}

hof(sayHello);

function sayWelcome(x) {
    console.log(`Welome ${x}!`);
}

hof(function() {
    console.log("Hey! Whats up?");
    sayWelcome("Amit");
});

//Tell me the difference between two hof calls
//the difference between the two hof function calls lies in the functions being passed 
//as arguments. In the first call, a named function sayHello is passed, while in the 
//second call, an anonymous function is passed. The specific behavior of each call 
//depends on the function that is passed as an argument and what that function does 
//when invoked.