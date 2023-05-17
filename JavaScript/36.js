//Object.values()

//Object.values() allows us to return an array of own enumerable property’s values of an object.
//Point to be noted here that the for...in loop iterates properties in the prototype chain.

const person = {
    firstName: 'John',
    lastName: 'Doe'
};


const employee = Object.create(person, {
    job: {
        value: "JS Developer",
        enumerable: true
    },

    salary: {
        value: 85000,
        enumerable: true
    },

    stocks: {
        value: false,
        enumerable: false
    }
});

let values = Object.values(employee);
console.log(values); //['JS Developer', 85000]

let arr =[];
for(let x in employee) {
    arr.push(employee[x]);
}
console.log(arr); //['JS Developer', 85000, 'John', 'Doe']

