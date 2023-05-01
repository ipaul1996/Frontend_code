//Unary operators

//Unary Plus(+x)
let num1 = "50";
let x = +num1; //Converts a non-numeric value into a number
console.log(typeof(x)); //number

let str = "Hello";
let z = +str;
console.log(z); //NaN

console.log(+true); //1
console.log(+false); //0


let person = {
    name: "IP",
    age: 25,
    toString: function() {
        return "52";
    }
}

console.log(+person); //52 //calls the toString method if present then converts it to number 
//using Number() function. If toString() method not present it gives NaN

person.valueOf = function() {
    return 30;
}

console.log(+person);  //30 //Hence it calls valueOf() method instead of toString() method


//Unary Minus(-x)
let y = -num1; //Converts a non-numeric value into a number and negates it
console.log(y); //-50
console.log(typeof(y));  //number

//The rules for Unary minus is same as Unary plus 


//Increment operator(++) and Decrement operator(--)
//prefix increment operator --> Increase the value by 1 then return the new value
//postfix increment operator --> First return the value then increase the value by 1
//prefix decrement operator --> Decrease the value by 1 then return the new value
//postfix decrement operator --> First return the value then decrease the value by 1

let n = 2;
console.log(++n); //3  //n = 3
console.log(n++); //3  //n = 4
console.log(--n); //3  //n = 3
console.log(n--); //3  //n = 2



