//Length Property

let str1 = 'I am a coder';

console.log(str1.length); //12

//toLowerCase Method

console.log(str1.toLocaleLowerCase()); //i am a coder

//toUpperCase Method

console.log(str1.toUpperCase());  //I AM A CODER

//includes method --> Case Sensitive
//It is used for searching letter, word, phrase, symbol, number inside a string

console.log(str1.includes('am')); //true

console.log(str1.includes('AM')); //false

//startsWith Method
//Case Sensitive

console.log(str1.startsWith('I')); //true

//endsWith Method
//Case Sensitive

console.log(str1.endsWith('coder')); //true

//search Method ---> It returns the position index if it finds the exact match of the argument inside the string

console.log(str1.search('am')); //2 ---> index of a

console.log(str1.search('Hi')); //-1 ---> If it does not find the characters then it returns -1

