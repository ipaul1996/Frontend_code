//primitive v/s reference value

//JS has two different types of values:
//primitive value- null, undefined, boolean, number, string, symbol, and BigInt
//reference value - object(include array, function, date and other custom objects)

//primitive values are atomic pieces of data and their size is fixed and 
//JS engine allocates fixed amount of memory in stack to store them whereas 
//objects are not of fixed size and JavaScript engine doesn’t allocate a fixed amount of memory
//for these objects. Instead, it’ll allocate more space as needed.

//When a variable is assigned a primitive value in JavaScript, the value itself is stored 
//directly in the variable's location in stack memory. In other words, the variable holds a 
//copy of the actual value, not a reference to its location in memory.

//When a variable is assigned with an object it does not hold a copy of the object,
//but it holds the reference(location) to the original object in the heap. Here the variable 
//is present in the stack but the original object is present in the heap.

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



