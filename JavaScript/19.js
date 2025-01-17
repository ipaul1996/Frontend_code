//Logical Operators(!, &&, ||)

//Logical NOT operator(!)

console.log(!true); //false
console.log(!false); //true

console.log(!undefined); //true //as undefined is a falsy
console.log(!null); //true //as null is a falsy value
console.log(!NaN); //true
console.log(!0); //true
console.log(!1); //false
console.log(!45); //false
console.log(!0n); //true
console.log(!""); //true
console.log(!"Hello"); //false
console.log(!{}); //false
console.log(!!10); //true

//Logical AND operator(&&)
//The result of the && operator is true only if both values are true, otherwise, it is false.
//The && operator is short-circuited. It means that the && operator evaluates the second value 
//only if the first one doesn’t suffice to determine the value of an expression.

/*
  a	    b	   a && b
true	true	  true
true	false	 false
false	true	 false
false	false	 false

*/

console.log(true && true); //true //2nd value is evaluated
console.log(false && true); //false  //2nd value is not evaluated
console.log(true && false); //false //2nd value is evaluated
console.log(false && false); //false //2nd value is not evaluated


//Understanding Truthy and Falsy Values in JavaScript Using Logical 
//AND (&&) Operator

//Evaluates operands from left to right.
//For each operand, converts it to a boolean. If the result is false, stops 
//and returns the original value. If all values are truthy values, returns the last value.

// falsy value: A value that is considered false when evaluated in a Boolean context.
// false, 0 and -0, "", null, undefined, NaN
// truthy value: A value that is considered true when evaluated in a Boolean context.
// Any value that is not falsy.

let b = true;
let result = b && (1 / 0);
console.log(result); //Infinity

result = b && 1;
console.log(result); //1

result = b && 25;
console.log(result); //25

result = 25 && b;
console.log(result); //true

result = b && 0;
console.log(result); //0

result = 0 && b;
console.log(result); //0

console.log(NaN && 0); //NaN
console.log(0 && NaN); //0


//The chain of && operators

//result = value1 && value2 && value3;


//Logical OR operator(||)
//The result of the || operator is false only if both values are false, otherwise, it is true.
//The || operator is short-circuited. It means that the || operator evaluates the second value 
//only if the first one doesn’t suffice to determine the value of an expression.

/*
a	     b	  a || b
true	true	 true
true	false	 true
false	true	 true
false	false	 false

*/


console.log(true || true); //true //2nd value is not evaluated
console.log(false || true); //true  //2nd value is evaluated
console.log(true || false); //true //2nd value is not evaluated
console.log(false || false); //false //2nd value is evaluated



//Understanding Truthy and Falsy Values in JavaScript Using Logical 
//OR (||) Operator

//Evaluates operands from left to right.
//For each operand, converts it to a boolean value. If the result of the conversion is true, 
//stops and returns the value. If all values have been evaluated to false, 
//returns the last value.

console.log(true || (1 / 0)); //true

result = true || 1;
console.log(result); //true

result = true || 25;
console.log(result); //true

result = 25 || true;
console.log(result); //25

result = true || 0;
console.log(result); //true

result = 0 || true;
console.log(result); //true

console.log(NaN || 0); //0
console.log(0 || NaN); //NaN


//The chain of || operators

//result = value1 || value2 || value3;

//Logical operator precedence

//Highest ---> Lowest
// ! --> && --> ||
