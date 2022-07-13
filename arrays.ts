const carMakers: string[] = ['BMW', 'MB', 'Opel', 'Audi'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [['E90'], ['C220'], ['Astra'], ['A5']];

// help with inference when extracting values
const carz = carMakers[0];
const myCar = carMakers.pop();

// prevent incompatible values
// shows error
// carMakers.push(100);

// help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// flexible types

// const importantDates = [new Date(), '2022-12-22']
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2099-01-01');
importantDates.push(new Date());
