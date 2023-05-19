/*

setTimeout() is an asynchronous function, meaning that the timer function will not pause execution of other 
functions in the functions stack. In other words, you cannot use setTimeout() to create a "pause" before the 
next function in the function stack fires.


*/

setTimeout(() => {
    console.log("this is the first message");
}, 5000);

setTimeout(() => {
console.log("this is the second message");
}, 3000);

setTimeout(() => {
console.log("this is the third message");
}, 1000);
  

// Output:
// this is the third message
// this is the second message
// this is the first message
  

/*

Notice that the first function does not create a 5-second "pause" before calling the second function. 
Instead, the first function is called, but waits 5 seconds to execute. While the first function is waiting 
to execute, the second function is called, and a 3-second wait is applied to the second function before it executes. 
Since neither the first nor the second function's timers have completed, the third function is called and 
completes its execution first. Then the second follows. Then finally the first function is executed after its 
timer finally completes.


*/