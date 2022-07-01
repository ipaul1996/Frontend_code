
document.querySelector("#image").src="https://c.tenor.com/K2UGDd4acJUAAAAC/load-loading.gif";

function bankserver() {
    return true;
}


let p1=new Promise(function(resolve,reject){
    let pin=bankserver();       
        setTimeout(function(){
            if(pin) {
                resolve("Payment Successful!");
             } else {
                 reject("Try Again...");
             }
        },4000)       
})
console.log(p1)

//If the promise state of p1 object is fulfilled, 'then' method(Which is prsent in the prototype of p1 object i.e., p1.__proto__ or Promise.prototype and p1 inherits it) got executed.
p1.then(function(x){
    console.log(x);
    document.querySelector("#image").src="https://fcs3pub.s3.amazonaws.com/photo-book/images/payment/success.gif";
})


//If the promise state of p1 object is rejected, 'catch'(Which is prsent in the prototype of p1 object i.e., p1.__proto__ or Promise.prototype and p1 inherits it) method got executed.
p1.catch(function(x){
   console.log(x);
   document.querySelector("#image").src="https://cdn.dribbble.com/users/251873/screenshots/9288094/13539-sign-for-error-or-explanation-alert.gif"
})
//In both the the above methods we have a callback function that take a parameter which accepts the the promiseresult of p1. Both then method and catch method can be called alone.
//We can say by then and catch method we are handling promises

//Initially a promise object(say,p1) is in pending state.

//p1(pending)(Takes some time)---> p1(fulfilled)(then method got executed i.e., all code inside then got executed)
//           (Takes some time)---> p1(rejected)(catch method got executed i.e., all code inside catch got executed)


