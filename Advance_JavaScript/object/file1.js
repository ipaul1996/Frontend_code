let details= {
    Name: "Indrajit Paul",
    Age: 25,
    Gender: "Male",
    City: "Kolkata",
    Ismarried: "false" 
}

//How can we access any property inside an object?
//Dot Notation
console.log(details.Name);
console.log(details.Ismarried);

//Bracket Notation
console.log(details["City"]);
console.log(details["Age"]);


//How to update any property value?
details.Name="IP";
details["Age"]=24;
console.log(details);

//How to add new property/key-value pair inside an object?
details.Interest="coding";
//We can add a property to an object with value as array
details["Friends"]=["Ravinder","Aditya","Kaju"];
//We can also add a property to an object with value as another object.This is called nested object.
details.Marks= {
    Math:99,
    English:80,
    Coding:96
}
console.log(details);
//How to access the property of an object which is again inside another object?
console.log(details.Marks.Math);
console.log(details["Marks"]["Coding"]);

//How to delete any property from an object?
delete details.Ismarried;
delete details["Gender"];
console.log(details);
//Here delete is a keyword

