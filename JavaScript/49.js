//apply() method

//fn.apply(thisArg, [args]);
//The thisArg is the value of this provided for the call to the function fn.
// Its functionality is same as the call method but the only difference is that 
// how we can pass its arguments. We can only pass two arguments in it, 1st argument is the 
// object in which we want to use the object method and 2nd argument is the array of arguments 
// of the object method.



let obj1={
    firstName:"Indrajit",
    lastName:"Paul",
    printFullName:function(Hometown, Year) {
        console.log(`${this.firstName} ${this.lastName} lives in ${Hometown} since ${Year}`)
    }
}

let obj2={
    firstName:"Asmita",
    lastName:"Biswas",
}


obj1.printFullName.apply(obj2, ["Bangalore",2001]);
//Here we are using printFullName method of obj1 in obj2 using 'apply method'.


//Append one array in other 
let arr = [1, 2, 3];
let numbers = [4, 5, 6];

arr.push.apply(arr, numbers);

console.log(arr); //[1, 2, 3, 4, 5, 6]
