//JavaScript Template Literal

let message="Hello! How are you?\nI am fine"
//\n gives a new line
let message1="Hey, \"kaju\" whats up? " //You have to do this to keep any word inside "" in case of string literals



/* 
object literal--> {} Comma separated list of properties wraped in curly braces
boolean literal---> true, false
string literal---> "",''
template literal--->`` (backticks)
*/


let message2=
`Hello! How are you?
I am fine
what about "Asmita"?`
//Here you don't have to give \n
console.log(message2);


//You can add any expresson inside template literal and also you can call functions
let name="Indrajit";
let age=25;
let myFunc1= function () {
    return "Let me do the hardwork";
}
let myFunc2= function () {
    return `Hope for the best`;
}


let message3=
`My name is ${name} and age is ${age}.
I will graduate from masai after ${6-2} months.
${myFunc1()} and "${myFunc2()}".`

console.log(message3)
