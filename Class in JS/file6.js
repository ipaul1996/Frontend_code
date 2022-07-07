//Inheritance in ES6 classes
//How can we inherit the properties of one ES6 class to other?

class Person
{
    constructor(n,a) {
        this.name=n;
        this.age=a
    }

    showName() {
        console.log(this.name);
    }
}
let p1=new Person('Asmita',20)
console.log(p1);
console.log(Person.prototype);


class Student extends Person
{
    constructor(n,a,city) {
       super(n,a);
       this.city=city;
    }
}

let p2=new Student('IP',25,'Kolkata');
console.log(p2);