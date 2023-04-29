//We can use any regular function as method of different objects using 'call method'
//call method can be used to both function declarations and function expressions
function calAge(birthyear) {
   console.log(`${this.firstName} ${this.lastName}'s age is ${2022-birthyear}`);
}
//For calAge, 'this' is global object(window)


let obj1={
    firstName:"Indrajit",
    lastName:"Paul",
};

let obj2={
    firstName:"Asmita",
    lastName:"Biswas",
}

calAge.call(obj1,1996); //Here call sets 'this' as obj1
calAge.call(obj2,2001); //Here call sets 'this' as obj2