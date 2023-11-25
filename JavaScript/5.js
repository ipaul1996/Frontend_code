//object1

// object - Unordered collection of properties(key-value pairs)
// key --> Property name
// value --> Property value 

// Creating object with object literal notation

let details= {
    Name: "Indrajit Paul",
    Age: 25,
    Gender: "Male",
    City: "Kolkata",
    Ismarried: "false" 
}

// How can we access any property inside an object?
// Dot Notation
console.log(details.Name); // Indrajit Paul
console.log(details.Ismarried);  // false

// Bracket Notation
console.log(details["City"]); // Kolkata
console.log(details['Age']); // 25


// How to update any property value?
details.Name="IP";
details["Age"]=24;
console.log(details);

/*

{
  Name: 'IP',       
  Age: 24,
  Gender: 'Male',   
  City: 'Kolkata',  
  Ismarried: 'false'
}

*/

// How to add new property/key-value pair inside an object?
details.Interest="coding";

//We can add a property to an object with value as an array
details["Friends"]=["Ravinder","Aditya","Kaju"];

//We can also add a property to an object with value as another object.This is called nested object.
details.Marks= {
    Math:99,
    English:80,
    Coding:96
}

console.log(details);

/*

{
    Name: 'IP',
    Age: 24,
    City: 'Kolkata',
    Interest: 'coding',
    Friends: [ 'Ravinder', 'Aditya', 'Kaju' ],
    Marks: { Math: 99, English: 80, Coding: 96 }
  }

*/

//How to access the property of an object which is again inside another object?
console.log(details.Marks.Math); //99
console.log(details["Marks"]["Coding"]); //96

//How to delete any property from an object?
delete details.Ismarried;  //Here delete is a keyword
delete details["Gender"];
console.log(details);

/*

{
  Name: 'IP',
  Age: 24,
  City: 'Kolkata',
  Interest: 'coding',
  Friends: [ 'Ravinder', 'Aditya', 'Kaju' ],
  Marks: { Math: 99, English: 80, Coding: 96 }
}

*/

// Checking if a property exist
console.log("City" in details); // true // "in" is an operator
console.log("State" in details); // false

// We can also have properties having spaces in between. But it is not a good practise
let address = {
  State: "WB",
  City: "Kolkata",
  "Building No.": "22/2F"
}

console.log(address);

/*
{ State: 'WB', City: 'Kolkata', 'Building No.': '22/2F' }
*/

console.log(address["Building No."]); // 22/2F
// But we can not access the same with dot notation

