//object5

let details= {
    Name: "Indrajit Paul",
    Age: 25,
    Gender: "Male",
    City: "Kolkata",
    Ismarried: "false",
    catFunc: function() {
        console.log("Meow!");
    } 
}


//We can also add object method to an object
details.calAge = function(birthyear) {
    return 2022 - birthyear
}

//Now if we want to call calAge method,
console.log(details.calAge(1996));


// We can add an object method in an object in following manners also

//Let us consider a function declaration,
function sayHello() {
    console.log("Hello World!")
}

//How to add this function as a method of details object
details.mySayHello = sayHello;
console.log(details);


//Let us consider a function expression,
let sayBye = function() {
    console.log("Good Bye")
}

//How to add this function as a method of details object
details.mySayBye = sayBye;
console.log(details);


