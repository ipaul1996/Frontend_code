//Define Multiple properties - Object.defineProperties()

const car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2021
};
  
Object.defineProperties(car, {
    age: {
      get: function() {
        return new Date().getFullYear() - this.year;
      },
      enumerable: true,
      configurable: false
    },
    description: {
      get: function() {
        return `This is a ${this.make} ${this.model} from ${this.year}.`;
      },
      set: function(value) {
        const parts = value.split(' ');
        this.make = parts[0];
        this.model = parts[1];
        this.year = parseInt(parts[2]);
      },
      enumerable: true,
      configurable: true
    },
    color: {
      value: 'red',
      writable: true,
      enumerable: false,
      configurable: false
    },
    model: {
      value: 'Corolla',
      writable: false,
      enumerable: true,
      configurable: false
    }
});
  
console.log(car.age); // Output: 2
console.log(car.description); // Output: This is a Toyota Corolla from 2021.
console.log(car.color); // Output: red
console.log(car.model); // Output: Corolla

car.description = 'Honda Civic 2018';
console.log(car.description); // Output: This is a Honda Corolla from 2018.
console.log(car.make); // Output: Honda
console.log(car.model); // Output: Corolla (unchanged, as it is a non-writable property)
console.log(car.year); // Output: 2018
  
car.color = 'blue';
console.log(car.color); // Output: blue

for (const key in car) {
    console.log(key); // Output: make, model, year, age, description
}

delete car.color; // fails silently, configurable is false
console.log(car.color); //blue

delete car.model; // fails silently, configurable is false and property is non-configurable
console.log(car.model); //Corolla

let descriptor = Object.getOwnPropertyDescriptor(car, "color");
console.log(descriptor);

/*

{value: 'blue', writable: true, enumerable: false, configurable: false}
configurable: false
enumerable: false
value: "blue"
writable: true
[[Prototype]]: Object

*/
  
let descriptor1 = Object.getOwnPropertyDescriptor(car, "description");
console.log(descriptor1);

/*

{enumerable: true, configurable: true, get: ƒ, set: ƒ}
configurable: true
enumerable: true
get: ƒ ()
set: ƒ (value)
[[Prototype]]: Object

*/

let descriptors = Object.getOwnPropertyDescriptors(car);
console.log(descriptors);

/*

{make: {…}, model: {…}, year: {…}, age: {…}, description: {…}, …}
age: {set: undefined, enumerable: true, configurable: false, get: ƒ}
color: {value: 'blue', writable: true, enumerable: false, configurable: false}
description: {enumerable: true, configurable: true, get: ƒ, set: ƒ}
make: {value: 'Honda', writable: true, enumerable: true, configurable: true}
model: {value: 'Corolla', writable: false, enumerable: true, configurable: false}
year: {value: 2018, writable: true, enumerable: true, configurable: true}
[[Prototype]]: Object

*/