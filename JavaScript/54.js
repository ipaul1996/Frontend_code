//Higher Order Functions - 4

//reduce - whenever we want to return a single value from an array we use reduce.

/*
Syntax: 

arr.reduce(function(accumulator,el,i,arr){

});

*/

//Case:1 With no initial value
let nums = [3,5,7,8];

let res = nums.reduce(function(accumulator, el, i, arr){
  return accumulator + el;
});

console.log(res); //23
// 1st iteration:
// acc=nums[0]=3 el=5 acc+el=3+5=8 acc=8
// 2nd iteration:
// acc=8 el=7 acc+el=8+7=15 acc=15
// 3rd iteration:
// acc=15 el=8 acc+el=15+8=23 acc=23




//Case:2 With Initial Value

let numbers = [3,5,7,8];

//let accumulator = 0; --> here we should not write the initial_value

let result = numbers.reduce(function(accumulator, el, i, arr){
  return accumulator + el;
}, 0); 
//This 0 is the initial value and is the second parameter of reduce function

console.log(result); //23

// 1st iteration:
// acc=0 el=3 acc+el=0+3=3 acc=3
// 2nd iteration:
// acc=3 el=5 acc+el=3+5=8 acc=8
// 3rd iteration:
// acc=8 el=7 acc+el=8+7=15 acc=15
//4th iteration:
// acc=15 el=8 acc+el=15+8=23 acc=23




/*

Chaining

forEach().map() --> Not possible
forEach().filter() --> Not possible
map().filter() --> possible
map().reduce() --> possible
filter().reduce() --> possible
map().forEach() --> possible

*/