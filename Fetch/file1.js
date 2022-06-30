

//console.log(typeof(fetch));
//fetch is an inbuilt function

let x=fetch();
//console.log(x);
//x is a Promise object. So, fetch function returns a promise(an object).
//Takes Time - Pending
//fulfilled or rejected
const url="https://reqres.in/api/users?page=2"


console.log(fetch(url));
fetch(url)
.then(function(res){
    //console.log(res);  //This res parameter accepts the promiseresult which is an object named 'Response'.This Response object has a property named body with value readablestream(which is an object) reprsents readable stream of data.
    //console.log(res.json()); //The json() method of the Response interface takes a Response stream and reads it to completion. It returns a promise which resolves with the result of parsing the body text as JSON.
    return res.json()   //This is a promise object and it has a promiseresult which is an object named 'Object'. This object has a property named in which required data is stored.
})
.then(function(res){
    console.log(res.data);   
})
.catch(function(err){
    console.log(err);
});
//Here we have done promise chainning.

