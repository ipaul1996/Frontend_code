// object3 
// for...in loop

let details= {
    Name: "Indrajit Paul",
    Age: 25,
    Gender: "Male",
    City: "Kolkata",
    Ismarried: "false" 
}

// How to iterate over the properties of an object?
for(let key in details) {
    console.log(key, details[key]);
}
// Here we can not use dot notation

// Inbuilt functions for objects
console.log(Object.keys(details));  // This prints all the keys in the form of an array
console.log(Object.values(details)); // This prints all the values in the form of an array
console.log(Object.entries(details)); // This prints all the key-value pairs in the form of an array

/*

Output:

[ 'Name', 'Age', 'Gender', 'City', 'Ismarried' ]
[ 'Indrajit Paul', 25, 'Male', 'Kolkata', 'false' ]
[
  [ 'Name', 'Indrajit Paul' ],
  [ 'Age', 25 ],
  [ 'Gender', 'Male' ],
  [ 'City', 'Kolkata' ],
  [ 'Ismarried', 'false' ]
]

*/

