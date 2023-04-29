console.log(Object);
console.log(typeof Object);
console.log(Object.prototype);

function Person(name, age, gender, state) {
    console.log(new.target);
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.state = state;
}

Person.prototype.greet = function() {
    return "Hi, I'm " + this.name + "!";
}

let p1 = new Person("IP", 26, "Male", "WB");
console.log(p1);

function hello() {
    console.log("Hello world!");
}

console.log(hello.prototype);
