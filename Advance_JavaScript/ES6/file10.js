let n=9;
let param=undefined;

// if(n%2===0) {
//     param='party';
// } else if(n%3===0) {
//     param='bhandara';
// } else {
//     param='pitai';
// }

// console.log(param);

//We can do the same thing using Ternary Operator

//Syntax:
//condition ? expression1 : expression2
// If the condition is true, expression1 is executed.
// If the condition is false, expression2 is executed.
// The ternary operator takes three operands, hence, the name ternary operator. It is also known as a conditional operator.

n%2 === 0 ? param = 'party' : n%3 === 0 ? param = 'bhandara' : param = 'pitai';

console.log(param);