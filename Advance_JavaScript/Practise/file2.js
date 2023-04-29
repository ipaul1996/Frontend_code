let arr1 = ["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"];
let arr2 = [32, 30, 26, 28, 44];
let res = [];

for(let i = 0; i < arr1.length; i++) {

    let obj = {};
    obj["name"] = arr1[i];
    obj["age"] = arr2[i];
    res.push(obj);

}

console.log(res);