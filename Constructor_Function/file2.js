//Let us create an object with the help of constructor function
function ConstructorDetails(name,age,gender,city,ismarried) {
    this.Name=name;
    this.Age=age;
    this.Gender=gender;
    this.City=city;
    this.Ismarried=ismarried;
    this.Sister="Indrani";
    //return {cat:"Meow"}; // new operator will return it instead returning 'this' object
    //return 5;  // new operator will ignore it return 'this' object
}

let person1=new ConstructorDetails("Indrajit Paul",25,"Male","Kolkata", false);
let person2=new ConstructorDetails("Asmita",21,"Female","Kolkata", false);

//Let us add some properties to person1 and person2 object
person1.Nationality="Indian" //This proprty will only be added in person1
person2.Caste="Hindu";   //This proprty will only be added in person2

console.log(person1);
console.log(person2);




//Let us add some methods to person1 and person2 object
person1.sayHi=function() {
    console.log(`${this.Name}: Hi!`)
}

person2.sayHello=function() {
    console.log(`${this.Name}: Hello!`)
}

//Let us access these methods
person1.sayHi();
person2.sayHello();

//It should be noted that if we add any property/method to a particular object it only gets added to that not in other objects and not in constructor function. 
//If we do any changes in constructor function it will be refelected in all the objects that generated from it