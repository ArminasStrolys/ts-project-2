// const oranges: number = 9;
// let oranges: number = 9;
let oranges = 9;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// Built in objects

let now: Date = new Date();

oranges = 10;

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [6, 8, 1];
let truths: boolean[] = [true, false, true];

// Classes
class Car {}

let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 40,
  y: 90,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  // void is what we expect to return
  console.log(i);
};

// When to use annotations

// 1) Function that returns the 'any' type
const json = '{"x":30, "y":65}';
const coordinates: { x: number; y: number } = JSON.parse(json);
// JSON.parse() returns any type
console.log(coordinates);

// 2) When we declare a variable on one line and initialize it later
let words = ['red', 'green', 'blue'];
// let foundWord
// let foundWord = false
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -25, -5, 18];
let numberAboveZero: boolean | number = false;
// boolean or number

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
