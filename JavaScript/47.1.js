//Strict mode in JS("use strict")


/*
If we include "use strict" at the beginning of a script, it will enable strict mode for the entire script.
If we include "use strict" at the beginning of a function, it will enable strict mode for that function only.
Note that strict mode is a per-function or per-script directive, so if you enable it for a function, it only 
applies to the code within that function, not to any code outside of it. Similarly, if you enable it for a script, 
it only applies to the code within that script, not to any other scripts that may be included on the page.


Strict mode introduced in ECMAScript 5 enforces stricter syntax and error-checking rules, which can help catch 
common coding mistakes and make it easier to write secure and maintainable code. Here are some of the 
key features of strict mode:

1. Disallowing the use of undeclared variables: In strict mode, attempting to assign a value to an undeclared 
variable will result in a reference error.

Without "use strict"
x = 10; // No error - x is automatically created as a global variable
console.log(x); // Output: 10

With "use strict"
"use strict";
y = 20; // Throws a reference error - y is not declared
console.log(y); // This line is not reached because the error is thrown

"use strict" should be at the top of the script


2. Eliminating the "this" coercion: In strict mode, the "this" keyword does not automatically refer to 
the global object when used in a function that is called without an explicit "this" context.

3. Deleting a variable (or object) is not allowed.

"use strict";
let x = 3.14;
delete x;   // This will cause an error

4. Deleting a function is not allowed.

"use strict";
function x(p1, p2) {};
delete x;                // This will cause an error 

5. Duplicating a parameter name is not allowed:

"use strict";
function x(p1, p1) {};   // This will cause an error

6. Writing to a read-only property is not allowed:

"use strict";
const obj = {};
Object.defineProperty(obj, "x", {value:0, writable:false});

obj.x = 3.14;            // This will cause an error

7. Writing to a get-only property is not allowed:

"use strict";
var obj = {
  get name() {
    return "Alice";
  }
};
obj.name = "Bob"; // Throws a type error - cannot write to get-only property


8. Deleting an undeletable property is not allowed:

"use strict";
delete Object.prototype; // This will cause an error

9. The word eval and arguments cannot be used as a variable.
10. The with statement is not allowed:

"use strict";
with (Math){x = cos(2)}; // This will cause an error

11. eval() is not allowed to create variables in the scope from which it was called.

"use strict";
eval ("x = 2");
alert (x);      // This will cause an error

12. In strict mode, eval() can not declare a variable using the var keyword:

"use strict";
eval ("var x = 2");
alert (x);    // This will cause an error

13. eval() can not declare a variable using the let keyword:

eval ("let x = 2");
alert (x);        // This will cause an error

14. In strict mode we can not use following keyword as variable names - implements, interface, let, package, private,
protected, public, static, yield. 

*/