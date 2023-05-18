//Arrow function
/*

n JavaScript, an arrow function is a concise syntax for creating functions. It was introduced in ECMAScript 6 (ES6) 
as an alternative to traditional function expressions. Arrow functions provide a more concise and intuitive 
way to define functions, especially for small and simple functions.

*/

const calcAge = birthYear => 2023 - birthYear; //No return statement is required. Also parenthesis around the parameter is not required 
const age = calcAge(1996);
console.log(age); //27


const yearsUntilRetirement = birthYear => {
    const age = 2023 - birthYear;
    return 60 - age;  //Here return statement is required
}

const res = yearsUntilRetirement(1996);
console.log(res); //33


const sum = (a, b) => a + b;
console.log(sum(20, 30)); //50


const printHello = () => console.log("Hello!");  //If there is no parameter bracket is mandatory
printHello(); //Hello!


