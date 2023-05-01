//Comparison operators(>, <, >=, <=, ==, !=, ===, !==)

//To compare two values, we use a comparison operator and 
//it returns a boolean value

let r1 = 20 > 10; // true
let r2 = 20 < 10; // false
let r3 = 10 == 10; // true

let a = 10, 
    b = 20; 

console.log(a >= b);  // false
console.log(a == 10); // true

//String comparison
//If the operands are strings, JavaScript compares 
//the character Unicodes numerically one by one in the string.

let name1 = 'alice',
    name2 = 'bob';    

let result = name1 < name2;
console.log(result); // true
console.log(name1 == 'alice'); // true

//Comparing number with other type using comparison operators
//If a value is a number and the other is not, the comparison operator will convert the 
//non-numeric value into a number and compare them numerically. 

console.log(10 < '20'); // true
console.log(10 == '10'); // true
console.log(10 < "Hello"); //false //The string is internally converted into NaN
console.log(10 < NaN); //false


//Compare an object with a non-object

//If a value is an object, the valueOf() method of that object is called 
//to return the value for comparison. If the object doesn’t have the valueOf() method, 
//the toString() method is called instead.

let apple = {
    valueOf: function () {
      return 10;
    },
};
  
let orange = {
    toString: function () {
        return '20';
    },
};
console.log(apple > 10); // false
console.log(orange == 20); // true




//Compare a Boolean with another value
//If a value is a Boolean value, JavaScript converts it to a number and compares 
//the converted value with the other value; true is converted to 1 and false is converted to 0.
  
console.log(true > 0); // true
console.log(false < 1); // true
console.log(true > false); // true
console.log(false > true); // false
console.log(true >= true); // true
console.log(true <= true); // true
console.log(false <= false); // true
console.log(false >= false); // true


console.log(null == undefined); // true
//null is a value that represents the intentional absence of any object value.
//undefined is a value that represents the unintentional absence of any value.

console.log(NaN == 1); // false
//If either value is NaN, then the equal operator(==) returns false.
console.log(NaN == NaN); // false
console.log(NaN != 1); // true
console.log(NaN != NaN); // true


//Strict equal (===) and not strict equal (!==)
//It checks value as well as type

console.log("10" == 10); // true
console.log("10" === 10); // false