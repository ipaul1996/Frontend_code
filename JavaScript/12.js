//primitive v/s reference value

//JS has two different types of values:
//primitive value - null, undefined, boolean, number, string, symbol, and BigInt
//reference value - object(include array, function, date and other custom objects)

//primitive values are atomic pieces of data and their size is fixed and 
//JS engine allocates fixed amount of memory in stack to store them whereas 
//objects are not of fixed size and JavaScript engine doesn’t allocate a fixed amount of memory
//for these objects. Instead, it’ll allocate more space as needed dynamically.

//When a variable is assigned a primitive value in JavaScript, the value itself is stored 
//directly in the variable's location in stack memory. In other words, the variable holds a 
//copy of the actual value, not a reference to its location in memory.

//When a variable is assigned with an object it does not hold a copy of the object,
//but it holds the reference(location) to the original object in the heap. Here the variable 
//is present in the stack but the original object is present in the heap. The heap is a region 
//of the computer's memory used for dynamic memory allocation.

let age = 25;
let newAge = age; 
//Here a seperate copy of the value 25 is created and assigned to newAge. So if we change the
//value of newAge then the value of age variable is not affected.
newAge = 26; //reassignment
console.log(newAge); //26
console.log(age); //25


let student = {
    name: "Indrajit Paul",
    roll: 12,
    marks: 85
};


let student1 = student;
//Here a separate copy of student object is not created, but a reference to the original 
//object in the heap is assigned to the variable student1. So student and student1 
//both the varibles are holding the reference of the original object present in the heap.
//So if we modify the object with the student1 reference, then modification will happen 
//in the original object in the heap. So changes will be reflected with all the reference 
//varibles pointing to the object.

student1.marks = 95;

console.log(student.marks); //95
console.log(student); //{ name: 'Indrajit Paul', roll: 12, marks: 95 }


// Primitives are immutable, meaning their values cannot be changed. If you want to change the value of a variable 
// holding a primitive, you need to reassign the variable.
// Objects, on the other hand, are mutable. You can modify the properties of an object directly.

let str = "Hello";
console.log("Original string:", str);

// Attempting to modify the string
// This won't change the original string, but create a new one
let modifiedStr = str.toUpperCase();
console.log("Modified string:", modifiedStr);

// The original string remains unchanged
console.log("Original string after modification attempt:", str); // Hello

// the toUpperCase() method doesn't modify the original string (str), but instead returns a new string with all characters 
// converted to uppercase. The original string remains immutable.


let person = {
    name: "John",
    age: 30
};
console.log("Original object:", person);

// Modifying the object directly
person.age = 31;
console.log("Modified object:", person);

// The original object has been mutated
console.log("Original object after modification:", person);

// we directly modify the age property of the person object. Objects are mutable, so changes to their properties 
// are reflected in the original object.


// When we pass a primitive as an argument to a function, you're passing a copy of the value (pass by value).
// When we pass an object as an argument to a function, you're passing the reference to the object (pass by reference).

// Pass by Value
let num = 7;
console.log("Before function call:", num);

function modifyPrimitive(value) {
    // Modifying the parameter value inside the function
    value = 42;
    console.log("Inside function:", value);
}

modifyPrimitive(num);

// The original variable remains unchanged
console.log("After function call:", num);

// when we pass the num variable to the modifyPrimitive function, we're passing a copy of the primitive value (7). 
// Any modifications made inside the function do not affect the original variable.

// Pass By Reference
let myObject = {
    property: "original"
};
console.log("Before function call:", myObject);


function modifyObject(obj) {
    // Modifying the object's property inside the function
    obj.property = "modified";
    console.log("Inside function:", obj);
}


modifyObject(myObject);

// The original object has been modified
console.log("After function call:", myObject);

// when we pass myObject to the modifyObject function, we're passing a copy of the reference to the object. 
// Both the original variable and the parameter in the function refer to the same object in memory. Therefore, 
// modifications to the object inside the function are reflected in the original object outside the function.
  
  


