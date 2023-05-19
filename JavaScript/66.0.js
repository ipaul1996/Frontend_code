/*
The setTimeout() method in JavaScript is used to execute a function after waiting for the specified time interval. 
This method returns a numeric value that represents the ID value of the timer.

setTimeout(functionRef, delay, param1, param2, … , paramN)

functionRef --> A function to be executed after the timer expires. It is a callback function.

delay(Optional) --> The time, in milliseconds that the timer should wait before the specified function or code is 
executed. If this parameter is omitted, a value of 0 is used, meaning execute "immediately", or more accurately, 
the next event cycle. The actual delay can be more than the intended delay.

param1, param2, .... --> These parameters are optional and allow you to pass values to the callback function 
when it is executed after the specified delay.

The returned timeoutID is a positive integer value which identifies the timer created by the call to setTimeout(). 
This value can be passed to clearTimeout() to cancel the timeout.


*/

console.log("script start");

setTimeout(() => {
    console.log("Hello World!");
}, 1000);


console.log("script end");

/*

Output:
script start
script end
Hello World!

*/