

console.log("script start");

setTimeout(() => {
    console.log("Inside setTimeOut");
}, 0);

for(let i = 1; i < 1000; i++) {
    console.log("...");
}

console.log("script end");

/*
script start
999 ...
script end
Inside setTimeOut


*/