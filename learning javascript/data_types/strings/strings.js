document.body.innerHTML = "Strings";
console.log("Hello world");    

// To create a string we surround any text with quotes
console.log("Apathetic");

// String concatenation
console.log("I am " + "Apathetic");

console.log(" ");

// The typeof operator in javascript
console.log(typeof "Apathetic"); // string
console.log(typeof true); // boolean
console.log(typeof 3); // number
console.log(typeof 3.4); // number

console.log(typeof [1,2,3,4,5]); // object
console.log(typeof {"name": "Apathetic"}); // object

console.log(Array.isArray([1,2,3,4,5])); // true
console.log(Array.isArray({"name": "Apathetic"})); // false
console.log(typeof "hello" + 1); // string1 because of type coercion

console.log(" ");

console.log("$" + 20.93 + 239.23) // $20.93239.23

/* Order of operations
String also follow order of operations

1. (...)
2. * /
3. + -

*/
console.log("$" + (30.23 + 59.2)); // 89.43

console.log(' ')

/* 3 ways to create strings 

1. '...'
2. "..."
3. `...` Template Strings */

console.log("String");
console.log('String');
console.log(`String`); // Template string

// Interpolation = insert value directly into a string
console.log(`Items ${1 + 1}: $${(2032 + 299) / 100}`) // 2032 cents + 299 cents / 100

// Template strings can also do multi-line string
console.log(`Hi Apathetic,\nYou are hired as a Senior Software Developer at Google\n- Team Google`);

console.log(" ");

/* ---------------------------------------------------------------------------- */
// Lesson 3 Exercises

// 3a 
console.log('My name is: ');

// 3b
console.log('Apathetic');

// 3c
console.log('My name is: ' + 'Apathetic');

// 3d
let coffee = 5
let bagel = 3
let total = coffee + bagel
console.log("Total cost: $" + total);

// 3e
console.log(`Total cost: $${total}`);

// 3f
alert(`Total cost: $${total}`);

// 3g 
coffee = 5.99
bagel = 2.95
console.log('Total cost: $' +  (coffee*100 + bagel*100) / 100);

// 3h
console.log(`Total cost: $${(coffee*100 + bagel*100) / 100}`);

// 3i
alert(`Total cost: $${(coffee*100 + bagel*100) / 100}`);

// 3j
alert(`Total cost: $${(coffee*100 + bagel*100) / 100}
Thank you, come again!
`)
/* -------------------------------------------------------------------------- */
