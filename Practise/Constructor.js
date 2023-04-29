function Person(name, age, gender, state) {
    console.log(new.target);
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.state = state;
}

// let p1 = new Person("IP", 26, "Male", "WB");
// console.log(p1);

// p1.sayHi = function() {
//     console.log(`${this.name} Hi1!`);
// }

// p1.sayHi();
// console.log(p1 instanceof Person);

let p2 = new Person("AB", 21, "Female", "WB");
// console.log(p2);
console.log(window);
console.log({} === true);

