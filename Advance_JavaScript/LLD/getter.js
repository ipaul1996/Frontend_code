
let obj = {

    Name: 'IP',

    Age: 25,

    Gender: 'Male'
    
}

//How to access Name property value?

console.log(obj.Name); //'IP'

//Just suppose we don't want to access this Name property value directly. What can we do?

//We can define a method inside the object to get the Name property value. 

let obj1 = {

    Name: 'IP',

    Age: 25,

    Gender: 'Male',

    getName: function() {

        return this.Name;

    }  
    
}

console.log(obj1.getName());   //'IP'

//Here we are accessing the 'Name' property value as a method. 

//What if we want to access the 'Name' property value as a property value but not directly?

//For that we have getter method. We use get keyword.


let obj2 = {

    Name: 'IP',

    Age: 25,

    Gender: 'Male',

    get getName() {

        return this.Name;

    }  
    
}

console.log(obj2.getName);  //'IP'



