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