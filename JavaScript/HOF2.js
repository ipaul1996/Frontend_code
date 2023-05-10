//Higher Order Functions - 2

//forEach
//forEach and map both behaves like for loop, although they differ from each other in many ways
//forEach/map/filter/reduce -> All these are only applicable to arrays
//All thsese HOF will take a callback function in it and call it internally during execution
//This callback function is anonymous as it does not have any name


//forEach Syntax: 
/*
arrayName.forEach(function(element,index,array){

});

*/

let arr = ["Amit", "Asmita", "Indrajit", "Indrani", "Kaju", "Ravinder", "Aditya"];

//Let's call the forEach method on this array by passing an anonymous callback function
//(we are providing definition of the function as per our requierment)
arr.forEach(function(element, index, array) {
  console.log(element, index);
  console.log(array);
});

//forEach function internally invokes this anonymous function at runtime for each elemnt 
//of the array. Here the forEach function invoking the callback function 7 times
//Callback function has 3 parameters --> 1 -> element, 2 --> index, 3 --> array
//In case of callback function parameter we can also write function(el,i,arr) but the order 
//shoud be maintained. We can also omit some parameters. Generally, we don't use array.
//Callback function should not return anything in case of forEach method.

arr.forEach(function(el) {
  console.log(el);
})

//We are not getting these els' in form of an array. To get in form of an array we have to 
//do the following:

let box = [];
arr.forEach(function(el) {
  box.push(el);
});
console.log(box);


let res = arr.forEach(function(el) {
  return el;
});

console.log(res);
//This gives undefined. So, we can conclude forEach never returns(It is built in this way)

//Point to be noted that forEach does not affect the actual array.





//map

//map syntax
/*
arrayName.map(function(element,index,array){

});

*/


let arr1 = ["Amit", "Asmita", "Indrajit", "Indrani", "Kaju", "Ravinder", "Aditya"];

let res1 = arr.map(function(el, i) {
  return el.toUpperCase();
});

console.log(res1); //['AMIT', 'ASMITA', 'INDRAJIT', 'INDRANI', 'KAJU', 'RAVINDER', 'ADITYA']
console.log(arr1); //['Amit', 'Asmita', 'Indrajit', 'Indrani', 'Kaju', 'Ravinder', 'Aditya']

//map can return and it returns in form of an array(creates a new array) and doesn't affect
//the original array
//If you use console.log() instead of return statement then in case of map then map will work 
//like forEach and will not return any array
//As map returns an array we must hold it in a variable
