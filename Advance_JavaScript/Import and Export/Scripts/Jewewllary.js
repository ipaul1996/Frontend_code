import navbar from "../Components/navbar.js"

document.querySelector('#navbar').innerHTML = navbar();

import {getData, append} from "../Components/FetchandAppend.js";

const url = `https://fakestoreapi.com/products/category/jewelery`

getData(url).then((res)=> {

    let container = document.querySelector('#containerJ');

    append(res, container);

})

