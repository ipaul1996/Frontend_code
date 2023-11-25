
// object4
// object methods


// An object is a collection of key/value pairs or properties. When the value is a function, 
// the property becomes a object method/JavaScript Method/Method. Typically, we use methods 
// to describe the object behaviors.

let details= {
    Name: "Indrajit Paul",
    Age: 25,
    Gender: "Male",
    City: "Kolkata",
    Ismarried: "false",
    sayHello: function () {
        console.log("Hello World!");
    }
}

// How to access an object property
console.log(details.Gender);

// How to access(i.e., call or invoke) an oject method
details.sayHello();

// Here we are accessing sayHello method. If, we do,
details.sayHello; // ƒ () { console.log("Hello World!""); } i.e., we get the function definition

console.log(details);

/*
Output:

{
  Name: 'Indrajit Paul',
  Age: 25,
  Gender: 'Male',
  City: 'Kolkata',
  Ismarried: 'false',
  sayHello: [Function: sayHello]
}

*/

