/*
Synchronous programming is a programming paradigm where the execution of code follows a sequential and blocking 
approach. In this model, each task or operation must complete before the program can move on to the next task. 
When a task is executing, it blocks the execution of the entire program until it finishes.

In synchronous programming, the flow of control is linear, and tasks are typically written one after another. 
When a function or method is called, the program waits for it to complete before moving on to the next line of code. 
This blocking behavior means that if a task takes a long time to execute or gets stuck, it can delay the execution 
of subsequent tasks and potentially make the program unresponsive.

JS is a synchronous programming language. A single thread executes the code.

*/


console.log("Script start");

for(let i = 1; i < 10000; i++) {
    console.log("Hello World!");
}

console.log("Script End");

//Here first "script start" is printed and then for loop is executed, until for loop is exited "Script End" is
//not printed in the console.