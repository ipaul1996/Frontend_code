//object2
//Difference between Dot and Bracket Notation

let details= {
    Name: "Indrajit Paul",
    Age: 25,
    Gender: "Male",
    City: "Kolkata",
    Ismarried: "false" 
}


//Bracket Notation
console.log(details["Name"]); //o/p: Indrajit Paul
let x="Name";
console.log(details[x]);    //o/p: Indrajit Paul

//In both the cases above output is same. In bracket notation if you want to access 
//a property you can either directly use property name i.e., key or you can store the key 
//in another variable and use it.



//Dot Notation
console.log(details.Age); //o/p: 25
let y="Age";
console.log(details.y);   //o/p: undefined

//In case of dot notation you can not store a key in another variable and use it to access 
//the property 


