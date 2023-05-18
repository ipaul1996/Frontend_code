//"this" keyword

/*
this keyword/variable: Special variable that is created for every execution context(global or function).
"this" is NOT static. It depends on how the function is called and its value is only assigned when the
function is actually called.

In the global context, "this" always references the global object, which is the window object 
on the web browser or global object on Node.js.

For object methods "this" represents the object that is currently calling the method i.e., the owner of the method.

For normal function(Function declaration or function expression) calls "this"  points to the undefined 
in strict mode, otherwise it points to the global object window.

For arrow functions "this" does not have its own binding but instead inherits the value of "this" from 
the enclosing context where the arrow function is defined. When an arrow function is used as a method of an object, 
"this" inside the arrow function does not refer to the object itself but retains the value of "this" from the 
enclosing context. It is a good practise that we don't use arrow functions as a method. But we should always 
use arrow function if the function is an inner function of an object method such that "this" inside this 
arrow function will be inherited from the method which is actually pointing to the owner object.

For constructor functions if we call it with the "new" keyword, then "this" points to the current instance 
of the constructor function.

For Event listener this points to the DOM element that the handler is attached to.


*/

console.log(this);
//Window {window: Window, self: Window, document: document, name: '', location: Location, …}
console.log(this === window); //true

//Here if we assign any property to "this" object, it will be added to global object,
this.color = "purple";
console.log(window.color); //purple



const person = {
    name: 'John',
    age: 30,
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};
  
person.greet(); // Output: "Hello, my name is John and I am 30 years old."
//When we call person.greet(), the this keyword inside the greet method refers to the person object, 
//which is the object that is currently calling the method.





//In the non-strict mode, the this references the global object when the function is called as follows:
function show() {
    console.log(this === window);
}
 
show(); //true
//We can also call it in the following ways,
window.show(); //true
this.show(); //true


//In the strict mode, JavaScript sets the this inside a function to undefined
function show1() {
    "use strict";
    console.log(this);
}

show1(); //undefined




function show2() {
    "use strict";
    console.log(this === undefined); // true

    function display() {
        console.log(this === undefined); // true
    }
    display();
}

show2();


const myFunc = function() {
    console.log(this);
}

myFunc(); //Window {window: Window, self: Window, document: document, name: '', location: Location, …}



const first = () => {
    console.log(this);
}

first(); //Window {window: Window, self: Window, document: document, name: '', location: Location, …}


const second = () => {
    "use strict";
    console.log(this);
}

second(); //Window {window: Window, self: Window, document: document, name: '', location: Location, …}


const sayHello = function() {

    "use strict";
    console.log(this); //undefined

    const third = () => {
        console.log(this); //undefined
    }

    third(); 

}

sayHello();



const sayHi = function() {

    console.log(this); //Window {window: Window, self: Window, document: document, name: '', location: Location, …}

    const third = () => {
        console.log(this); //Window {window: Window, self: Window, document: document, name: '', location: Location, …}
    }

    third(); 

}

sayHi();


const obj1 = {

    value: 42,
    arrowFunc : () => {
        console.log(this.value); //undefined // Here "this" points to global object
    }
       
};

obj1.arrowFunc();



const obj2 = {

    value: 42,
    regularFunc: function() {
      console.log(this.value); // Outputs 42
  
      const arrowFunc = () => {
        console.log(this.value); //42 // Inherits "this" from the regularFunc
      };
  
      arrowFunc();
    }

};
  
obj2.regularFunc();


const obj3 = {

    value: 42,
    regularFunc: function() {

      console.log(this.value); // Outputs 42
  
      const regularFunc1 = function() {
        console.log(this); //Window {window: Window, self: Window, document: document, name: '', location: Location, …}
        console.log(this.value); //undefined
        //Here "this" is not binded to the obj3
      };
  
      regularFunc1();

    }

};
  
obj3.regularFunc();

//Let us see the alternative solution,
const obj4 = {

    value: 42,
    regularFunc: function() {

      console.log(this.value); // Outputs 42
        
      const self = this;

      const regularFunc1 = function() {
        console.log(self); //{value: 42, regularFunc: ƒ}
        console.log(self.value); //42
      };
  
      regularFunc1();

    }

};
  
obj4.regularFunc();

//Another solution is simply using arrow function as inner function of the method regularFunc
  


//Constructor Invocation
function Person(name, age) {
    this.name = name;
    this.age = age;
}

let p1 = new Person("IP", 26);
console.log(p1);
//Here this refers to p1 object
