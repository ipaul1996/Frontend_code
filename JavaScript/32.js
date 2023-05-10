
/*
The Object.defineProperty() static method defines a new property directly on an object, or modifies an existing 
property on an object, and returns the object.
When we add a property to an object through assignment by default it shows up during property 
enumeration (for...in, Object.keys(), etc.), its value may be changed and may be deleted. 
When we add a property to an object using Object.defineProperty() method it allows to provide a lot more 
constraints about the property. By default, any property defined with this method is not writable, not enumerable, 
and not configurable.

Object.defineProperty(obj, prop, descriptor)

obj - The object on which to define the property.
prop - A string or Symbol specifying the key of the property to be defined or modified.
descriptor - The descriptor for the property being defined or modified. It is an object that contains the 
configuration settings for a particular property of an object. Property descriptors define how a property 
can be accessed and modified. There are two types of property descriptors: data descriptors and accessor descriptors.

Data descriptors are used for properties that have a single, fixed value. They have the following attributes:

value(default - undefined): The value of the property.
writable(default - false): A boolean indicating whether the property can be changed.
enumerable(default - false): A boolean indicating whether the property can be listed during enumeration.
configurable(default - false): A boolean indicating whether the property can be deleted or modified. 
other attributes of its descriptor cannot be changed (however, if it's a data descriptor with writable: true, 
the value can be changed, and writable can be changed to false).

Accessor descriptors are used for properties that are defined by a getter-setter pair of functions. 
They have the following attributes:

get(default - undefined): A function which serves as a getter for the property, or undefined if there is no getter. 
When the property is accessed, this function is called without arguments and with this set to the object through 
which the property is accessed (this may not be the object on which the property is defined due to inheritance). 
The return value will be used as the value of the property.
set(default - undefined): A function which serves as a setter for the property, or undefined if there is no setter. 
When the property is assigned, this function is called with one argument (the value being assigned to the property) 
and with this set to the object through which the property is assigned.
If a descriptor doesn't have any of the value, writable, get, and set keys, it is treated as a data descriptor. 
If a descriptor has both [value or writable] and [get or set] keys, an exception is thrown.
enumerable(default - false): A boolean indicating whether the property can be listed during enumeration.
configurable(default - false): A boolean indicating whether the property can be deleted or modified.



*/



const person = {};

Object.defineProperty(person, 'firstName', {
  value: 'Indrajit',
  writable: true,
  enumerable: true,
  configurable: false
});


Object.defineProperty(person, 'lastName', {
  value: 'Paul',
  writable: false,
  enumerable: true,
  configurable: false
});



for(let x in person) {
    console.log(x, person[x]);
}

/*
firstName Indrajit
lastName Paul

*/

person.firstName = "Abir"; //As firstName property is writable
console.log(person.firstName); //Abir

person.lastName = "Roy"; //writable = false
console.log(person.lastName); //Paul

delete person.firstName; //configurable = false
console.log(person.firstName); //Abir
//If configurable would be false then it would print undefined


//Let us change the writable attribute
Object.defineProperty(person, 'firstName', {
    value: 'Indrajit',
    writable: false,
    enumerable: true,
    configurable: false
});
  
person.firstName = "Abir"; //writable - false
console.log(person.firstName); //Indrajit

/*
Object.defineProperty(person, 'firstName', {
    value: 'Indrajit',
    writable: true,
    enumerable: true,
    configurable: false
});

Uncaught TypeError: Cannot redefine property: firstName
Here writable was previously set to false, we can not make it true by redefining it. 

*/

let descriptor = Object.getOwnPropertyDescriptor(person, "firstName");
console.log(descriptor); //{value: 'Indrajit', writable: false, enumerable: true, configurable: false}

console.log(descriptor.configurable); //false
console.log(descriptor.enumerable); //true
console.log(descriptor.writable); //false
console.log(descriptor.value); //Indrajit

// ****************************************************************************************** //

const person1 = {};

Object.defineProperty(person1, 'firstName', {
  value: 'Indrajit',
  writable: true,
  enumerable: true,
  configurable: false
});


Object.defineProperty(person1, 'lastName', {
  value: 'Paul',
  writable: false,
  enumerable: true,
  configurable: false
});


Object.defineProperty(person1, 'fullName', {
  get() {
    return `${this.firstName} ${this.lastName}`;
  },
  set(value) {
    const [firstName, lastName] = value.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  },
  enumerable: true,
  configurable: true
});

console.log(person1.fullName); //Indrajit Paul

person1.fullName = "Asmita Biswas";
console.log(person1.fullName); //Asmita Paul

console.log(person1);

let descriptor1 = Object.getOwnPropertyDescriptor(person1, "fullName");
console.log(descriptor1); //{enumerable: true, configurable: true, get: ƒ, set: ƒ}
console.log(descriptor1.writable); //undefined
 
console.log(descriptor1.get);
/*
ƒ get() {
    return `${this.firstName} ${this.lastName}`;
}
*/

console.log(descriptor1.set);

/*
ƒ set(value) {
    const [firstName, lastName] = value.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
}

*/


/*
In the fullname accessor property:

The get returns the full name that is the result of concatenating of firstName, space, and lastName.
The set method splits the argument by the space and assigns the firstName and lastName properties 
the corresponding parts of the name.

*/