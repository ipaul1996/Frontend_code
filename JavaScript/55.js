//Array Methods - 1


//length property 

//A dense array is an array where its elements have contiguous indexes starting at zero.
//For dense arrays, we can use the length property to get the actual number of elements 
//present in the array. length = highest_index + 1

let colors = ['red', 'green', 'blue'];
console.log(colors.length); // 3

colors = [];
console.log(colors.length); //0

//A sparse array is an array whose elements don’t have contiguous indexes starting at zero.
//For example, the [10,, 20, 30] is a sparse array because the indexes of its elements 
//are 0, 2, and 3. In a sparse array, the length property doesn’t indicate the actual 
//number of elements. Here also, length = highest_index + 1

let numbers = [10, , 20, 30];
console.log(numbers.length); // 4

numbers[10] = 500;
console.log(numbers.length); //11
console.log(numbers); //[10, empty, 20, 30, empty × 6, 500]



const fruits = ['Apple', 'Orange', 'Strawberry'];
fruits.length = 0; //empty an array by changing its length
console.log(fruits); // []

const friends = ["Indrani", "Amit", "Kaju"];
friends.length = 2; //Removing elements by changing its length
console.log(friends); //["Indrani", "Amit"]

const animals = ["cow", "dog", "cat"];
animals.length = 10; //Make array sparse by changing its length
console.log(animals); //['cow', 'dog', 'cat', empty × 7]


//push(el) method
//It adds elements(one or more) at the end of the array and returns the new length.
//Under the hood, the push() method uses the length property to determine the position 
//for inserting the elements.
//It also increases the value of length property of the array:
//number of elements added = value of the length increased
//T.C. --> O(1)
let a1 = [10, 20, 30];
const r1 = a1.push(40);
console.log(r1); //4
console.log(a1); //[ 10, 20, 30, 40 ]

const r2 = a1.push(60, 80);
console.log(r2); //6
console.log(a1); //[ 10, 20, 30, 40, 60, 80 ]

const r3 = a1.push();
console.log(r3); //6 //returning the old length
console.log(a1); //[ 10, 20, 30, 40, 60, 80 ]

let col1 = ['red', 'green', 'blue'];
let cmyk = ['cyan', 'magenta', 'yellow', 'back'];

for (const x of cmyk) {
  col1.push(x);
}

console.log(col1); //['red', 'green','blue', 'cyan', 'magenta', 'yellow', 'back']



//pop() method
//It removes the last element from an array and returns the removed element.
//It also decreases the value of the length property of the array by 1.
//T.C. --> O(1)

const a2 = [10, 20, 30];
const last = a2.pop();

console.log(last); // 30
console.log(a2.length); // 2

a2.length = 0; //making the array empty
console.log(a2); //[]

const el2 = a2.pop();
console.log(el2); //undefined

//Unshift(el) method
//It adds one or more elements to the beginning of an array and returns the new array’s length.
//When an element is added to the beginning of an array, all existing elements have to be 
//shifted one position to the right to make room for the new element. This means that the 
//time it takes to add an element increases as the size of the array increases.
//T.C ---> O(N)

let a3 = [30, 40];
const len = a3.unshift(20);

console.log(len); //3
console.log(a3); //[ 20, 30, 40 ]
console.log({len}); //{ len: 3 }
console.log({a3}); //{ a3: [ 20, 30, 40 ] }

const len1 = a3.unshift(0, 5, 10);
console.log(len1); //6
console.log(a3); //[0, 5, 10, 20, 30, 40]


let days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
let weekends = ['Sat', 'Sun'];

for (const weekend of weekends) {
  days.unshift(weekend);
}

console.log(days); //['Sun', 'Sat', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri']




//shift() method
//It removes the first element from an array and returns that element. 
//If the array is empty, the shift() method returns undefined. Otherwise, it returns the
//removed element. Also, the shift() method reduces the length property of the array by one.
//Here all remaining elements in the array have to be shifted one position to the 
//left after the first element is removed. Therefore, the time it takes to remove 
//the first element increases as the size of the array increases.
//T.C. ---> O(N)

const a4 = [10, 20, 30];
const number = a4.shift();

console.log({ number }); //{ number: 10 }
console.log({ a4 }); //{ a4: [ 20, 30 ] }
console.log({ length: a4.length }); //{ length: 2 }


const a5 = [10, 20, 30];
let num;
while ((num = a5.shift()) != undefined) {
  console.log(num);
}

/*
10
20
30
*/


//concat
//arr.concat(value1, value2, ..., valueN)
//The concat() method takes in an arbitrary number of arrays and/or values as arguments.
//Returns a newly created array after merging all arrays/values passed in the argument.
//It does not affect the original arrays
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);

console.log(myChildren); //['Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus']


const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren1 = arr1.concat(arr2, arr3); //['Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus']

console.log(myChildren1); //['Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus', 'Robin', 'Morgan']

const arr4 = ["Emil", "Tobias", "Linus"];
const myChildren4 = arr4.concat("Peter"); 
console.log(myChildren4); //['Emil', 'Tobias', 'Linus', 'Peter']


var randomList = [1, 2, 3];
var randomNestedList = [
  [4, 5],
  [6, 7],
];

var combined = randomList.concat(randomNestedList);
console.log(combined); // [ 1, 2, 3, [ 4, 5 ], [ 6, 7 ] ]

// changing the value 1 to 0
randomList[0] = 0;
console.log(randomList); // [ 0, 2, 3 ]

// changes not reflected in concatenated array
console.log(combined); // [ 1, 2, 3, [ 4, 5 ], [ 6, 7 ] ]

// modifying nested list (adding 6 to first element)
randomNestedList[0].push(6);
console.log(randomNestedList); // [ [ 4, 5, 6 ], [ 6, 7 ] ]

// changes are reflected in concatenated array
// since it is a reference to the object
console.log(combined); // [ 1, 2, 3, [ 4, 5, 6 ], [ 6, 7 ] ]

combined = combined.concat(101, true);
console.log(combined); //[ 1, 2, 3, [ 4, 5, 6 ], [ 6, 7 ], 101, true ]
console.log(typeof combined[combined.length - 1]); //boolean



//splice()
//The splice() method modifies an array (adds, removes or replaces elements).
//arr.splice(start, deleteCount, item1, ..., itemN)
//start - The index from where the array is changed. 
//deleteCount (optional) - The number of items to remove from start.
//item1, ..., itemN (optional) - The elements to add to the start index. If not specified, 
//splice() will only remove elements from the array.

let lang = ["JavaScript", "Python", "Java", "Lua"];

// replacing "Java" & "Lua" with "C" & "C++"
let removed = lang.splice(2, 2, "C", "C++");
console.log(removed); // [ 'Java', 'Lua' ]
console.log(lang); // [ 'JavaScript', 'Python', 'C', 'C++' ]

// adding elements without deleting existing elements
let removed1 = lang.splice(1, 0, "Java", "Lua");
console.log(removed1); // []
console.log(lang); // [ 'JavaScript', 'Java', 'Lua', 'Python', 'C', 'C++' ]

// removing 3 elements without adding any elements
let removed2 = lang.splice(2, 3);
console.log(removed2); // [ 'Lua', 'Python', 'C' ]
console.log(lang); // [ 'JavaScript', 'Java', 'C++' ]

//If start > array.length, splice() does not delete anything and starts appending 
//arguments to the end of the array.
//If start < 0, the index is counted from backward (array.length + start). 
//For example, -1 is the last element.
//If array.length + start < 0, it will begin from index 0.

let lang1 = ["JavaScript", "Python", "Java", "Lua"];

// does not removes, only appends to the end
let remo = lang1.splice(5, 2, "C++");
console.log(remo); // []
console.log(lang1); // ["JavaScript", "Python", "Java", "Lua", "C++"]

// remove last element and add 3 more elements
let remo1 = lang1.splice(-1, 1, "Swift", "Scala", "Go");
console.log(remo1); // [ "C++" ]
console.log(lang1); // ["JavaScript", "Python", "Java", "Lua", "Swift", "Scala", "Go"]


//If deleteCount is omitted or is greater than the number of elements left in the array, 
//it deletes all elements from start to end of the array.
//If deleteCount is 0 or negative, no elements are removed. 
//But, at least one new element should be specified.

let language = ["JavaScript", "Python", "Java", "Lua"];

// removes everything from start
let remove = language.splice(1);
console.log(remove); // [ "Python", "Java", "Lua" ]
console.log(language); // [ "JavaScript" ]

// remove none & add 3 more element
let remove1 = language.splice(1, -2, "Swift", "Scala", "Go");
console.log(remove1); // [ ]
console.log(language); // [ "JavaScript", "Swift", "Scala", "Go" ]




//slice()
//The slice() method returns a shallow copy of a portion of an array into a new array object.
//arr.slice(start, end)
//start (optional) - Starting index of the selection. If not provided, the selection starts 
//at start 0.
//end (optional) - Ending index of the selection (exclusive). If not provided, 
//the selection ends at the index of the last element.
//Returns a new array containing the extracted elements.

let numbers5 = [2, 3, 5, 7, 11, 13, 17];

// create another array by slicing numbers from index 3 to 5
let newArray = numbers5.slice(3, 6);
console.log(newArray); // [ 7, 11, 13 ]

numbers5[3] = -8;
console.log(numbers5); //[2, 3, 5, -8, 11, 13, 17]
console.log(newArray); //[7, 11, 13]
//since primitive values are passed by value (i.e., copied by their actual value), 
//the new array created by slice() will contain exact copies of the primitive values 
//from the original array. Therefore, any changes made to the values in the new array 
//will not affect the corresponding values in the original array, and vice versa, 
//because they are separate values stored in different memory locations.


let newArray1 = numbers5.slice(0, -2);
console.log(newArray1); //[2, 3, 5, -8, 11]

let human = {
    name: "David",
    age: 23,
};

numbers5.push(human);

let newArray2 = numbers5.slice();
human.name = "Indrajit";
console.log(newArray2[7]); //{name: 'Indrajit', age: 23}




//indexOf()
//The indexOf() method returns the first index of occurance of an array element, 
//or -1 if it is not found.
//arr.indexOf(searchElement, fromIndex)
//searchElement - The element to locate in the array.
//fromIndex (optional) - The index to start the search at. By default, it is 0.
//Returns the first index of the element in the array if it is present at least once.
//Returns -1 if the element is not found in the array.
//indexOf() compares searchElement to elements of the Array using strict equality 
//(similar to triple-equals operator or ===).

let priceList = [10, 8, 2, 31, 10, 1, 65];

console.log(priceList.indexOf(10)); //0
console.log(priceList.indexOf(8, 1)); //1
console.log(priceList.indexOf(10, 2)); //4
console.log(priceList.indexOf(10, 5)); //-1 //Not found
console.log(priceList.indexOf(10, -7)); //0
console.log(priceList.indexOf(10, -4)); //4




//lastIndexOf()

//The lastIndexOf() method returns the index of the last occurrence 
//of a specified element in the array.

//arr.lastIndexOf(searchElement, fromIndex)

//fromIndex (optional) - The index to start searching backwards. 
//By default it is array.length - 1.
//the last index of the element in the array if it is present at least once.
//-1 if the element is not found in the array.
//lastIndexOf() compares searchElement to elements of the Array using strict equality 
//(similar to triple-equals operator or ===).

console.log(priceList.lastIndexOf(10)); //4
console.log(priceList.lastIndexOf(8, 1)); //1
console.log(priceList.lastIndexOf(10, 2)); //0
console.log(priceList.lastIndexOf(10, 5)); //4 
console.log(priceList.lastIndexOf(10, -7)); //0
console.log(priceList.lastIndexOf(10, -4)); //0




//reverse()
let languages = ["JavaScript", "Python", "C++", "Java", "Lua"];
let reversedArray = languages.reverse();
console.log(reversedArray); //['Lua', 'Java', 'C++', 'Python', 'JavaScript']
console.log(languages); //['Lua', 'Java', 'C++', 'Python', 'JavaScript']
//So it changes the original array




//fill()
//The fill() method returns an array by filling all elements with a specified value.
//arr.fill(value, start, end)
//start(optional) - starting index(default 0), ending index(excluded, default - Array.length)

let prices = [651, 41, 4, 3, 6];
console.log(prices); //[651, 41, 4, 3, 6]
prices.fill(0);
console.log(prices); //[0, 0, 0, 0, 0]
prices.fill(2, 1, 3);
console.log(prices); //[0, 2, 2, 0, 0]
prices.fill(15, 7, 8); //Invalid indexes
console.log(prices); //[0, 2, 2, 0, 0] //No Change
prices.fill(15, NaN, NaN); //Invalid indexes
console.log(prices); //[0, 2, 2, 0, 0] //No Change
prices.fill(15, -2); //negative index
//fills the elements from the index -2 (counting from the end of the array) to the end of 
//the array with the value 15. -1 refers to the last element of the array, -2 refers to the second-to-last element, 
//and so on.
console.log(prices); //[0, 2, 2, 15, 15]



//join()
//The join() method returns a new string by concatenating all of the elements in an array, 
//separated by a specified separator.
//arr.join(separator) //optional parameter -> By default it is comma

//Elements like undefined, null, or empty array have an empty string representation.
//join() does not modify the original array

let message = ["JavaScript", "is", "fun."];

let str1 = message.join();
console.log(str1); //JavaScript,is,fun.

let str2 = message.join(" ");
console.log(str2); //JavaScript is fun.

let str3 = message.join(" | ")
console.log(str3); //JavaScript | is | fun.




//toString()
//The toString() method returns a string formed by the elements of the given array.
//The toString() method does not change the original array.
//Elements like undefined, null, or empty array, have an empty string representation.

let items = ["JavaScript", 1, "a", 3];

let itemsString = items.toString();
console.log(itemsString); //JavaScript,1,a,3

let nestedArray = [1, 2, 4, ["Apple", 5]];

let resultingArray = nestedArray.toString();
// returns string representation of the nested array by flattening the array 
console.log(resultingArray); //1,2,4,Apple,5




//every()
//The every() method checks if all the array elements pass the given test function.

//arr.every(callback(element, index, arr), thisArg)

//callback() - the function to test for each array element. It takes in:
//element - the current element being passed from the array.
//index - It is the index  of the currentElement.
//arr - It  is the array that the every() method was called upon.
//thisArg (optional) - value to use as this when executing callback(). 
//By default, it is undefined.
//true - if all the array elements pass the given test function (callback returns a truthy value).
//false - if any array element fails the given test function.
//every() does not change the original array.
//every() does not execute the callback() function for an empty array. In case we do pass 
//an empty array, it always returns true.
//the every() method executes the callback() function on every element in the array until 
//it finds the one that causes the callback() return a falsy value.

const nums = [2, 4, 6, 7, 8];

let test = nums.every(function(el) {
    return el%2 == 0;
});

console.log(test); //false


let myNum = [1, 3, 5];

let range = {
    min: 0,
    max: 10
};

let isInRange = myNum.every(function (e) {
    return e >= this.min && e <= this.max;
}, range);

console.log(isInRange); //true




//some()
//The some() method tests whether any of the array elements pass the given test function.

//arr.some(callback(element, index, array), thisArg)

//callback - The function to test for each array element. It takes in:
//element - The current element being passed from the array.
//index - It is the index  of the currentElement.
//arr - It  is the array that the every() method was called upon.
//thisArg (optional) - Value to use as this when executing callback. By default, it is undefined.
//Returns true if an array element passes the given test function (callback returns a truthy 
//value). Otherwise, it returns false.
//some() doesn't change the original array.
//some() doesn't execute callback for array elements without values.

const nums1 = [2, 4, 6, 7, 8];

let test1 = nums1.some(function(el) {
    return el%2 == 0;
});

console.log(test1); //true



let marks = [4, 5, 7, 9, 10, 2];

const range1 = {
    min: 8,
    max: 10
};

let result = marks.some(function (e) {
    return e >= this.min && e <= this.max;
}, range1);

console.log(result); //true





//sort() method
//The sort() method allows you to sort elements of an array in place. Besides returning the 
//sorted array, the sort() method changes the positions of the elements in the original array.
//By default, it sorts an array in ascending order.
//The sort() method casts elements to strings(if it's not already one) and 
//compares the strings based on Unicode code point values to determine the orders.

let ar = ["Amit", "Zima", "Sanatan", "Kunal", "Prateek"];
let ar1 = ar.sort();
console.log(ar); //['Amit', 'Kunal', 'Prateek', 'Sanatan', 'Zima']
console.log(ar1); //['Amit', 'Kunal', 'Prateek', 'Sanatan', 'Zima']
let ar2 = ar1.reverse();
console.log(ar); //['Zima', 'Sanatan', 'Prateek', 'Kunal', 'Amit']
console.log(ar2); //['Zima', 'Sanatan', 'Prateek', 'Kunal', 'Amit']

let arNum = [1, 10, 20, 5, 3];
let arNum1 = arNum.sort();
console.log(arNum); // [1, 10, 20, 3, 5]
console.log(arNum1); // [1, 10, 20, 3, 5]
//We didn't expect this. Here, the numbers are first converted to correspoding string
//representaions then get sorted in ascending order according Unicode code point values.

/*
To fix it,
arr.sort(compareFunction)

Compare function is as follows,

function compare(a, b) {
  // ...
}

If it returns value that is,
< 0 ---> the sort() method sorts a to a lower index than b i.e., a will come first
> 0 ---> the sort() method sort b to a lower index than a i.e., b will come first
= 0 ---> the sort() method considers a equals b and leaves their positions unchanged.

It internally uses a variant of Quicksort algorithm for sorting.
T.C. ---> O(N^2)

*/

let numbu = [0, 15 , 22, 13, 15, 20, 30 ];
let numbu1 = numbu.sort(function(a, b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
    //Or
    //return a - b;
});

console.log(numbu); //[0, 13, 15, 15, 20, 22, 30]
console.log(numbu1); //[0, 13, 15, 15, 20, 22, 30]


ar = ["Amit", "Zima", "Sanatan", "Kunal", "Prateek"];

let myAr1 = ar.sort(function(a, b) {
    if(a > b) return +1;
    if(a < b) return -1;
    return 0;
});

console.log(myAr1); // ['Amit', 'Kunal', 'Prateek', 'Sanatan', 'Zima']
console.log(ar); // ['Amit', 'Kunal', 'Prateek', 'Sanatan', 'Zima']

let myAr2 = ar.sort(function(a, b) {
  if(a > b) return -1;
  if(a < b) return +1;
  return 0;
});

console.log(myAr2); //['Zima', 'Sanatan', 'Prateek', 'Kunal', 'Amit']
console.log(ar); //['Zima', 'Sanatan', 'Prateek', 'Kunal', 'Amit']


// sorting array with mixed cases
let mixedCaseAnimals = [
  'Cat', 'dog', 'Elephant', 'bee', 'ant'
];

mixedCaseAnimals.sort(function(a, b) {

  let x = a.toUpperCase(),
      y = b.toUpperCase();
  return x > y ? +1 : x < y ? -1 : 0;

});

console.log(mixedCaseAnimals); //['ant', 'bee', 'Cat', 'dog', 'Elephant']


let employees = [
  {name: 'John', salary: 90000, hireDate: "July 1, 2010"},
  {name: 'David', salary: 75000, hireDate: "August 15, 2009"},
  {name: 'Ana', salary: 80000, hireDate: "December 12, 2011"}
];


//Sorting in ascending order based on salary
employees.sort(function(a, b) {
  return a.salary - b.salary;
});

console.log(employees);
/*

[
  { name: 'David', salary: 75000, hireDate: 'August 15, 2009' },
  { name: 'Ana', salary: 80000, hireDate: 'December 12, 2011' },
  { name: 'John', salary: 90000, hireDate: 'July 1, 2010' }
]


*/

//Sorting in descending order based on name
employees.sort(function(a, b) {
  if(a.name > b.name) return -1;
  if(a.name < b.name) return +1;
  return 0;
});

console.log(employees);

/*

[
  { name: 'John', salary: 90000, hireDate: 'July 1, 2010' },
  { name: 'David', salary: 75000, hireDate: 'August 15, 2009' },
  { name: 'Ana', salary: 80000, hireDate: 'December 12, 2011' }
]


*/

let date = new Date(employees[0].hireDate);
console.log(date); //Thu Jul 01 2010 00:00:00 GMT+0530 (India Standard Time)
console.log(date.toString()); //Thu Jul 01 2010 00:00:00 GMT+0530 (India Standard Time)
console.log(date.getDate()); //1
console.log(date.getMonth()); //6
console.log(date.getFullYear()); //2010
console.log(date.getDay()); //day of the week //4 //0 represents sunday
console.log(date.getTime()); //1277922600000
//The getTime() method in JavaScript returns the number of milliseconds since January 1, 1970, 
//00:00:00 UTC, also known as the Unix epoch.
console.log(date.getHours()); //0
console.log(date.getMinutes()); //0
console.log(date.getSeconds()); //0
console.log(date.getMilliseconds()); //0



//sorting in ascending order based on dates
employees.sort(function(a, b) {
    let dt1 = new Date(a.hireDate);
    let dt2 = new Date(b.hireDate);
    return dt1 - dt2;
});

console.log(employees);

/*
[
  { name: 'David', salary: 75000, hireDate: 'August 15, 2009' },
  { name: 'John', salary: 90000, hireDate: 'July 1, 2010' },
  { name: 'Ana', salary: 80000, hireDate: 'December 12, 2011' }
]

*/

//flat()
//It creates a new array by flattening a nested array up to the specified depth.
//Flattening an array is the process of reducing the dimensionality of an array.

//arr.flat(depth)

//depth - Integer specifying how deep a nested array should be flattened. 
//Its default value is 1.
//It does not change the original array.
//It removes empty slots in arrays.


const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat(); //default depth = 1

console.log(newArr); //[1, 2, 3, 4, 5, 6]  


let myArrr = [1, 2, [3, 4, [5, 6, [7, 8]]]];

let flattenArray = myArrr.flat(2);

// new flatten array
console.log(flattenArray); //[ 1, 2, 3, 4, 5, 6, [ 7, 8 ] ]

//We can convert a sparse array to a normal array i.e., we can remove empty spaces with flat()
let array_with_holes = [1, , 3];
let flattedArray = array_with_holes.flat();
console.log(flattedArray); // [ 1, 3 ]


//When we don't know the level of depth we can use Infinity as depth
const nums11 = [1, 2, [3, 4, 5, [6, 7, [8, 9]]]];
const flatNumbers = nums11.flat(Infinity);
console.log(flatNumbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9]


//flatMap()
//The flatMap() method first maps each element of an array using a mapping function, 
//then flattens it into a new array. The flatMap() method is the combination of the map() method 
//followed by the flat() method of depth 1.

//let newArray = arrayObject.flatMap(callback(element, index, array), thisArg);

//element - The current element being processed in the array.
//index - The index of the current element being processed in the array.
//array - The original array that flatMap() was called upon.
//The optional thisArg argument is a value to use as this when executing the callback.
//It does not change the original array.


let multiArray = [
  [1, 5],
  [4, 9],
  [3, 7]
];

let res1 = multiArray.map(function(el, index) {
  return [el[0] + el[1] + index];
});

console.log(res1); //[ [ 6 ], [ 14 ], [ 12 ] ]
let res2 = res1.flat();
console.log(res2); //[ 6, 14, 12 ]

//The above code is equivalent to the following
let res3 = multiArray.flatMap(function(el, index) {
  return [el[0] + el[1] + index];
});
console.log(res3); //[ 6, 14, 12 ]



let cart = [
  {
    name: 'Smartphone',
    qty: 2,
    price: 500,
    freeOfCharge: false
  },
  {
    name: 'Tablet',
    qty: 1,
    price: 800,
    freeOfCharge: false
  }
];

//When a customer adds a smartphone also add a screen protector in the cart
let newCart = cart.flatMap(
  function(item) {
      if (item.name === 'Smartphone') {
          return [item, {
              name: 'Screen Protector',
              qty: item.qty,
              price: 5,
              freeOfCharge: true
          }]
      } else {
          return [item];
      }
  }
);

console.log(newCart);

/*
[
  { name: 'Smartphone', qty: 2, price: 500, freeOfCharge: false },
  { name: 'Screen Protector', qty: 2, price: 5, freeOfCharge: true },
  { name: 'Tablet', qty: 1, price: 800, freeOfCharge: false }
]

*/



//of() method
//The of() method creates a new Array instance from the given arguments. It is a static method.
//Array.of(element0, element1, ..., elementN)

let num13 = Array.of(3);
console.log(num13); //[3]

let ar13 = Array.of("Mango", "Banana", "Lemon");
console.log(ar13); //['Mango', 'Banana', 'Lemon']

let ar14 = Array.of();
console.log(ar14); //[]


//from() method
//The Array.from() static method creates a new, shallow-copied Array instance 
//from an iterable or array-like object.

//Array.from(arraylike, mapFunc, thisArg)

//This is equivalent to the following:
//Array.from(arraylike).map(mapFn, thisArg)

//arraylike - Array-like or iterable object to convert to an array.
//mapFunc (optional) - Map function that is called on each element.
//This function is called with the following arguments:
//element - The current element being processed in the array.
//index - The index of the current element being processed in the array. Whole array is 
//under construction that is why it is not passed here.
//thisArg (optional) - Value to use as this when executing mapFunc.
//Array.from() never creates a sparse array. If the arrayLike object is missing some 
//index properties, they become undefined in the new array.


let myFoo = Array.from("foo");
console.log(myFoo); // [ "f", "o", "o" ]

let myA = [2, 4, 6];
let result1 = Array.from(myA, function(el, ind) {
  return (el * 2) + ind;
});

console.log(result1); //[4. 9, 14]
console.log(myA); //[2, 4, 6]


let doubler = {
  factor: 2,
  double(x) {
      return x * this.factor;
  }
}

let scores = [5, 6, 7];
let newScores = Array.from(scores, doubler.double, doubler);
console.log(newScores); //[10, 12, 14]

scores[-1] = 10;
console.log(scores); //[ 5, 6, 7, -1: 10 ]

scores["Hello"] = 15;
console.log(scores); //[5, 6, 7, -1: 10, Hello: 15]
console.log(scores["Hello"]); //15

scores.y = 25;
console.log(scores); //[5, 6, 7, -1: 10, Hello: 15, y: 25]

for(const a of scores) {
  console.log(a);
}

/*
5
6
7
*/

for(const b in scores) {
  console.log("Key:", b, "| Value:", scores[b]);
}

/*
Key: 0 | Value: 5
Key: 1 | Value: 6
Key: 2 | Value: 7
Key: -1 | Value: 10
Key: Hello | Value: 15
Key: y | Value: 25

*/




//at() method
//We access elements from an array with []. For example arr[0], arr[length - 1] etc. Although
//arr[-1] is not valid and it gives undefined. Array is a kind of object. When we access an
//element with square brackets that means we are accessing a property of the object having key
//that of index. Now in this array object negative key does not exist. So, when we try to access 
//any element with negative index we get undefined.
//The at() method accepts an index and returns an element at that index. 

//arr.at(index)

//If the index is zero or positive, the at() method works like the [].
//if we use a negative index, the method returns an element from the end of the array. 
//For example, the arr.at(-1) returns the last element, arr.at(-2) returns the second 
//last element, and so on.

const scores1 = [5, 6, 7];

console.log(scores1.at(1)); //6 // same as scores1[1] 

// get the last element
console.log(scores1.at(-1)); // 7

console.log(scores1.at(-1) === scores1[scores1.length - 1]); // true



//entries() method
//The entries() method returns a new Array Iterator object containing key/value pairs 
//for each array index.

//arr.entries()
//The entries() method does not change the original array.

const alphabets = ["A", "B", "C"];

// array iterator object that contains
// key-value pairs for each index in the array
let iterator = alphabets.entries();

// iterating through key-value pairs in the array
for (let entry of iterator) {
  console.log(entry);
}

// Output: 
// [ 0, 'A' ]
// [ 1, 'B' ]
// [ 2, 'C' ]



//keys() method
//The keys() method returns a new Array Iterator object that contains the keys
//for each element in the array.

//arr.keys()

//The keys() method does not change the original array.
//It ignores empty array elements.

let iterator1 = alphabets.keys();

for(let key of iterator1) {
  console.log(key);
}
/*
0
1
2

*/


//values() method
//The values() method returns a new Array Iterator object that contains the values 
//for each index in the array.

//arr.values()

//The value() method does not change the original array.

let iterator2 = alphabets.values();

for(let val of iterator2) {
  console.log(val);
}

/*
A
B
C
*/


//copyWithin()
//The copyWithin() method copies array elements from one position to another 
//in the given array.

//arr.copyWithin(target, start, end)

//target - The index position to copy the elements to.
//start (optional) - The index position to start copying elements from. If omitted, 
//it will copy from index 0.
//end (optional) - The index position to stop copying elements from (end element is excluded).
//If the end parameter is omitted in the copyWithin() method, it will copy until the last index 
//of the array.
//If any of the arguments are negative, the index will be counted backward. For example, 
//-1 represents the last element, and so on. If omitted, it will copy until the last index.
//The copyWithin() method overwrites the original array.
//It does not change the length of the original array.


let numbss = [1, 2, 3, 4, 5];

// copying element located at 4th index to 0th index
numbss.copyWithin(0, 4);

// modifies the original array
console.log(numbss); // [5, 2, 3, 4, 5]

let letters = ["a", "b", "c", "d"];

// copying element located at 1st index to 2nd index
letters.copyWithin(2, 1);

// modifies the original array 
console.log(letters); // ['a', 'b', 'b', 'c']

//multidimensional array
//JavaScript does not provide the multidimensional array natively. However, we can create a 
//multidimensional array by defining an array of elements, where each element is also another 
//array. Thus we say multidimensional arrays are array of arrays.
let activities = [
  ['Work', 9],
  ['Eat', 1],
  ['Commute', 2],
  ['Play Game', 1],
  ['Sleep', 7]
];

console.table(activities);

/*
┌─────────┬─────────────┬───┐
│ (index) │      0      │ 1 │
├─────────┼─────────────┼───┤
│    0    │   'Work'    │ 9 │
│    1    │    'Eat'    │ 1 │
│    2    │  'Commute'  │ 2 │
│    3    │ 'Play Game' │ 1 │
│    4    │   'Sleep'   │ 7 │
└─────────┴─────────────┴───┘


*/

console.table(cart);

/*
┌─────────┬──────────────┬─────┬───────┬──────────────┐
│ (index) │     name     │ qty │ price │ freeOfCharge │
├─────────┼──────────────┼─────┼───────┼──────────────┤
│    0    │ 'Smartphone' │  2  │  500  │    false     │
│    1    │   'Tablet'   │  1  │  800  │    false     │
└─────────┴──────────────┴─────┴───────┴──────────────┘

*/


console.log(activities[0][1]); //9
activities.push(['Study',2]);

console.table(activities);

/*
┌─────────┬─────────────┬───┐
│ (index) │      0      │ 1 │
├─────────┼─────────────┼───┤
│    0    │   'Work'    │ 9 │
│    1    │    'Eat'    │ 1 │
│    2    │  'Commute'  │ 2 │
│    3    │ 'Play Game' │ 1 │
│    4    │   'Sleep'   │ 7 │
│    5    │   'Study'   │ 2 │
└─────────┴─────────────┴───┘

*/

console.log(activities.pop()); //['Study', 2]
console.table(activities);

/*
┌─────────┬─────────────┬───┐
│ (index) │      0      │ 1 │
├─────────┼─────────────┼───┤
│    0    │   'Work'    │ 9 │
│    1    │    'Eat'    │ 1 │
│    2    │  'Commute'  │ 2 │
│    3    │ 'Play Game' │ 1 │
│    4    │   'Sleep'   │ 7 │
└─────────┴─────────────┴───┘

*/

//We can also perform other array methods on multidimensional arrays.


