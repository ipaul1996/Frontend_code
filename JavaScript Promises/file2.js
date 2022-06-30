let p1 = new Promise(function(resolve, reject){
    //do something
});
console.log(p1.__proto__);
console.log(p1.__proto__===Promise.prototype);

//This p1 is build with the help of the inbuilt constructor function Promise().The prototype of p1 is Promise object which is referenced by Promise.prototype. THe constructor method present inside this Promise object is the Promise() constructor function itself.This Promise function takes a callback function called executor as its argument.Again this executor takes other two call back functions named 'resolve' and 'reject' as arguments. These two functions are pre-defined.

console.log(p1);
//Now the promisestate of p1 object is pending and promiseresult is undefined



let p2 = new Promise(function(resolve, reject){
    resolve("Success!")
});
console.log(p2);
//Now the promisestate of p2 object is fulfilled and promiseresult is 'Success!'



let p3 = new Promise(function(resolve, reject){
    // resolve("Succsess")
    reject("Failed!")   
});
console.log(p3);
//Now the promisestate of p3 object is rejected and promiseresult is 'Failed!'
//Here we can execute only one of the two function i.e., either resolve or reject