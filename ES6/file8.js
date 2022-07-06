//Rest parameter

//The rest parameter is introduced in ES6, which improves the ability to handle parameters. The rest parameter allows us to represent an indefinite number of arguments as an array. By using the rest parameter, a function can be called with any numnber of arguments. 

function printArray(...a) {
    console.log(a);
}


const user= {
    name:'Indrajit',
    age:25,
    city:'Kolkata'
};


printArray(5); //[ 5 ]
printArray(1,2,3) //[ 1, 2, 3 ]
printArray([4,5,6]); //[ [ 4, 5, 6 ] ]
printArray('masai'); //[ 'masai' ]
printArray(user); //[ { name: 'Indrajit', age: 25, city: 'Kolkata' } ]