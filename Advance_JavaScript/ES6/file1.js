//Arrow Functions

//Function Declaration
function test () {
    console.log('Hello World!');
}

//Function Expression
test = function () {
    console.log('Hello World!');
}

//Similar function can be written using arrow functions
test= () => {
    console.log('Hello World!');
}

//Let us consider an array,
let arr=[1,2,3,4,5];

arr.forEach(function(el) {
    console.log(el*2);
});


//Using arrow function
arr.forEach((el) => {
    console.log(el*2);
});

//Arrow functions do not have their own this keyword property
var myObj1 = {
    i:10,
    c: function () {
        console.log(this.i,this);
    }
}
myObj1.c(); //10 { i: 10, c: [Function: c] } ---> this is pointing to myObj

var myObj2 = {
    i:10,
    c: () => {
        console.log(this.i,this);
    }
}
myObj2.c(); //undeifined window object