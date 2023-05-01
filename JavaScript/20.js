//nullish coalescing operator

//The nullish coalescing operator denoted by the double question marks (??). 
//It is a logical operator that accepts two values:

//value1 ?? value2

//It returns the second value (value2) if the first value (value1) is null or undefined
//else it returns the first value
//It is short-circuited i.e., if the first value is not null or undefiend, it does 
//not evaluate the 2nd value
const firstName = null ?? "John";
console.log(firstName); //John

const lastName = undefined ?? "Paul";
console.log(lastName); //Paul

let result = 1 ?? console.log('Hi'); //Here Hi will not be printed

//A SyntaxError will occur if you combine the logical AND or OR operator directly 
//with the nullish coalescing operator 
//const res1 = null || undefined ?? 'OK'; // SyntaxError

//But we can use the following:
const res2 = (null || undefined) ?? "OK"; 
console.log(res2); //OK


