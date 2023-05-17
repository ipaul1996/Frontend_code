//Enumerable properties

const person = {
    firstName: 'Indrajit', //Property created via a property initilizer
    lastName: 'Paul'
};

person.age = 25; //Property created by assignment

//We know each property of an object has many internal attributes like configurable, writable,
//enumerable etc. When a property is created via a property initializer or an assignment then by default they are 
//enumerable i.e., it will show up in for...in loop or Object.keys() method.

for(const x in person) {
    console.log(x, person[x]);
}

/*

firstName Indrajit
lastName Paul
age 25

*/

let keys = Object.keys(person);
console.log(keys); //['firstName', 'lastName', 'age']

//To change the internal enumerable attribute of a property, we use the Object.defineProperty() method.
Object.defineProperty(person, "age", {
    enumerable: false
});

for(const x in person) {
    console.log(x, person[x]);
}

/*

firstName Indrajit
lastName Paul

*/

let keys1 = Object.keys(person);
console.log(keys1); //['firstName', 'lastName']


console.log(person.propertyIsEnumerable("firstName")); // true
console.log(person.propertyIsEnumerable("lastName")); // true
console.log(person.propertyIsEnumerable("age")); // false

