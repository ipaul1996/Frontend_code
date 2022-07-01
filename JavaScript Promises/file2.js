let p1 = new Promise(function(resolve, reject){
    //do something
});

console.log("p1:",p1);
console.log(p1.__proto__);
console.log(p1.__proto__===Promise.prototype);

//This p1 is build with the help of the inbuilt constructor function Promise(). It has no property. The prototype of p1 is Promise object which is referenced by 'Promise.prototype'. There are four methods, 'catch','constructor','finally','then' are present inside this Promise.prototype(which is prototype of p1) object. Here the constructor method is the Promise() constructor function itself.This Promise function takes a callback function called executor as its argument. Again this executor(an anonymous function) takes other two call back functions named 'resolve' and 'reject' as parameters. These two functions are pre-defined.


//Now the promisestate of p1 object is pending as neither of resolve and reject function is invoked and hence the promiseresult is undefined.



let p2 = new Promise(function(resolve, reject){
    resolve("Success!")
});
console.log("p2:",p2);
//Now the promisestate of p2 object is fulfilled as we invoked the resolve function and promiseresult is 'Success!'. Whatever we pass as an argument while calling resolve function that will be the promsiresult. The data type of argument of resolve function can be anything i.e., it can be string or number or object or array or function or boolean or anything. resolve only takes one argument.



let p3 = new Promise(function(resolve, reject){
    // resolve("Succsess")
    reject("Failed!")   
});
console.log("p3:", p3);
//Now the promisestate of p3 object is rejected as we invoked reject function and promiseresult is 'Failed!'
// Whatever we pass as an argument while calling reject function that will be the promsiresult. The data type of argument of reject function can be anything i.e., it can be string or number or object or array or function or boolean or anything.reject only takes one argument.

//Here we can execute only one of the two functions i.e., either resolve or reject
//Point to be noted here, we are facilitating promise state of p1, p2 and p3 object manually by executing or not executing resolve and reject function.