//ES6 Classes - Pre Class Video

//Let us consider a constructor function,

function Person1(n,a) {
    this.name=n;
    this.age=a;
}

//Let us add a property in the prototype property(Person.prototype) of Person constructor function,
Person1.prototype.city='Kolkata';
//We can also add method to the prototype property of Person.
const person1=new Person1('Kaju',20);
// person1 object inherits this city property from its prototype.


//We can do the same thing using JS classes

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

Person.prototype.sayHi = function() {
    console.log('Hi!');
}
const per1=new Person('AB',20);

console.log('per1:', per1);
//In ES6 classes we have a constructor and methods.
//Whatever methods we write inside a class that all get added to prototype property of Person i.e., 
//inside Person.prototype. So, per1 can access the method.
