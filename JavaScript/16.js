//Exponentiation operator

//To raise a number to the power of an exponent,
//Math.pow(base, exponent)

let result = Math.pow(2,2);
console.log(result); // 4

result = Math.pow(2,3);
console.log(result); // 8

//There is an alternative way to do the samething i.e.
//Exponentiation operator(**)

result = 2 ** 2;
console.log(result); // 4

result = 2 ** 3;
console.log(result); // 8

//result = -2 ** 3; //syntax error
result = (-2) ** 3;
console.log(result); //-8

//It also accepts bigint
result = 2n ** 3n;
console.log(result); // 8n