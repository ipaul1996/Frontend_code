//bind() method

/*
The bind() method allows an object to borrow a method from another object without copying.
func.bind(thisArg, arg1, ... argN)
thisArg - The value provided as this parameter for func.
arg1, ... argN (optional) - The value of arguments present inside func.
Unlike the call() and apply() methods, the bind() method doesn’t immediately execute the function. 
It just returns a new version of the function whose this sets to thisArg argument.
*/

let obj = {
    firstName:"Indrajit",
    lastName:"Paul",   
}

//Let us consider a function declaration
function printFullName(Hometown,Year) {
    console.log(`${this.firstName} ${this.lastName} lives in ${Hometown} since ${Year}`)
}
//For printFullName, 'this' is global object(window)



//bind returns a exact copy of the function printFullName and sets 'this' as obj.
let sayName = printFullName.bind(obj);  //sayName is exact copy of printFullName function with 'this' as obj

console.log(sayName);
console.log(obj);

sayName("Bengal", 2000);  //Invoking the sayName function with the required arguments


let runner = {
    name: 'Runner',
    run: function(speed) {
        console.log(this.name + ' runs at ' + speed + ' mph.');
    }
};


let flyer = {
    name: 'Flyer',
    fly: function(speed) {
        console.log(this.name + ' flies at ' + speed + ' mph.');
    }
};

let run = runner.run.bind(flyer, 20); 
run(); //Flyer runs at 20 mph.
run(); //Flyer runs at 20 mph.

let run1 = runner.run.bind(flyer);
run1(30); //Flyer runs at 30 mph.




//Important Note:
let user = {
    firstName: "Indrajit",
    age: 25,
    details: function() {
        console.log(`Hi, I am ${this.firstName}. My age is ${this.age}`);
    }
};

user.details(); //Hi, I am Indrajit. My age is 25
//When we call the details() method, this gets binded to user.

let func = user.details;
console.log(func);
/*
ƒ () {
    console.log(`Hi, I am ${this.firstName}. My age is ${this.age}`);
}

*/

func(); //Hi, I am undefined. My age is undefined
//Here this points to window object it is not binded to user object
let fun1 = user.details.bind(user);
fun1(); //Hi, I am Indrajit. My age is 25

