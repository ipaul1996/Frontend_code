//Rest Pattern & Rest Parameter
//The rest pattern looks exactly like the spread syntax. So it has the same syntax with the three dots 
//but it actually does the opposite of the spread operator. The rest pattern collect multiple elements 
//and condense them into an array i.e., it pack elements into an array.
//Generally, We use REST syntax in the LHS and spread operator in the RHS


//REST pattern works in the following way in the destructuring assignement
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); //1 2 [ 3, 4, 5 ]

const food = ["Coffe", "Chai", "Juice"];

const [x, y, ...otherFood] = ["Pizza", "Burger", "Biriyani", ...food];
//...otherFood is the REST element and it should be the last element. Here (...) represents the REST operator 
console.log(x, y, otherFood); //Pizza Burger [ 'Biriyani', 'Coffe', 'Chai', 'Juice' ]


const customerDetails = {

    cust1: {
        name: "IP",
        age: 26
    },
    cust2: {
        name: "Indrani",
        age: 24
    },
    cust3: {
        name: "Asmita",
        age: 21
    },
    cust4: {
        name: "Kaju",
        age: 20
    }

};

//We can use both REST syntax and spread operator at the same place
const {cust1: primeCustomer, ...remainingCustomers} = customerDetails;
console.log(primeCustomer);
console.log(remainingCustomers);
/*
{ name: 'IP', age: 26 }
{
  cust2: { name: 'Indrani', age: 24 },
  cust3: { name: 'Asmita', age: 21 },
  cust4: { name: 'Kaju', age: 20 }
}

*/



//REST pattern in function parameter: Hence it is called REST parameter
function add(...param) {  //Rest Parameter(Packing)

    let sum = 0;

    for(let i = 0; i < param.length; i++) {
        sum += param[i];
    }

    console.log(sum);
}

add(2, 3);
add(5, 9, 5);
add(4, 3, 5, 8, 10, 121);
add(410, 1, 2, 5, 6, 10, 125, 11);

const x1 = [1, 2, 3, 4];
add(...x1); //spread syntax(Unpacking)


function filterBy(type, ...args) {
    return args.filter(function (e) {
      return typeof e === type;
    });
}

const mixedData = [1, "Hello", true, null, 42, "World"];

const filteredNumbers = filterBy("number", ...mixedData);
console.log(filteredNumbers); // Output: [1, 42]

const filteredStrings = filterBy("string", ...mixedData);
console.log(filteredStrings); // Output: ["Hello", "World"]

const filteredBooleans = filterBy("boolean", ...mixedData);
console.log(filteredBooleans); // Output: [true]




function sum(...args) {
    return args
    .filter(function(el) {
        return typeof el === 'number';
    })
    .reduce(function(prev, curr) {
        return prev + curr;
    });
}


let result = sum(10, 'Hi', null, undefined, 20); 
console.log(result);  //30

