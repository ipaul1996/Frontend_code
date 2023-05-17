//Optional chaining operator(?.)

/*
If one of the references in the chain is null or undefined, the optional chaining operator (?.) will 
short circuit and return undefined.
objectName ?. propertyName
objectName ?. [expression]

The ?. operator is placed between the object and the property name, and it checks if the object 
is null or undefined before trying to access the property. If the object is null or undefined, 
the expression evaluates to undefined without throwing an error.

objName?.prop1?.prop2?.prop3

Here, the operator checks each property in the chain to ensure that it exists before trying to access 
the next property. If any of the properties in the chain are null or undefined, the expression evaluates 
to undefined without throwing an error.


*/


const user = {
    id: 1,
    name: "John Doe",
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA"
    }
};
  
const city = user.address?.city;
console.log(city); // Output: "Anytown"


const obj = {
    items: [
      { name: "Item 1", price: 10 },
      { name: "Item 2", price: 20 },
      { name: "Item 3", price: 30 }
    ]
  };
  
  const index = 1;
  
  const itemName = obj?.items?.[index]?.name;
  
  console.log(itemName); // Output: "Item 2"
  
  


const data = {
users: [
    {
    id: 1,
    name: "John",
    age: 25,
    email: "john@example.com",
    address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA"
    }
    },
    {
    id: 2,
    name: "Jane",
    age: 30,
    email: "jane@example.com"
    }
]
};
  
const userAge = data?.users?.[0]?.age;
const userZipCode = data?.users?.[0]?.address?.zipCode;

console.log(userAge); // Output: 25
console.log(userZipCode); // Output: undefined


//Using optional chaining opertor with nullish colessing operator
const data1 = {
    user: {
      name: 'John',
      age: 30
    }
  };
  
  const userName = data1?.user?.name ?? 'Unknown';
  const userzipCode = data1?.user?.address?.zipCode ?? '00000';
  
  console.log(userName); // Output: 'John'
  console.log(userzipCode); // Output: '00000'
  
