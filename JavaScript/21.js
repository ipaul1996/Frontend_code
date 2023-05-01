//Control Flow - 1

//if statement
//The if statement executes block if a condition is true. 

/*
For a single statement

if(condition)
   statement;

For a single or multiple statements,

if(condition) {
    Multiple statements
}

condition --> Value/Expression
The condition evaluates to a Boolean value, which is true or false.
If the condition evaluates to a non-Boolean value, JavaScript implicitly converts its result 
to a Boolean value by calling the Boolean() function.

*/

let age = 18;

if(age >= 18) {
  console.log("You can cast your vote");
}

//Output: You can cast your vote

//Nested if

age = 16;
let state = "CA";

if (state == "CA") {
  if (age >= 16) {
    console.log("You can drive.");
  }
}

//Output: You can drive.

//The above code can be replaced by the following:
if (state == "CA" && age == 16) {
    console.log("You can drive.");
}



//if...else statement
//Here if the condition is true if block will be executed, otherwise, 
//else block will be executed

/*

if( condition ) {
  statements

} else { 
  statements

}


*/

age = 18;

if (age >= 18) {
  console.log("You can cast your vote");

} else {
  console.log("You must be at least 18 to cast your vote.");

}


age = 16;
let country = "USA";

if (age >= 16 && country === "USA") {
  console.log("You can get a driving license.");

} else {
  console.log("You are not eligible to get a driving license.");

}



//if...else...if
//Use the JavaScript if...else...if statement to check multiple conditions 
//and execute the corresponding block if a condition is true.

let month = 6;
let monthName;

if (month == 1) {
  monthName = "Jan";
} else if (month == 2) {
  monthName = "Feb";
} else if (month == 3) {
  monthName = "Mar";
} else if (month == 4) {
  monthName = "Apr";
} else if (month == 5) {
  monthName = "May";
} else if (month == 6) {
  monthName = "Jun";
} else if (month == 7) {
  monthName = "Jul";
} else if (month == 8) {
  monthName = "Aug";
} else if (month == 9) {
  monthName = "Sep";
} else if (month == 10) {
  monthName = "Oct";
} else if (month == 11) {
  monthName = "Nov";
} else if (month == 12) {
  monthName = "Dec";
} else {
  monthName = "Invalid month";
}

console.log(monthName); //Jun



//Ternary Operator(?:)
//the ternary operator (also known as the conditional operator) is a shorthand way 
//of writing an if-else statement.

//condition ? value_if_true : value_if_false
//Here, condition is the Boolean expression that is evaluated. If condition is true, 
//then value_if_true is returned; otherwise, value_if_false is returned.

//It’s a good practice to use the ternary operator when it makes the code easier to read. 
//If the logic contains many if...else statements, we should avoid using the ternary operators.

const number = 5;
const message = (number % 2 === 0) ? "Even number" : "Odd number";
console.log(message); // "Odd number"

const score = 65;

const grade = (score >= 90) ? "A" :
              (score >= 80) ? "B" :
              (score >= 70) ? "C" :
              (score >= 60) ? "D" : 
              "F";

console.log(`Your score of ${score} earned you a grade of ${grade}.`);
// "Your score of 80 earned you a grade of D."

const age1 = 25;
const gender = "male";

const message1 = (age1 >= 18) ? 
                 ((gender === "male") ? "He is an adult" : "She is an adult") :
                 "Youth";

console.log(message1); // "He is an adult"



//switch case statement

/*

The switch statement evaluates an expression, compares its result with case values, 
and executes the statement associated with the matching case value.

switch (expression) {
  case value1:
    code block to execute if expression matches value1
    break;
  case value2:
    code block to execute if expression matches value2
    break;
  ...
  default:
    code block to execute if expression does not match any of the values
}

How it works?
First, evaluate the expression inside the parentheses after the switch keyword.

Second, compare the result of the expression with the value1, value2, … in the case branches 
from top to bottom. The switch statement uses the strict comparison (===).

Third, execute the statement in the case branch where the result of the expression equals the 
value that follows the case keyword. The break statement exits the switch statement. 
If we skip the break statement, the code execution falls through the original case branch 
into the next one(i.e., all the following code blocks will be executed irrespective of their 
conditions upto default). If the result of the expression does not strictly equal to any value, 
the switch statement will execute the statement in the default branch.

That the switch statement will stop comparing the expression‘s result with 
the remaining case values as long as it finds a match.

*/




let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Sunday";
    break;
  case 2:
    dayName = "Monday";
    break;
  case 3:
    dayName = "Tuesday";
    break;
  case 4:
    dayName = "Wednesday";
    break;
  case 5:
    dayName = "Thursday";
    break;
  case 6:
    dayName = "Friday";
    break;
  case 7:
    dayName = "Saturday";
    break;
  default:
    dayName = "Invalid day";
}

console.log(dayName); // Tuesday


