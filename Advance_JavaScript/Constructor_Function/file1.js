let details= {
    Name: "Indrajit Paul",
    Age: 25,
    Gender: "Male",
    City: "Kolkata",
    Ismarried: false 
}

//Let us create details object with the help of a regular function
function builder(name,age,gender,city,ismarried) {
    let details={};
    details.Name=name;
    details.Age=age;
    details.Gender=gender;
    details.City=city;
    details.Ismarried=ismarried;
    return details;
}

let person1=builder("Indrajit Paul",25,"Male","Kolkata", false); //This returns the object with name person1
console.log(person1);  //{Name: 'Indrajit Paul', Age: 25, Gender: 'Male', City: 'Kolkata', Ismarried: false}

let person2=builder("Asmita",21,"Feale","Kolkata", false); //This returns another object with name person2
console.log(person2); //{Name: 'Asmita', Age: 21, Gender: 'Feale', City: 'Kolkata', Ismarried: false}



//Let us create an object with the help of constructor function
function ConstructorDetails(name,age,gender,city,ismarried) {
    this.Name=name;
    this.Age=age;
    this.Gender=gender;
    this.City=city;
    this.Ismarried=ismarried;
}

let person3=new ConstructorDetails("Indrajit Paul",25,"Male","Kolkata", false);
console.log(person3); //O/P: ConstructorDetails {Name: 'Indrajit Paul', Age: 25, Gender: 'Male', City: 'Kolkata', Ismarried: false}

let person4=new ConstructorDetails("Asmita",21,"Female","Kolkata", false);
console.log(person4); //O/P: ConstructorDetails {Name: 'Asmita', Age: 21, Gender: 'Female', City: 'Kolkata', Ismarried: false}