//String methods

//length property
//returns the number of characters in 'JavaScript'
//length property is read-only unlike array

let string1 = "JavaScript";
console.log(string1.length); //10

string1.length = 4;
console.log(string1.length); //10 //remains unchanged
console.log(string1); //JavaScript


//replace()
//The replace() method returns a new string with the specified string/regex replaced.

//str.replace(pattern, replacement)
//The replace() method takes in:
//pattern - either a string or a regex that is to be replaced
//replacement - the pattern is replaced with this replacement (can be either a string 
//or a function)
//The replace() method returns a new string with the specified pattern replaced.

const text = "Java is awesome. Java is fun.";

let new_text = text.replace("Java", "JavaScript");
console.log(new_text); //JavaScript is awesome. Java is fun.
//Here the first occurrence of Java is replaced with JavaScript.

const new_text1 = text.replace(/Java/g, "JavaScript");
console.log(new_text1); //JavaScript is awesome. JavaScript is fun.



//indexOf()
//The string indexOf() method returns the index of the first occurence of 
//the substring in a string.

//str.indexOf(searchValue, fromIndex)

//The indexOf() method takes in:
//searchValue - The value to search for in the string. If no string is provided explicitly, 
//"undefined" will be searched.
//fromIndex (optional) - The index to start the search at. By default it is 0. 
//If fromIndex < 0, the search starts at index 0.
//Returns the first index of the value in the string if it is present at least once.
//Returns -1 if the value is not found in the string.
//The indexOf() method is case sensitive.
//For empty string searchValue and fromIndex less than the string's length, 
//indexOf returns the value the same as fromIndex.
//for empty string searchValue and fromIndex greater than the string's length, 
//indexOf returns the string's length.

console.log("Programiz JavaScript".indexOf("", 0)); // returns 0
console.log("Programiz JavaScript".indexOf("", 3)); // returns 3

// string length here is 20
console.log("Programiz JavaScript".indexOf("", 25)); // returns 20
console.log("Programiz JavaScript".indexOf("", 21)); // returns 20

let str = "JavaScript is the world's most misunderstood programming language.";

console.log(str.indexOf("most")); //26
console.log(str.indexOf("Python")); //-1


//lastIndexOf()
//The lastIndexOf() method returns the last index of occurence of 
//a given substring in the string.

//str.lastIndexOf(searchValue, fromIndex)

//The lastIndexOf() method takes in:
//fromIndex (optional) - The index to start searching the string backwards. 
//By default it is +Infinity.
//If fromIndex >= string.length, the whole string is searched.
//If fromIndex < 0, it is considered to be the same as 0.
//the last index of the value in the string if it is present at least once.
//fromIndex if no string is provided explicitly.
//The method returns -1 if substring is not found in the given string.

let str1 = "Programming";
console.log(str1.lastIndexOf("m")); //7
console.log(str1.lastIndexOf("g", 6)); //3
//Here searching is started from index 6 in backward direction

let str2 = "I love JavaScript";
console.log(str2.lastIndexOf("Hello")); //-1 //Not found


//startsWith()
//The startsWith() method returns true if a string begins with specified character(s). 
//If not, it returns false.
//The startsWith() method takes in :
//searchString - The characters to be searched for at the beginning of str.
//position (optional) - The position in str to start searching for searchString. 
//Default value is 0.
//startsWith() Returns true if the given characters are found at the beginning of the string.
//startsWith() Returns false if given characters are not found at the beginning of the string.
//The startsWith() method is case sensitive.

let sentence = "Java is to JavaScript what Car is to Carpet.";

console.log(sentence.startsWith("J")); //true
console.log(sentence.startsWith("j")); //false
console.log(sentence.startsWith("JavaScript", 11)); //true


//endsWith()
//The endsWith() method returns true if a string ends with the specified string. 
//If not, the method returns false.

//str.endsWith(searchString, length)
//The endsWith() method takes two parameters:
//searchString - The characters to be searched for at the end of str.
//length (optional) - It is used as the length of str where searchString is searched. 
//Default value is str.length.
//The endswith() method returns:
//true - if the given characters are found at the end of the string.
//false - if given characters are not found at the end of the string.

let sentence1 = "JavaScript is fun";
console.log(sentence1.endsWith("fun")); //true
console.log(sentence1.endsWith("Fun")); //false

// second argument specifies the portion of string to consider
console.log(sentence1.endsWith("JavaScript", 10)); //true


//toUpperCase()
//The toUpperCase() method returns the string converted to uppercase.

//str.toUpperCase()

//Returns a new string representing the calling string converted to uppercase.
//The toUpperCase() method raises TypeError when called on null or undefined.
//The toUpperCase() method does not change the original string.

let s = "Hello World!";
console.log(s.toUpperCase()); //HELLO WORLD!



//toLowerCase()
//The toLowerCase() method returns the string converted to lowercase.

//str.toLowerCase()

//Returns a new string representing the calling string converted to lowercase.
//The toLowerCase() method raises TypeError when called on null or undefined.
//The toLowerCase() method does not change the original string.

console.log(s.toLowerCase()); //hello world!



//includes()
//The includes() method checks if one string can be found inside another string.

//str.includes(searchString, position)

//The includes() method takes in:

//searchString - A string to be searched for within str.
//position (optional) - The position within str to begin searching for searchString. 
//By default, it is 0.
//includes() Returns true if searchString is found anywhere within str.
//includes() Returns false if searchString is not found anywhere within str.
//The includes() method is case sensitive.


let sentence2 = "Java is to JavaScript what Car is to Carpet.";

console.log(sentence2.includes("Java")); //true
console.log(sentence2.includes("Java", 20)); //false


//substring()
//The substring() method returns a specified part of the string between start and end indexes.

//str.substring(indexStart, indexEnd)

//The substring() method takes in:
//indexStart - The index of the first character to start including in the returned substring.
//indexEnd (optional) - The index before which to stop extraction. (Exclusive) If omitted, 
//it extracts till the end of the string.

//Any argument value < 0 is treated as 0.
//Any argument value > str.length is treated as str.length.
//Any NaN argument value is treated as 0.
//If indexStart is greater than indexEnd, the two arguments are swapped, 
//i.e. str.substring(a, b) will be str.substring(b, a).
//substring() does not change the original string.

let string = "Programiz JavaScript Tutorials";

// first character
substr1 = string.substring(0, 1);
console.log(substr1); // P

// if start > end, they are swapped
substr2 = string.substring(1, 0);
console.log(substr2); // P

// From 11th to last character
substr3 = string.substring(10);
console.log(substr3); // JavaScript Tutorials

// the extreme values are 0 and str.length

// same as string.substring(0)
substr4 = string.substring(-44, 90);
console.log(substr4); // Programiz JavaScript Tutorials

// indexEnd is exclusive
substr5 = string.substring(0, string.length - 1);
console.log(substr5); // Programiz JavaScript Tutorial


//split()
//The split() method divides a string into a list of substrings and returns them as an array.
//str.split(separator, limit)
//The split() method takes in:
//separator (optional) - The pattern (string or regular expression) describing where each 
//split should occur.
//limit (optional) - A non-negative integer limiting the number of pieces to split the 
//given string into.
//Returns an Array of strings, split at each point where the 
//separator occurs in the given string.
//The split() method does not change the original string.

console.log("ABCDEF".split("")); // [ 'A', 'B', 'C', 'D', 'E', 'F' ]

const tex = "Java is awesome. Java is fun.";

console.log(tex.split(".")); //['Java is awesome', ' Java is fun', '']

// only split string to maximum to parts
console.log(tex.split(".", 2)); //['Java is awesome', ' Java is fun']



//trim()
//The trim() method removes whitespace from both ends of a string.

//str.trim()

//Returns a new string representing the str stripped of whitespace from both ends.
//Whitespace is all the whitespace characters (space, tab, no-break space, etc.) and 
//all the line terminator characters (LF, CR, etc.).
//The trim() method does not change the original string.

let strD = "   foo  ";
console.log(strD.trim()); // 'foo'


//slice()
//The slice() method extracts and returns a section of a string.

//str.slice(beginIndex, endIndex)

//The slice() method takes in:
//beginIndex - Starting index of the selection
//endIndex (optional) - Ending index of the selection (Exclusive) By default, 
//it extracts till the end of the string.
//Returns a new string containing the extracted section of the string.
//The slice() method does not change the original string.

const strE = "JavaScript is a very absurd programming language.";

// from index 28 to end
console.log(strE.slice(28)); // 'programming language.'

// from index 4 to 14
console.log(strE.slice(4, 15)); // 'Script is a'


//concat()
//The concat() method concatenates given arguments to the given string.

//str.concat(str1, ..., strN)

//The concat() method takes in an arbitrary number of strings to concatenate to str.
//Returns a new string containing the combined text of the strings provided.

console.log("".concat({})); // [object Object]
console.log("".concat(null)); // null
console.log("".concat(true)); // true
console.log("".concat(4, 5)); // 45

let str11 = "Hello";
let str12 = "World";

// concatenating two strings
let newStr = str11.concat(", ", str12, "!");
console.log(newStr); // Hello, World!


const person = {
    name: "John",
    age: 30,
    toString() {
      return `Person { name: "${this.name}", age: ${this.age} }`;
    }
  };

console.log(person);
console.log(person.toString());
