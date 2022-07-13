import navbar from "../Components/navbar.js"

document.querySelector('#navbar').innerHTML = navbar();

import { getData,append } from "../Components/FetchandAppend.js";

const url = `https://fakestoreapi.com/products/category/electronics`;

let container = document.querySelector('#containerE');

getData(url).then((res)=> {

    append(res, container);

})