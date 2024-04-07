//First Question
// let number = 18;
// let firstNumber = 1;
//let lastNumber = 8;
//console.log(firstNumber, " ", +lastNumber); //

//! Task 1 right version
let number = 89;
let firstNumber = parseInt(number / 10); //8.9
let lastNumber = number % 10;
console.log(firstNumber, " ", +lastNumber);

//Second Question
//let number = 198;
//let lastNumber = number % 10;
//let firstNumber = parseInt(number / 100);
//console.log(firstNumber * 10 + lastNumber); //

//3 Question
let children = 4;
let apples = 15;
console.log(apples % children);

//6thquestion
const width = 7;
const length = 5;
const perimetr = 2 * (width + length);

const side = 4;
const perimeterofSquare = 4 * side;

//7th question
//let firstNumber = 25;
//let lastNumber = 85;
//console.log(lastNumber * firstNumber);

//8th question
//let x = 11;
//let y = 5;
//console.log(x ** y);

//9th question
//let number = 12345;
//console.log(
// Math.floor(12345 / 10) );

//10th question
//let number = 20;
//console.log(number % 10);

//11th question
const number = 5679;
const lastNumber = number % 10;
const thirdNumber = parseInt(number / 10) % 10
const secondNumber = parseInt(number / 100) % 10
const firstNumber = parseInt(number / 1000);
const reversedNumber = lastNumber * 1000 + thirdNumber * 100 + secondNumber * 10 + firstNumber
console.log(reversedNumber)

//12 Question
//let number = 55;
//let price = 10;
//console.log(parseInt(number / price);

//13 question
//let x = 2;
//let s = 6 * (x ** 2);
//let v = (x ** 3);
//console.log(v);

//14 question
let number = 156;
const lastNumber = number % 10;
const firstTwoNumber = parseInt(number / 10);
console.log(`${lastNumber}${firstTwoNumber}`);
