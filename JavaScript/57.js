//JavaScript Math Methods
//JavaScript provides a built-in Math object that includes various methods for performing mathematical operations. 
//These methods cover a wide range of mathematical calculations and are accessible through the Math object.

console.log(Math);

/*

Math {abs: ƒ, acos: ƒ, acosh: ƒ, asin: ƒ, asinh: ƒ, …}
E: 2.718281828459045
LN2: 0.6931471805599453
LN10: 2.302585092994046
LOG2E: 1.4426950408889634
LOG10E: 0.4342944819032518
PI: 3.141592653589793
SQRT1_2: 0.7071067811865476
SQRT2: 1.4142135623730951
abs: ƒ abs()
acos: ƒ acos()
acosh: ƒ acosh()
asin: ƒ asin()
asinh: ƒ asinh()
atan:ƒ atan()
atan2: 
ƒ atan2()
atanh: ƒ atanh()
cbrt: ƒ cbrt()
ceil: ƒ ceil()
clz32: ƒ clz32()
cos: ƒ cos()
cosh: ƒ cosh()
exp: ƒ exp()
expm1: ƒ expm1()
floor: ƒ floor()
fround: ƒ fround()
hypot: ƒ hypot()
imul: ƒ imul()
log: ƒ log()
log1p: ƒ log1p()
log2: ƒ log2()
log10: ƒ log10()
max: ƒ max()
min: ƒ min()
pow: ƒ pow()
random: ƒ random()
round: ƒ round()
sign: ƒ sign()
sin: ƒ sin()
sinh: ƒ sinh()
sqrt: ƒ sqrt()
tan: ƒ tan()
tanh: ƒ tanh()
trunc: ƒ trunc()
Symbol(Symbol.toStringTag): "Math"
[[Prototype]]: Object


*/



//typeof is a JavaScript keyword that will return the type of a variable when you call it.
console.log(typeof(Math)); //Object
console.log(typeof(Math.ceil())); //number
console.log(typeof(Math.ceil));  //function

console.log(Math.abs(-5.2)); //5.2//returns absolute value of a number
console.log(Math.abs(null));  //0
console.log(Math.abs("IP"));  //NaN
console.log(Math.abs(-3 - 5.2)); //8.2

console.log(Math.cbrt(7));  //returns cube root of a number

console.log(Math.sqrt(16));  //returns square root of a number

/*
A number that is in decimal form is a floating point number. ceil and floor method only works on floating point number
console.log(Math.ceil(8.5)); //returns the smallest integer greater than or equal to numeric value of the argument
console.log(Math.ceil(-8.5));
console.log(Math.floor(8.5)); //returns the greatest integer less than or equal to numeric value of the argument
console.log(Math.floor(-8.5));

console.log(Math.round(4.19)); //4 rounds to nearest integer
console.log(Math.round(4.89)); //5
console.log(Math.round(4.50)); //5

console.log(Math.trunc(4.19));  //returns integral part removing fractional part

console.log(Math.max(4,5,6,100.5));

console.log(Math.min(4,-5.259,6,100.5));

console.log(Math.pow(2,6)); //here 2 is base and 6 is power/index/exponant

console.log(Math.random()); //returns any value between 0 to 1 [0,1) 
If we want any random value between 0 to 10
console.log(Math.random()*10);

If we want any random integer between 0 to 10
console.log(Math.floor(Math.random()*10)); //[0,10)--->{0,1,2,3,4,5,6,7,8,9}
or
console.log(Math.ceil(Math.random()*10));  //[0,10)--->{0,1,2,3,4,5,6,7,8,9,10}
or 
console.log(Math.round(Math.random()*10));  //[0,10)--->{0,1,2,3,4,5,6,7,8,9,10}
or
console.log(Math.trunc(Math.random()*10));  //[0,10)--->{0,1,2,3,4,5,6,7,8,9}

If we want any random integer between 1 to 10
console.log(Math.floor(Math.random()*10)+1); //[0,11)--->{0,1,2,3,4,5,6,7,8,9,10}
or
console.log(Math.trunc(Math.random()*10)+1);  //[0,11)--->{0,1,2,3,4,5,6,7,8,9,10}


Some properties of Math object
console.log(Math.SQRT1_2);   //square root of 0.5 
console.log(Math.SQRT2);   //square root of 2
console.log(Math.PI);  //3.141592653589793

*/