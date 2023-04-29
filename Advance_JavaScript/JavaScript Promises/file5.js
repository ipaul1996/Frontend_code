document.querySelector("#image").src="https://c.tenor.com/K2UGDd4acJUAAAAC/load-loading.gif";

function bankserver() {
    return false;
}


let p1=new Promise(function(resolve,reject){
    let pin=bankserver();       
        setTimeout(function(){
            if(pin) {
                resolve("Payment Successful!");
             } else {
                 reject("Try Again...");
             }
        },2000)       
})
console.log(p1)


p1.then(function(x){
    console.log(x);
    document.querySelector("#image").src="https://fcs3pub.s3.amazonaws.com/photo-book/images/payment/success.gif";
})
.catch(function(x){
   console.log(x);
   document.querySelector("#image").src="https://cdn.dribbble.com/users/251873/screenshots/9288094/13539-sign-for-error-or-explanation-alert.gif"
})