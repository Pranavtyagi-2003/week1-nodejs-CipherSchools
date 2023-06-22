//Variables and Datatypes

//Syntax and declaration

var score = 10;     //ES5
let result = 50;    //ES6
const PI = 3.14;    //ES6

console.log(score);
console.log(result);
console.log(PI);

// reassigning of variables

score = 15;
result = 55;
// PI = 3.7

console.log(score);
console.log(result);
console.log(PI);   // Cannot reassigning const varibale

let score1 = 10;
let result1 = "10";

//BEDMAS
let finalScore = score1 + result1;  //Concatenating
let penalty = score1 - result1;     //Mathematical
let totalGames = "five";
let avgScore = finalScore/totalGames
console.log(finalScore,penalty);
console.log(avgScore);

console.log(typeof finalScore)
console.log(typeof penalty)
console.log(typeof avgScore)

let value = (finalScore**2)*10/(penalty + totalGames)
console.log(penalty + totalGames);
console.log(value)  // Value = NaN (not a number)

