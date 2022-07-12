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
