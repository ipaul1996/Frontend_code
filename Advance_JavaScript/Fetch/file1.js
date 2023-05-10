//console.log(typeof(fetch));
//fetch is an inbuilt function

let x=fetch();
//console.log(x);
//x is a Promise object. So, fetch function returns a promise(an object).
//Takes Time - Pending
//fulfilled or rejected
const url="https://reqres.in/api/users?page=2"


//console.log(fetch(url));
fetch(url)
.then(function(res){

    //console.log(res);  //This res parameter accepts the promiseresult which is an 
                         //object named 'Response'.This Response object has a property named 
                         //body with value readablestream(which is an object) reprsents 
                         //readable stream of data.

    //console.log(res.json()); //The json() method of the Response interface takes a 
                               //Response stream and reads it to completion. It returns a 
                               //promise which resolves with the result of parsing the body 
                               //text as JSON. When the parsing is not done the promise state 
                               //is pending and when it is done the promise state is fulfilled.

    return res.json()   //This is a promise object and it has a promiseresult which is an 
                        //object named 'Object'. This object has a property named 'data' in 
                        //which required data is stored.
                        
})
.then(function(res1){
    displayData(res1.data);   
})
.catch(function(err){
    console.log(err);
});
//Here we have done promise chainning.



function displayData(data) {
    data.forEach(function(el){
     let Container=document.querySelector("#container");
     let divP=document.createElement("div");
     let Image=document.createElement("img");
     Image.setAttribute("src",el.avatar);
     //Or we can use: Image.src=el.avatar;
     let Name=document.createElement("p");
     Name.innerText=`${el.first_name} ${el.last_name}`;
     divP.append(Image,Name);
     Container.append(divP);
    })
}
