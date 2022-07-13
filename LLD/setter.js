let obj = {

    Name: 'IP',

    Age: 25,

    Gender: 'Male'
    
}

//How to change 'Name' property value?

obj.Name = 'Asmita'; 

//Just suppose we don't want to change this Name property value directly. What can we do?

//We can define a method inside the object to change the Name property value.

let obj1 = {

    Name: 'IP',

    Age: 25,

    Gender: 'Male',

    setName: function(n) {

        return this.Name =  n;

    }
    
}

console.log(obj1.setName('Asmita'));

console.log('obj1:', obj1);



