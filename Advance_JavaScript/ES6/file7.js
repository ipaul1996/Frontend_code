//Spread Operator ---> Merging

//ES6 introduced a new operator refered to as a spread operator which consists of three dots. It allows an iterable to expand in places whre more than zero arguments are expected. It gives us the privilage to obatain the parameters from any array.
let colors1=['red','teal','bisque'];
let colors2=[...colors1,'black','white','yellow'];
console.log(colors2); //[ 'red', 'teal', 'bisque', 'black', 'white', 'yellow' ]

let arr=[...colors2,...colors1]
console.log(arr);    //['red','teal','bisque','black','white', 'yellow','red','teal','bisque']

const user1= {
    name:'Indrajit'
}

const city= {
    city:'Kolkata'
}

const details={...user1,...city};
console.log(details); //{ name: 'Indrajit', city: 'Kolkata' }

//Spread operator in object destructuring
const user= {
    name:'Indrajit',
    age:25,
    city:'Kolkata'
};

const {name,...x}=user;
console.log(x); //{ age: 25, city: 'Kolkata' }


//Spread operator in array destructuring
const [a,...y] = ["Table", "Chair", "Fan", "Rug"];
console.log(y); //[ 'Chair', 'Fan', 'Rug' ]

//Spread operator in string destructuring
const [ u,...z ]='Amit';
console.log(z); //[ 'm', 'i', 't' ]