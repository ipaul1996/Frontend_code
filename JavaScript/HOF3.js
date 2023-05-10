//Higher Order Functions - 3

let arr=[2,4,6,8];
//output:[4,8,12,16];


//using forEach
let box=[];

arr.forEach(function(el) {
  box.push(el*2);
});

console.log(box);


//using map
let double=arr.map(function(el){
  return el*2;
});

console.log(double);

//Above process can also be done in the following way:
// let multiplyBy2=function(el){
//   return el*2;
// }
// let double=arr.map(multiplyBy2);
// console.log(double);




let arr2 = ['1','5','7','9','15'];
let x = arr2.map(Number);
console.log(x);


//let us see how it actually working
let arr1=['0','7','4','3','11'];

let y = arr1.map(function(el) {
  return Number(el);
});

console.log(y);


//We can also write it in the following way
let number = function(el) {
   return Number(el);
}

let z = arr1.map(number);
console.log(z);



//filter

//filter syntax
/*
arrayName.filter(function(element,index,array){

});

whenever we want to filter out something we use filter

*/

let nums = [3,6,8,1,9];
//Output->[6,8]

let res = nums.map(function(el) {
  return el%2 == 0;
});

console.log(res); //[false,true,true,false,false]
//For each element in the array map checks that the condition satisfied or not, and whatever
//is the result it just returns that

let even = nums.filter(function(el) {
  return el%2 == 0;
});

console.log(even); //[6, 8]
console.log(nums); //[3, 6, 8, 1, 9]
//Filter is returning elements where condition is true

//For each element in the array filter checks that the condition satisfied or not, and 
//wherever the result is true it returns those elements only.
//It doesn't affect the original array




//forEach, map can also be used on array of strings and array of objects
let arrOfObj = [{name:"Arohi", place:"Bangalore"},
                {name:"Indrajit", place:"Kolkata"},
                {name:"Asmita", place:"Delhi"} 
               ];


arrOfObj.forEach(function(el) {
  console.log("Name:", el.name, "Place:", el.place);
})


let ans = arrOfObj.map(function(el) {
  return(el.name);
})

console.log(ans);