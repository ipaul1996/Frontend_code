let p = new Promise(function(resolve, reject) {

        resolve("Hello");
});

// console.log(p);

// const url = "https://reqres.in/api/users?page=2";

// fetch(url)
// .then(function(res) {
//     console.log(res);
//     return res.json();
// })
// .then(function(res) {
//     console.log(res);
//     console.log(res.data);
// })
// .catch(function(err) {
//     console.log(err);
// })

const url1="https://fakestoreapi.com/products";


async function getData() {

    try {

        let res = await fetch(url1);
        let data = await res.json();
        console.log(data);
        
    } catch (error) {
        console.log(err);
    }
    
}

getData();