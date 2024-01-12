let variable1 = 30;
console.log("variable1:", variable1) // console.log for displaying the variable in the console

let calc = 20 - 2;
console.log(calc); // we can also do calculation and store them in a variable

/* Variable name restrictions
 * 1. Can't use special words, for example : let
 * 2. Can't start with a number, for example: 2d
 * 3. Can't use special characters except the dollar ($) symbol and the underscore (_) symbol.
 * */

let message = "hello"; console.log(message);


variable1 = 302;
console.log("variable1:", variable1)

variable1 = variable1 + 1; console.log("variable1:", variable1);

const calc2 = calc - 1; console.log(calc2); // the variable defined with const cannot be change later

var calc3 = calc2 + 1; console.log(calc3); 

console.log(typeof message, typeof calc2);
console.log(" ")


/* <----------------------------------------------------------------------> */
// Variables Exercises

// 5a
const name = "Apathetic"; 

// 5b 
console.log(`My name is: ${name}`);

// 5c
const coffee = 5;
const bagel = 3
const soup = 9

const cost = coffee + (bagel*2) + soup;

// 5d
console.log(`Cost of food: $${cost}`);

// 5e
const afterTax = cost * (10/100);

// 5e
console.log(`Cost after 10% tax: $${afterTax}`);

// 5g 
const totalCost = cost + afterTax; console.log(`Total cost: $${totalCost}`);


