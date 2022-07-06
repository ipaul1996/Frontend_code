//Destructuring ---> Breaking the structure

const user= {
    name:'Indrajit',
    age:25,
    city:'Kolkata'
};

//If we want to access any property of the user object we have dot method as follows,
// console.log(user.name); //'Indrajit'
// console.log(user.age);  //25

//Destructuring
let {name,age,x}=user;
// console.log(name); //'Indrajit'
// console.log(age);  //25
// console.log(x);  //undefined, as property is present inside the user object with key as x

//Now if we want to store a property value in any arbitrary variable
let {city:myCity}=user;
// console.log(myCity); //'Kolkata'


const url ="https://api.openweathermap.org/data/2.5/weather?q=kolkata&appid=c4a3f7839d85c9233e52bfa7b414f8d0";
let r;
fetch(url)
.then((res)=>{
    return res.json();
})
.then((res)=> {
    let {main,wind}=res;
    console.log(main); //{temp: 303.12, feels_like: 310.12, temp_min: 303.12, temp_max: 303.12, pressure: 998, …}
    console.log(wind); //{speed: 0, deg: 0}
    let {temp,temp_max,temp_min}=main;
    console.log('temp:',temp,'temp_max:',temp_max,'temp_min:',temp_min); //temp: 303.12 temp_max: 303.12 temp_min: 303.12
})
.catch((err)=>{
    console.log(err);
})

//Destructuring Nested Objects 
//See file9.js


