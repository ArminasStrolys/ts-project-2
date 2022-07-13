const volkswagen = {
  model: 'passat',
  year: 1997,
  // year: new Date();  Exmpl. 1.1
  reliable: false,
  summary(): string {
    return `The good old ${this.model} B5 made in ${this.year}`;
  },
};

// too long to write all type annotations
const printCar = (car: {
  model: string;
  year: number;
  reliable: boolean;
  summary(): string;
}): void => {
  console.log(`Volkswagen ${car.model}`);
  console.log(`Made in...: ${car.year}`);
  console.log(`Is it reliable? -${car.model}`);
  console.log(car.summary());
};

printCar(volkswagen);

// -------------------------------Example below

interface CarInfo {
  model: string;
  year: number;
  // year: Date; Exmpl. 1.2
  reliable: boolean;
}

const printCarY = (car: CarInfo): void => {
  console.log(`Volkswagen ${car.model}`);
  console.log(`Made in...: ${car.year}`);
  console.log(`Is it reliable? -${car.model}`);
};

printCarY(volkswagen);

// ------------------------------- even shorter syntax example

interface ShortInfo {
  summary(): string;
}

const carInfo = (info: ShortInfo): void => {
  console.log(info.summary);
};

carInfo(volkswagen);

// -----------------------------
// same interface can be reused as different counterparts as long as types match

const beverage = {
  color: 'green',
  carbonated: true,
  sugar: 80,
  summary(): string {
    return `It's ${this.color} and has ${this.sugar} grams of sugar.`;
  },
};
