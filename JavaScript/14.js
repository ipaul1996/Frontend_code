//Arithmetic Operator

//Addition operator(+)

let x = 2;
let y = 3;
console.log(x + y); //5

let str1 = "Hello";
let str2 = "World";
let num = 12;
let str3 = "30";

console.log(str1 + str2); //HelloWorld //Concatenation
console.log(str1 + num); //Hello12
console.log(num + str1); //12Hello
console.log(num + str3); //1230

console.log(NaN + 2); //NaN //NaN + anything = NaN
//This is because NaN represents the result of an undefined or unrepresentable 
//mathematical operation.
console.log(Infinity + Infinity); //Infinity
console.log(-Infinity + (-Infinity)); //-Infinity
console.log(Infinity + (-Infinity)); //NaN

//+Infinity v/s -Infinity
//The main difference between +Infinity and -Infinity is their sign. 
//+Infinity represents a positive number that is infinitely large, 
//while -Infinity represents a negative number that is infinitely small (or negative infinity).

//+0 v/s -0
//In JavaScript, +0 (positive zero) and -0 (negative zero) are two distinct representations of
// the number zero. While they are considered to be numerically equal, but the 
//binary representation +0 has sign bit of 0 and -0 has sign bit of 1
let a = 1/+0;
let b = 1/-0;
console.log(a); //Infinity
console.log(b); //-Infinity


//Subtraction Operator(-)

console.log(y - x);  //1

//If the operands are not number then it first it converts them to a number using
//Number() function internally then perform the subtraction operation
console.log(str1 - str2); //NaN
console.log(str1 - num); //NaN
console.log(num - str1); //NaN
console.log(num - str3); //-18

console.log(NaN - 2); //NaN //NaN - anything = NaN
console.log(Infinity - Infinity);  //NaN
console.log((-Infinity) - (-Infinity)); //NaN
console.log(Infinity - (-Infinity)); //Infinity



//Multiplication Operator(*)
console.log(x * y); //6

//If the operands are not number then it first it converts them to a number using
//Number() function internally then perform the multiplication operation

console.log(str1 * str2); //NaN
console.log(str1 * num); //NaN
console.log(num * str1); //NaN
console.log(num * str3); //360

console.log(NaN * 2); //NaN //NaN * anything = NaN
console.log(Infinity * Infinity);  //Infinity
console.log((-Infinity) * (-Infinity)); //Infinity
console.log(Infinity * (-Infinity)); //-Infinity
console.log(Infinity * 100); //Infinity
console.log(Infinity * (-100)); //-Infinity
console.log(-Infinity * 100); //-Infinity
console.log(-Infinity * (-100)); //+Infinity
console.log(Infinity * 0); //NaN
console.log(-Infinity * 0); //NaN



//Division Operator(/)
console.log(x / y); //0.6666666666666666

//If the operands are not number then it first it converts them to a number using
//Number() function internally then perform the division operation

console.log(str1 / str2); //NaN
console.log(str1 / num); //NaN
console.log(num / str1); //NaN
console.log(num / str3); //0.4

console.log(NaN / 2); //NaN //NaN / anything = NaN
console.log(Infinity / Infinity);  //NaN
console.log((-Infinity) / (-Infinity)); //NaN
console.log(Infinity / (-Infinity)); //NaN
console.log(Infinity / 100); //Infinity
console.log(Infinity / (-100)); //-Infinity
console.log(-Infinity / 100); //-Infinity
console.log(-Infinity * (-100)); //+Infinity
console.log(Infinity / 0); //Infinity
console.log(-Infinity / 0); //-Infinity

console.log(0/0); //NaN


//Remainder operator(%)
//It returns the remainder left over when one value is divided by another value.
//The sign of the remainder is the same as the sign of the dividend.
let remainder = 5 % -2;
console.log(remainder); // 1

remainder = 5 % 2;
console.log(remainder); // 1

remainder = -5 % 3;
console.log(remainder); // -2

remainder = -5 % -3;
console.log(remainder); // -2

remainder = Infinity % 2;
console.log(remainder); // NaN

remainder = 10 % 0;
console.log(remainder); // NaN

remainder = Infinity % Infinity;
console.log(remainder); // NaN

remainder = 10 % Infinity;
console.log(remainder); // 10
//Implementation specific behaviour

remainder = 0 % 10;
console.log(remainder); // 0

remainder = '10' % 3;
console.log(remainder); // 1
