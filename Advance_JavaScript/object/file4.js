//Object Methods

//If an object property holds a function definition as property value then the property is called object method/JavaScript Method/Method.
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

//How to access an object property
console.log(details.Gender);

//How to access an oject method
details.sayHello();
//Here we are accessing sayHello method. If, we do,
details.sayHello;   // ƒ () { console.log("Hello World!""); } i.e., we get the function definition



console.log(details);

