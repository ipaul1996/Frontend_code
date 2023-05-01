//Constructor Function

/*
In JavaScript, a constructor function is a special type of function that is used to 
create objects. 
A constructor function is a regular function with the following convention:
The name of a constructor function starts with a capital letter like Person, Document, etc.
A constructor function should be called only with the new operator.

Responsibility of the new operator:

1. Creates a new object: The new operator creates a new empty object. This object will 
be the new instance of the constructor function.

2. Sets the prototype of the new object: The new object's internal [[Prototype]] property 
is set to the constructor function's prototype property. This means that the new object 
inherits properties and methods from the constructor function's prototype.

3. Binds this to the new object: The this keyword inside the constructor function 
is set to the new object. This means that the properties and methods defined within the 
constructor function are added to the new object.

4. Returns the new object: If the constructor function does not explicitly return a value, 
the new operator returns the new object that was created. If the constructor function returns 
a primitive value (such as a string or number), it is ignored and the new object is returned.
If the constructor function explicitly returns a different object then it simply returns that
instead of "this".

*/


//Let us create an object with the object literal notation
let details= {
    Name: "Indrajit Paul",
    Age: 25,
    Gender: "Male",
    City: "Kolkata",
    Ismarried: false 
}

//Let us create the details object with the help of a regular function
function builder(name, age, gender, city, ismarried) {

    let details = {};

    details.Name = name;
    details.Age = age;
    details.Gender = gender;
    details.City = city;
    details.Ismarried = ismarried;

    return details;

}

let person1 = builder("Indrajit Paul", 25, "Male", "Kolkata", false); 
//This returns the object with name person1
console.log(person1);  
//{Name: 'Indrajit Paul', Age: 25, Gender: 'Male', City: 'Kolkata', Ismarried: false}

let person2 = builder("Asmita", 21, "Feale", "Kolkata", false); 
//This returns another object with name person2
console.log(person2); 
//{Name: 'Asmita', Age: 21, Gender: 'Feale', City: 'Kolkata', Ismarried: false}



//Let us create an object with the help of the constructor function
function ConstructorDetails(name, age, gender, city, ismarried) {

    this.Name = name;
    this.Age = age;
    this.Gender = gender;
    this.City = city;
    this.Ismarried = ismarried;

}

let person3 = new ConstructorDetails("Indrajit Paul", 25, "Male", "Kolkata", false);
console.log(person3); 
//O/P: ConstructorDetails {Name: 'Indrajit Paul', Age: 25, Gender: 'Male', City: 'Kolkata', Ismarried: false}

let person4 = new ConstructorDetails("Asmita", 21, "Female", "Kolkata", false);
console.log(person4); 
//O/P: ConstructorDetails {Name: 'Asmita', Age: 21, Gender: 'Female', City: 'Kolkata', Ismarried: false}


/*
The above constructor function is equivalent to the following:

function ConstructorDetails(name, age, gender, city, ismarried) {
    
    this = {};

    this.Name = name;
    this.Age = age;
    this.Gender = gender;
    this.City = city;
    this.Ismarried = ismarried;

    return this;

}

*/

console.log(person4 instanceof ConstructorDetails); //true
console.log(person4 instanceof ConstructorDetails); //true
//So all the objects created from a constructor function are the instances of the constructor.

//Let us add some properties to person3 and person4 object
person3.Nationality="Indian" //This proprty will only be added in person3
person4.Caste="Hindu";   //This proprty will only be added in person4

console.log(person3);
console.log(person4);

//Let us add some methods to person1 and person2 object
person3.sayHi=function() {
    console.log(`${this.Name}: Hi!`)
}

person4.sayHello=function() {
    console.log(`${this.Name}: Hello!`)
}

//Let us access these methods
person3.sayHi();
person4.sayHello();

//It should be noted that if we add any property/method to a particular object it only 
//gets added to that not in other objects and not even in the constructor function. 
//If we do any changes in constructor function it will be refelected in all its instances.


//Adding methods to JavaScript constructor functions

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
}

let p1 = new Person("Asmita", "Biswas");
console.log(p1.getFullName());

//Here getFullName() is duplicated in all its instances which is not memory efficient. To
//resolve this we use prototype.


function Cuboid(height, width, length) {

    this.Height = height;
    this.Width = width;
    this.Length = length;
    
    //return {cat:"Meow"}; // new operator will return it instead returning 'this' object
    //return 5;  // new operator will ignore it return 'this' object
}



//Calling a constructor function without the new keyword

let p2 = Person("Arpita", "Biswas");
//In this case, the Person just executes like a regular function. Therefore, the this inside 
//the Person function doesn’t bind to the person variable but the global object - window.

console.log(p2); //undefined
//console.log(p2.firstName); //caught TypeError: Cannot read properties of undefined (reading 'firstName')

console.log(window.firstName); //Arpita
console.log(window.getFullName()); //Arpita Biswas


//To prevent a constructor function to be invoked without the new keyword, 
//ES6 introduced the new.target property.
//If a constructor function is called with the new keyword, the new.target returns
//a reference of the function. Otherwise, it returns undefined.

function Person1(firstName, lastName) {

    if (!new.target) {
        return new Person1(firstName, lastName);
    }

    this.firstName = firstName;
    this.lastName = lastName;

}

let ps1 = Person1("Indrani", "Paul");
console.log(ps1);