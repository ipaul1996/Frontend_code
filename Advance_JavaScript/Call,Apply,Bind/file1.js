//Call Method in JavaScript

let obj1={
    firstName:"Indrajit",
    lastName:"Paul",
    printFullName:function(Hometown,Year) {
        console.log(`${this.firstName} ${this.lastName} lives in ${Hometown} since ${Year}`)
    }
}

//Let us call printFullName Method
obj1.printFullName("Kolkata",1996);


let obj2={
    firstName:"Asmita",
    lastName:"Biswas",
}


//Call Method
//The owner object of printFullName method is obj1 i.e., 'this' refers to obj1.
//Therefore the method can access all the properties of obj1 during the execution. 
//But, suppose, if we want to execute the printFullName method with the properties of obj2. 
//Then what can we do?
//1. We can add the same method in obj2.
//2. We can use a pre-defined javascript method,'call method'.call method sets its 
//first argument(Here, obj2) as 'this' of the method(Here, printFullName method). 
//Therefore it can access all the properties of obj2.In call method, after the 1st argument 
//all the arguments are the arguments of the method(Here printFullName) listed by commas.
//When we use a method of one object(Here obj1) with other object(Here obj2) it is called 
//function borrowing.

obj1.printFullName.call(obj2,"Bangalore",2019)
console.log(obj2);






