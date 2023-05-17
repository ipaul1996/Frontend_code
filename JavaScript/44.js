//Array Destructuring

let [x, y, z] = [70, 80, 90];
//In L.H.S x, y and z are enclosed in [] but it does not mean it is an array, it is just 
//array destructuring syntax

console.log(x); //70
console.log(y); //80
console.log(z); //90

let [a, b, c] = [-1, 2];
console.log(a); //-1
console.log(b); //2
console.log(c); //undefined


let [m, n ,...args] = [3, 5, 7, 8];
//The last parameter (args) is prefixed with the three-dots ( ...). It’s called a rest parameter ( ...args).
console.log(m); //3
console.log(n); //5
console.log(args); //[7, 8]


//setting default values
let [i = 1, k = 5, p] = [, 10];
console.log(i); //1 //default value
console.log(k); //10
console.log(p); //undefined

//let [s, t] = null; //Uncaught TypeError: null is not iterable


//Nested array destructuring
function getProfile() {
    return [
        'Indrajit',
        'Paul',
        ['Red', 'Green', 'Blue']
    ];
}

let [
    firstName,
    lastName,
    [
        color1,
        color2,
        color3
    ]
] = getProfile();

console.log(color1, color2, color3); // Red Green Blue

//swapping variables
let d = -11;
let e = 52;

[d, e] = [e, d];

console.log(d); //52
console.log(e); //-11


//Function that returns multiple variables
function stat(a, b) {
    return [
        a + b,
        (a + b) / 2,
        a - b
    ]
};


let [sum, average, difference] = stat(20, 10);
console.log(sum, average, difference); // 30, 15, 10


//array destrucring with a string
const str = 'hello';
const [a1, b1, c1, d1, e1] = str;
console.log(a1, b1, c1, d1, e1); // Output: "h" "e" "l" "l" "o"
//When we use array destructuring with a string, each character in the string becomes an element in the array.




