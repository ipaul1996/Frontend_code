let obj={
    firstName:"Indrajit",
    lastName:"Paul",   
}

//Let us consider a function declaration
function printFullName(Hometown,Year) {
    console.log(`${this.firstName} ${this.lastName} lives in ${Hometown} since ${Year}`)
}
//For printFullName, 'this' is global object(window)



//bind returns a exact copy of the function printFullName and sets 'this' as obj.
let sayName=printFullName.bind(obj);  //sayName is exact copy of printFullName function with 'this' as obj

sayName("Bengal",2000);  //Invoking the sayName function with the required arguments

