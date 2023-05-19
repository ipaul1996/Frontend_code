

console.log("script start");

const timeoutId = setTimeout(() => {
    console.log("Hello World!");
}, 0);

for(let i = 1; i < 1000; i++) {
    console.log("...");
}

console.log("setTimeOut id is : ", timeoutId);
console.log("Clear Time out");
clearTimeout(timeoutId);

console.log("script end");

/*
Output:

script start
999 ...
setTimeOut id is :  1
Clear Time out
script end

*/