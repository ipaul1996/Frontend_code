//Truthy value and falsy value in JS

//In JavaScript, a falsy value is a value that is considered false when encountered in a 
//Boolean context.

//Falsy values in JS: false, 0 (zero), -0 (negative zero), 0n (BigInt zero), 
//"" (empty string), null, undefined, NaN (Not a Number)

//When any of these values are used in a Boolean context, such as in an if statement or 
//as an operand to the logical operators (&&, ||, !), they are considered false. 
//Any other value that is not in the above list is considered truthy.

if (0) {
  // This block will not execute, since 0 is falsy
  console.log("Can you see me?");
}

if (null || undefined) {
  // This block will not execute, since both null and undefined are falsy
  console.log("Can you see me?");
}

if ("Hello, World!") {
  // This block will execute, since "Hello, World!" is truthy
  console.log("This block gets executed.");
}

//Output: This block gets executed.


if(NaN) {
    console.log("Hello");
} else {
    console.log("Hi");
}

//Output: Hi

if(-0) {
    console.log("Hey!");
} else {
    console.log("How are you?");
}

//Output: How are you?



