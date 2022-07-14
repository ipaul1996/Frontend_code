// Arrow function
const sum = (a, b) => a + b
console.log(sum(2, 6)) // prints 8

//Default parameters
function print(a = 5) {
    console.log(a)
   }
   print() // prints 5
   print(22) // prints 22


//Multiline string
console.log(`
This is a
multiline string
`)

//String includes()
console.log('apple'.includes('pl')) // prints true
console.log('apple'.includes('tt')) // prints false


//String startsWith()
console.log('apple'.startsWith('ap')) // prints true
console.log('apple'.startsWith('bb')) // prints
false


//String repeat()
console.log('ab'.repeat(3)) // prints "ababab"


//object function assignement
const obj = {
    a: 5,
    myFunc() {
    console.log('b')
    }
   }
   obj.myFunc() // prints "b"


//Object.assign()
const obj1 = { a: 1 }
const obj2 = { b: 2 }
const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3) // { a: 1, b: 2 }

//Object.entries()
const objE = {
    frstName: 'Vipul',
    lastName: 'Rawat',
    age: 22,
    country: 'India',
   };
   const entries = Object.entries(objE);
   /* returns an array of [key, value]
    pairs of the object passed
   */
   console.log(entries);
   /* prints
    [
    ['frstName', 'Vipul'],
    ['lastName', 'Rawat'],
    ['age', 22],
    ['country', 'India']
    ];
   */


//spread operator
const a = {
    frstName: "Barry",
    lastName: "Manilow",
   }
const b = {
    ...a,
    lastName: "White",
    canSing: true,
   }
   console.log(a) // {frstName: "Barry", lastName:
                        //"Manilow"}
   console.log(b) // {frstName: "Barry", lastName:
                        //"White", canSing: true}
   // great for modifying objects without side
   //effects/affecting the original


//Destructuring Nested Objects
const Person = {
 name: "John Snow",
 age: 29,
 sex: "male",
 materialStatus: "single",
 address: {
 country: "Westeros",
 state: "The Crownlands",
 city: "Kings Landing",
 pinCode: "500014",
 },
};
const { address : { state, pinCode }, name } =
Person;
console.log(name, state, pinCode) // John Snow
                                    //The Crownlands 500014
console.log(city) // ReferenceError

//Exponent operator
const byte = 2 ** 8
// Same as: Math.pow(2, 8)

//Promises with fnally
promise
.then((result) => {  })
.catch((error) => {  })
.fnally(() => { // logic independent of
success/error })
// The handler is called when the promise is
//fulflled or rejected.
   