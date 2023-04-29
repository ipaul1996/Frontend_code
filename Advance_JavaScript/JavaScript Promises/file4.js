//A different way of handling promises ---> using async function and await keyword

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

//An async function is a function declared with the async keyword, and the await keyword is permitted within it.
//try block got executed if promise state of p1 object is 'fulfilled'. Here 'await p1' returns the promiseresult and store in res. The await operator is used to wait for a Promise
//catch block got executed if promise state of p1 object is 'rejected'. Here err accepts the promiseresult
//try and catch both are statements, both used together
async function myPayment() {
    try{
       let res= await p1;
       console.log(res);
       document.querySelector("#image").src="https://fcs3pub.s3.amazonaws.com/photo-book/images/payment/success.gif";
    } 
    catch(err) {
       console.log(err);
       document.querySelector("#image").src="https://cdn.dribbble.com/users/251873/screenshots/9288094/13539-sign-for-error-or-explanation-alert.gif"
    }
    
}

myPayment();