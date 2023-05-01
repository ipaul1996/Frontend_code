//object3 
//for...in loop

let details= {
    Name: "Indrajit Paul",
    Age: 25,
    Gender: "Male",
    City: "Kolkata",
    Ismarried: "false" 
}

for(let key in details) {
    console.log(key, details[key]);
}

//Here we can not use dot notation


//Inbuilt functions for objects
console.log(Object.keys(details));  //This prints all the keys in the form of an array
console.log(Object.values(details)); //This prints all the values in the form of an array