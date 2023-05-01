//Control Flow - 2

//while loop statement

//the while loop is a type of iterative statement that allows us to repeat a block 
//of code to execute as long as a specified condition is true.

/*

while (expression) {
    statement
}

The while statement evaluates the expression before each iteration of the loop.

If the expression evaluates to true, the while statement executes the statement. 
Otherwise, the while loop exits.

Because the while loop evaluates the expression before each iteration, 
it is also known as a pretest loop.

If the expression evaluates to false before the loop enters, the while loop will never execute.

*/


const array = [1, 2, 3, 4, 5];
let i = 0; //intialization

while (i < array.length) { //condition check
  console.log(array[i]); //statements
  i++; //increment
}


let count = 10; //intialization

while (count > 0) { //condition check
  console.log(count); //statements
  count--; //decrement
}

//do...while loop statement
/*
The do...while loop statement creates a loop that executes a block until a condition 
evaluates to false.

do {
  statements;
} while(expression);

Unlike the while loop, the do-while loop always executes the statement at least once 
before evaluating the expression. Because the do...while loop evaluates expression after 
each iteration, it’s often referred to as a post-test loop. 
The semicolon at the end is optional.

*/

let count1 = 0; //Intialization
do {
  console.log(count1); //statements
  count1++; //Increment/Decrement
} while(count1 < 5);  //Condition check


//for loop statement

/*

for (initializer; condition; iterator) {
    statements
}

initializer: This is typically used to set the initial value of a loop variable(a loacl variable). 

condition: This is a boolean expression that is evaluated before each iteration of the loop. If
the expression evaluates to true, the loop continues. If it evaluates to false, the loop exits. 

iterator: This is typically used to update(increment/decrement) the loop variable after 
each iteration of the loop.

In the for loop, the three expressions are optional. 

for( ; ; ) {
    statements
}

This loop will continue indefinitely


*/


for(let i = 1; i < 5; i++) {
    console.log(i);
}


let j = 1;
for (; j < 10; j += 2) {
  console.log(j);
}


for (let j = 1; ; j += 2) {

    console.log(j);

    if (j > 10) {
      break;
    }

}
  
  

for(;;) {
    console.log("This loop will run forever, unless we break out!");
    break;
}


let k = 1;
for (;;) {

  if (k > 10) {
    break;
  }

  console.log(k);
  k += 2;

}


//break statement
//We use the break statement to terminate a loop including for, while, and do...while 
//prematurely.

for (let i = 1; i <= 3; i++) {

    for (let j = 1; j <= 3; j++) {

      if (i + j == 4) {
        break;
      }

      console.log(i, j);

    }

}


//continue statement
//We use the JavaScript continue statement to skip the current iteration of a loop 
//including for, while, and do...while and continue the next one.

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
      continue;
    }
    console.log(i);
}
//Here when JS engine encounters continue it returns back to iterator

let p = 0;
while (p < 10) {
  p++;
  if (p % 2 === 0) {
    continue;
  }
  console.log(p);
}
//Here when JS engine encounters the continue it immediately returns back to the condition.


//Comma operator (,)
/*

The comma (,) operator evaluates each of its operands (from left to right) and 
returns the value of the last operand. This is commonly used to provide multiple updaters 
to a for loop's afterthought.
The comma operator has the lowest precedence of all operators.
The comma operator is completely different from commas used as syntactic separators 
in other locations, which include:
Elements in array initializers ([1, 2, 3])
Properties in object initializers ({ a: 1, b: 2 })
Parameters in function declarations/expressions (function f(a, b) { … })
Arguments in function calls (f(1, 2))
Binding lists in let, const, or var declarations (const a = 1, b = 2;)
Import lists in import declarations (import { a, b } from "c";)
Export lists in export declarations (export { a, b };)

*/
let x = 1;

x = (x++, x);

console.log(x);
// Expected output: 2

x = (2, 3);

console.log(x);
// Expected output: 3

let a, b, c;

a = b = 3, c = 4; 
console.log(a); // 3 (left-most)

let x1, y, z;

x1 = (y = 5, z = 6); // Returns 6
console.log(x1); // 6 (right-most)


function myFunc() {
    let x = 0;
    return (x += 1, x); // the same as return ++x;
}
  
