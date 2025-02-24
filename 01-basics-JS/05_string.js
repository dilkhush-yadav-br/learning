// property 
// length : Returns the length of the string.
let len ="Dilkhush"
let str =""
console.log(len.length) // 8
console.log(str.length) // 0

// charAT(index) : returns character at specified index
console.log(len.charAt(0))
console.log(len.charAt(1))

// charCodeAt(index) : returns unicode of a character at specified index
console.log(len.charCodeAt(0))
console.log(len.charCodeAt(6))

// concat(...strings) :Joins two or more strings into one string.	

let str1 = "Hello";
console.log(str1.concat(" World"));

// includes(searchString) : Checks if the string contains the specified substring.

console.log(str1.includes("ello"));   // true
console.log(str1.includes("y"));  //false

// indexOf(searchString) : Returns the index of the first occurrence of a substring.	
let str2 = "yadav"
console.log(str2.indexOf("y"))
console.log(str2.indexOf("v"))
console.log(str2.indexOf("a")) // here a is 2 times present in "yadav" but it returns the first occurences of string i.e 1

// lastIndexOf(searchString) : Returns the index of the last occurrence of a substring.	
console.log(str2.lastIndexOf("a")) // here a is 2 times present in "yadav" but it returns the last occurences of string i.e 3

// match(regex) : match a string against a regular  and returns array of matches
let str3 = "The rain in Spain"
console.log(str3.match(/rain/));  // Output: [ 'rain', index: 4, input: 'The rain in Spain', groups: undefined ]

// Example 1: Using Global Flag "g" : it returns all matches in the string
let str4 = "apple orange apple banana apple";
let result = str4.match(/apple/g);
console.log(result);  // Output: [ 'apple', 'apple', 'apple' ]

// Example 2: Matching Digits with \d : "\d" match any digit (0-9).
let str5 = "The house number is 1234"
console.log(str5.match(/\d+/)); // [ '1234',index: 20,input: 'The house number is 1234',groups: undefined]

// Example 3: Matching Word Boundaries with \b
// \b represents a word boundary, useful for matching whole words.

let str6 = "The fox is quick";
console.log(str6.match(/\bfox\b/));  // Output: [ 'fox', index: 4, input: 'The fox is quick', groups: undefined ]
// Explanation: It matches "fox" as a whole word, and the \b ensures it's not part of another word (like "foxy").

// Example 4: Using Capturing Groups
// You can use parentheses () to create capturing groups.

let str7 = "John's phone number is 123-456-7890.";
let res = str7.match(/(\d{3})-(\d{3})-(\d{4})/);
console.log(res);  // Output: [ '123-456-7890', '123', '456', '7890', index: 22, input: "John's phone number is 123-456-7890.", groups: undefined ]

// Example 5: Matching Words Using \w
// \w matches any word character (letters, digits, and underscores).

let str8 = "Hello, how are you?";
console.log(str8.match(/\w+/));  // Output: [ 'Hello', index: 0, input: 'Hello, how are you?', groups: undefined ]

// replace(searchValue, newValue) : replace first occurence of substring with new value
// only replace first match
let str9 = "Hello Java"
console.log(str9.replace("Java","JavaScript")); // Hello JavaScript

let str10 = "apple banana apple "
console.log(str10.replace("apple", "orange")); // orange banana apple

// slice(startIndex, endIndex) vs substring(startIndex, endIndex) vs substr(startIndex, length)
// slice() works the same way as substring(), but split allows negative indices, counting from the end of the string.
// substr() uses start index and length, whereas substring() uses start index and end index. Additionally, substring() swaps the indices if start > end, but substr() does not.

// Example 1: substr(startIndex, length)

let str11 = "Hello, World!";
console.log(str11.substr(7, 5));  // Output: "World"

// substr() does not swap the indices
console.log(str11.substr(10, 5));  // Output:ld!

// Example 2:substring(startIndex, endIndex)
// endIndex is excluded
console.log(str11.substring(7, 12));  // Output: "World"
// Using substring() with swapped indices
console.log(str11.substring(12, 7));  // Output: "World"

// Example 3: slice(startIndex, endIndex)
// endIndex is excluded
// -ve is counting from end :  -1 is "e"  4
                            // -2 is "c"  3
                            // -3 is "i"  2
                            // -4 is "l"  1
                            // -5 is "s"  0

let slc = "slice"
console.log(slc.slice(0,2)); // sl
console.log(slc.slice(1,4)); // lic
console.log(slc.slice(-5,2)); // sl

// split(separator, limit) : split string into array with seperator
let str12 ="Rahul Sahil Arthav Archit"
console.log(str12.split(" ")); // [ 'Rahul', 'Sahil', 'Arthav', 'Archit' ]

// toLowerCase() : Converts the string to lowercase.
let str13 = "GOOD MORNING BABY"
console.log(str13.toLowerCase()); // good morning baby

// toUpperCase() : Converts the string to uppercase.
let str14 = "good morning baby"
console.log(str14.toUpperCase()); //GOOD MORNING BABY

// trim() : remove whitespace from both end of string 

let str15 = "    hey hi hello     "
console.log(str15.trim());
console.log(str15.length); // before trim : 21
console.log(str15.trim().length); // after trim : 12

// trimStart()/trimLeft() : trim from left/start
console.log(str15.trimStart()); //hey hi hello
console.log(str15.trimStart().length); // 17
// trimEnd()/trimRight() : trim from end/right
console.log(str15.trimEnd()); //'    hey hi hello'
console.log(str15.trimEnd().length); // 16

// startsWith(searchString)	 : Checks if the string starts with a specific substring.
let sta = "Hello World";
console.log(sta.startsWith("Hello")); //true

// endsWith(searchString) : ends with specified string
let ends = "JavaScript";
console.log(ends.endsWith("Java")); //false
console.log(ends.endsWith("Script")); // true

// repeat(count) : Repeats the string a specified number of times.
let repeatStr = "Hello"
console.log(repeatStr.repeat(3)); //HelloHelloHello

let repeatStr1 = "!!"
console.log(repeatStr1.repeat(3)); //!!!!!!















