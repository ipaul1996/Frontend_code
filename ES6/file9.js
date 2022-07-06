//Destructuring of nested object

let obj={
    fName: 'Indrajit',
    lName: 'Paul',
    address: {
        City: 'Kolkata',
        Pin: '700007',
        Street: {
            id: 234,
            name: 'RCC Lane'
        }
    }
};

let {fName,address:{City, Street:{id}}}=obj;

console.log(fName);
console.log(City);
console.log(id);