/* Loops are used to execute a piece of code again and again
*/

// for loop
for (let i = 1; i <= 5; i++) {
  console.log("I am the best programmer in the entire world.");
}

// Calculating the sum of n numbers 
sum = 0;
n = 10;

for (let count = 1; count <= n; count++) {
  sum += count;
}
console.log("sum: " + sum);
// if you try to console log the count, javascript will throw an error because of the scope of the count variable

// while loop 
let i = 1;
while (i <= 10) {
  console.log("I can build anything!");
  i++;
}

// do while loop, this loop will run atleast once even if the condition of the while loop is false
let j = 11;
do {
  console.log("Miyamoto Musashi")
} while (j <= 10); 


// for of loop
string = "Hello world!";
position = 1;
for (char of string) {
  console.log(`${position}. Character=`, char)
  position++
}

// for in loop 
obj = {
  id: "31345512",
  name: "mark",
  workRating: 92.3
}
for (let key in obj) {
  console.log(`Key: ${key}\nValue: ${obj[key]}`)
}

/* -------------------------------------------- */
// Exercises

// Printing all even numbers from 0 to 20

for (let evenNum = 2; evenNum<=20; evenNum++) {
  if (evenNum % 2 ===0) {
    console.log(evenNum)
  } 
}

// Guess game
const secretNum = 5
let guessNum = prompt("Guess the secret number: ");
while (secretNum != guessNum) {
  guessNum = prompt("Wrong guess, Guess again: ")
}
console.log("Yay, congratulations on guessing the secret number!")