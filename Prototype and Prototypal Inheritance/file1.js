//console.log(Math.hasOwnProperty('lig'));

// let obj= {}
//     sayHello= function () {
//         return ("Hello!")
//     }
// // }

// console.log((sayHello.prototype));



// function Person () {
//     this.name = 'John',
//     this.age = 23
// }

// const person = new Person();

// // checking the prototype value
// console.log(Person.prototype);

// let arr=[];
// let str=""
// let x=2;
// let obj={};
// console.log(arr.__proto__.__proto__.__proto__);
// console.log(str.__proto__.__proto__);
// console.log(x.__proto__.__proto__.__proto__.__proto__);
// console.log(typeof(obj.__proto__));
// console.log(obj)

// let arr=[1,2,3];  //How we think array is created

// let arr1=new Array(1,2,3); //How javascript actually creates an array
// console.log(arr1)

// console.log(Array.prototype);

function Person(n) {
    this.Name=n;
     this.greet=function() {
         console.log("Hi!")
     }
}
Person.prototype.greet=function() {
         console.log("Hello!")
         }
let p1=new Person("Amit");
let p2=new Person("Aditya")
// console.log(p1);
// console.log(p2);
// p1.greet();
//p1.toString()
console.log(Array.prototype);
let arr=[1,2,3]
console.log(Math==Object.Math)
arr= Array(1,2,3);
let x=true;
console.log(x.__proto__);
