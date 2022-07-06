const user= {
    name:'Indrajit',
    age:25,
    city:'Kolkata'
};

// function printUser(u) {
//     console.log(u.name,u.age,u.city);
// }

//printUser(user); //Indrajit 25 Kolkata

function printUser({name,age,city}) {
    console.log(name,age,city);
}

printUser(user); //Indrajit 25 Kolkata
