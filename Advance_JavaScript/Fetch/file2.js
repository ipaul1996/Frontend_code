const url="https://fakestoreapi.com/products";

async function getData() {
    try{
        let res= await fetch(url);
        //console.log(res);
        let data=await res.json();
        console.log(data);
        displayData(data);
    } catch(err) {
        console.log(err);
    }
}

getData();


function displayData(data) {
    data.forEach(function(el){
     let Container=document.querySelector("#container");
     let divP=document.createElement("div");
     let Image=document.createElement("img");
     Image.setAttribute("src",el.image);
     //Or we can use: Image.src=el.avatar;
     let Name=document.createElement("p");
     Name.innerText=`${el.title}`;
     divP.append(Image,Name);
     Container.append(divP);
    })
}


async function myGetData() {
     
    try {
        let res = await fetch(url);
        let data = await res.json();
        displayData(data);
        
    } catch (error) {
        console.log(error);
    }
     
    
}


fetch(url)
.then(function(res1) {
    return res1.json();
})
.then(function(res2){
    displayData(res2.data);
})
.catch(function(error) {
    console.log(error);
})