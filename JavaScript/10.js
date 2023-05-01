//object6

let details= {
    Name: "Indrajit Paul",
    Age: 25,
    Gender: "Male",
    City: "Kolkata",
    Ismarried: "false",
}


//We can also add object method to an object using bracket notation
details["calAge"]= function(birthyear) {
    return 2022 - birthyear
}


//We can access any object method using bracket notation also
console.log(details["calAge"](1996));


//object method shorthand

let person = {
    firstName: 'John',
    lastName: 'Doe',
    greet() {
        console.log('Hello, World!');
    }
};

person.greet();