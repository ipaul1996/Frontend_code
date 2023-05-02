

/*

In JavaScript, every constructor function has a property called prototype. 
The prototype property references an anonymous object that is used as a template for creating 
new objects. When you create a new object using the new keyword and a constructor function, 
the new object inherits all of the properties and methods defined in the constructor function's
prototype. This anonymous object can be accessed by,

ConstructorFunctionName.prototype;

The anonymous object has the constructor property that references the Constructor function.

ConstructorFunctionName.prototype.constructor === ConstructorFunctionName; (true)

*/


function Person(name, age) {
    this.name = name;
    this.age = age;
}


Person.color = "Red";
Person.sayHi = function() {
    console.log("Hi!");
}

console.log(Person.prototype);


console.log(Person instanceof Function);