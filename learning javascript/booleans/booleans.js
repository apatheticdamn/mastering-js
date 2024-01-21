// There are only two booleans in javascript 
// 1. true;
// 2. false;


/* Comparison operators
 * > greater than
 * < less than
 * >= greater than or equal to
 * <= less than or equal to
 * === equal to
 * !== not equal to
*/

/* Order of operations
 * 1. (...)
 * 2. * /
 * 3. + -
 * 4. Comparison Operators
 */

console.log(200 < 300); // true
console.log(300 < 200); // false

console.log(typeof 'true'); // string
console.log(typeof true); // bool


console.log(30 == '30'); // true
console.log(30 === '30'); // false
console.log(30 !== 30) // false

console.log(" ");

const age = 18;

if (age >= 18 && age <= 99) {
    console.log("You can watch anything");
} else if (age === 100) {
    console.log("You are a century years old");
} else if (age > 100) {
    console.log("You want to die or not?");
} else if (age < 0) {
    console.log("You haven't been born yet, wait till your mom gets pregnent.")
} else if (age > 3 && age < 6) {
    console.log("Go suck on your mama's t*ts");
} else if (age >= 6 && age < 13) {
    console.log("Nah, just watch cartoons and enjoy your childhood");
} else if (age < 18) {
    console.log("You should focus on your goals teen");
} else {
    console.log("Are you stupid or something?");
}









