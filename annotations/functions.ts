// no type inference for arguments
const add = (a: number, b: number): number => {
  return a + b;
};

// if return left for inference, it might return void and will not inform of error
// const subtract = (a:number, b:number) => {
//    a -b
// }
const subtract = (a: number, b: number): number => {
  return a - b;
};
// thats why we need to anotate the return always

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
  // void can return undefined or null
};

const throwError = (message: string): never => {
  throw new Error(message);
  // never gonna return any value
};

const forecast = {
  date: new Date(),
  weather: 'sunny',
};

// const logWeather = (forecast: { date: Date; weather: string }): void => {
//   console.log(forecast.date);
//   console.log(forecast.weather);
// };

// destructuring with annotation
const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

// ES 2015
// const logWeather = ({ date, weather }) => {
//   console.log(date)
//   console.log(weather)
// }

logWeather(forecast);
