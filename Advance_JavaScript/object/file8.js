//"this" magical word
"use strict";
let person = {
    firstName:"Indrajit",
    lastName:"Paul",
    getFullName:function (age,sister) {
        console.log(`My name is ${person.firstName} ${this.lastName} and my age is ${age}.
My sister name is ${sister}`);
    }
}

person.getFullName(25,"Indrani Paul");




