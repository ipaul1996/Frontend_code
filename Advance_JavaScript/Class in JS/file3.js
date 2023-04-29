//Classes are template/blueprint for creating objects
//Syntax:
class className {
    //constructor
    //Any Method
}

class Person {
    constructor(name,city) {
        this.Name=name;
        this.City=city;
    }
    welcome() {                         //This is a method inside a class
        return `${this.Name} is from ${this.City}`;  
    }
}

let person1=new Person('Indrajit', 'Kolkata');
let person2=new Person('Indrani','Bangalore');
console.log(person1);
console.log(person2);
//Here two objects are created with the help of class and new keyword

//Let us execute the method present inside the class for both the objects;
console.log(person1.welcome());  //Indrajit is from Kolkata
console.log(person2.welcome());  //Indrani is from Bangalore


class Rectangle {
    constructor(l,b) {
        this.length=l;
        this.breadth=b;
    }
    area() {
        return this.length * this.breadth;
    }
    totalPrice(price) {
        return  (this.length * this.breadth) * price;
    }
}

let rect1=new Rectangle(4,3);
let rect2=new Rectangle(5,2);
console.log(rect1.area()); //12
console.log(rect2.area()); //10

console.log(rect1.totalPrice(10)); //Here we are passing argument to the method //120
console.log(rect2.totalPrice(8));  //80



