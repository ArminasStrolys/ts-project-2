const drink = {
  color: 'black',
  carbonated: true,
  sugar: 50,
};

// type alias instead of repeating annotation every time
type Drink = [string, boolean, number];

// const pepsi = ['black', true, 40]

// makes a tuple from array
const pepsi: [string, boolean, number] = ['black', true, 40];
const coffee: Drink = ['black', false, 5];

// error msg
// pepsi[0] = 85

// tuples > objects
// tuples are unclear and hard to figure out what the values mean

const carSpecsTuple: [number, number] = [350, 3500];

const carStatsObject = {
  horsePower: 350,
  weight: 3500,
};
