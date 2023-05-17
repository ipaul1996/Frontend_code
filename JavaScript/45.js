//Object Destructuring

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


