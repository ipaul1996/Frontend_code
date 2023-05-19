
  
console.log("script start");


setTimeout((name, role) => {

    console.log(`Hello, my name is ${name}`);
    console.log(`I'm a ${role}`);

}, 3000, "Nathan", "Software developer");


console.log("script end");


/*

script start
script end
Hello, my name is Nathan
I'm a Software developer

*/