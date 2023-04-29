//boolean v/s Boolean

let y = false; //primitive
console.log(typeof(y)); //boolean

let z = new Boolean(false); //object //wrapper object for Boolean primitive
console.log(typeof(z)); //object

console.log(z.valueOf()); //false //To get the primitive value from the object
console.log(z.toString()); //"false" --> Returns string representation of the object

//For Boolean object we can add property(key-value pair) to it
z.name = "Ashok";
console.log(z.name); //Ashok
console.log(z); //[Boolean: false] { name: 'Ashok' }

//For primitive we can't add any property 
y.name = "Amit";
console.log(y.name); //undefined


console.log(y instanceof Boolean); //false
console.log(z instanceof Boolean); //true

//It is a good practice never to use the Boolean object because 
//it will create many confusions, especially when using in an expression.





//We create wrapper object for undefined in the following way
let v = new Object(undefined); //This will create a new object with undefined as its value.

console.log(v); //{}


