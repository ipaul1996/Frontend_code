//object7

//"this" magical word

//Typically, object methods need to access other properties of the object.
//Inside a method, the this value references the object that invokes the method. 
//Therefore, we can access a property using the this value as follows:

let person = {
    firstName:"Indrajit",
    lastName:"Paul",
    getFullName:function (age,sister) {
        console.log(`My name is ${person.firstName} ${this.lastName} and my age is ${age}.
My sister name is ${sister}`);
    }
}

person.getFullName(25,"Indrani Paul");