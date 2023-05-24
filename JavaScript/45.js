//Object Destructuring
//Object destructuring is a feature in JavaScript that allows you to extract properties from an object 
//and assign them to variables with a concise syntax.
//It does not affect the original array
//Here order does not matter but property name does

let person = {
    firstName: 'John',
    lastName: 'Doe'
};

let {firstName: fName, lastName: lName} = person;
//Here, {propertyName1: variable1, propertyName2: variable2} = object;

console.log(fName); //John
console.log(lName); //Doe

//If the variable name is same as the property name we can make our code more concise,
let {firstName, lastName} = person;

console.log(firstName); //John
console.log(lastName); //Doe

let person1 = {
    name: "Indrajit Paul",
    age: 26
};

let { name, age, gender } = person1;
console.log(gender); // undefined


//setting default values

let myColor = {
    col1: "red",
    col2: "blue",
    col4: "green"
};

let {col1, col2, col3 = "white", col4} = myColor;
console.log(col1); //red
console.log(col2); //blue
console.log(col3); //white 
console.log(col4); //green


//Destructuring null
//let {x, y} = null; //Uncaught TypeError: Cannot destructure property 'x' of 'null' as it is null.


const arr = [{ name: 'John', age: 25 }, { name: 'Jane', age: 30 }];
const [{ name: firstName1, age: age1 }, { name: firstName2, age: age2 }] = arr;
console.log(firstName1, age1, firstName2, age2); // Output: John 25 Jane 30


let a = 111;
let b = 22;

let obj = {a: 10, b: 12};

//a and b is already declared
({a, b} = obj);

console.log(a, b); //10 12

function printDetails({name, age, state}) {
    return `Hey! I am ${name}. My age is ${age}. Currently, I am living in ${state}`;
}


const res = printDetails({age: 26, name: "IP", state: "WB"});
console.log(res); //Hey! I am IP. My age is 26. Currently, I am living in WB
//Here the caller of the function does not have to be worried about order of the parameters.


let nested = {
    name: "IP",
    address: {
        state: "WB",
        city: "Kolkata"
    }
};

let {name:n, address:{state: s, city: c}} = nested;
console.log(`Name: ${n}, State: ${s}, City: ${c}`); //Name: IP, State: WB, City: Kolkata
