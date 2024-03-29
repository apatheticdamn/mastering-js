/* ---------------------------------------------------------------- */
// Lesson 1 Exercises

alert("Good morning!"); // Good morning in the pop up
alert("Apathetic"); // Displaying my name in the pop up

console.log(" ") // Blank space for more readablitiy of the output

// Basic math
console.log(10 + 5);
console.log(2/0);
console.log(20-5);
console.log(2+2-5);
console.log(3.2 * 2); // Use asterisk (*) for multiplication

/* ------------------------------------------------------------- */

document.body.innerHTML = "Javascript Basics";

console.log(" ")
// Order of Operations

/* (Multiplicaion and Division) are done first
(Addition and Subtraction) are done after */

/* 1. (...)
2. (* and /)
3. (+ and -) */

console.log(1+1 * 3);
console.log(2*2 + 2-3);
console.log(3+3 / 2); // 3 will be divided by 2 first because of the order of the operations

console.log(" ")

// If we have multiplication and division both, then the calculation will be from left from right and it's same for addition and subtraction

console.log(3 * 2 / 2);
console.log(2 + 2 - 3);
console.log(3 * 9 / 3);

console.log(" ")

// Using (...) 
console.log((1 + 2) / 2);
console.log((3 + 3) / 4);
console.log((1 + 1) * 2);
console.log((20 + 223.23 + 12) * 1/10); // same as (20 + 223.23 + 12) * 0.1
console.log((2000 + 809) / 100)

console.log(" ")

// Rounding Numbers 
console.log(Math.round(2.4));
console.log(Math.round(2.5));
console.log(Math.round(2.6));

console.log(" ")

/* ------------------------------------------------------------------------- */
// Lesson 2 Exercises

// 2a
let soup = 10
let burgers = 8 
let ice_cream = 5
let total = soup + burgers*2 + ice_cream
console.log(total)

// 2b
console.log(total / 3)

// 2c
let toaster = 18.50
let shirt = 7.50
console.log(toaster + shirt*2)

// 2d
console.log((toaster + shirt*2) * (1/100)) // 10% tax for total

// 2e
console.log((toaster + shirt*2) * (2/100)) // 20% tax