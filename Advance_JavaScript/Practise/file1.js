details = {
    name : "Indrajit Paul",
    roll : 25,
    1 : "Hello"
};

console.log(details);
console.log(details["1"]);

details.age = 52;
details["friend"] = "Kaju";

delete details["1"];
delete details.roll;

console.log(details);

for(let i in details) {
    console.log(i, details[i]);
}

let str = "abcdefghijklmnoadvcdefghe";
let obj = {};

for(let i = 0; i < str.length; i++) {
    if(obj[str[i]] == null) {
        obj[str[i]] = 1;
    } else {
        obj[str[i]]++;
    }
}

console.log(obj);
