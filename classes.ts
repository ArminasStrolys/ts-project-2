class Vehicle {
  // public drive(): void {
  //   console.log('100 km/h');
  // }
  // color: string = 'blue';
  color: string;

  constructor(color: string) {
    this.color = color;
  }

  // ---- shortcut
  // constructor(public color: string){}

  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('pink');
console.log(vehicle.color);

class Cars extends Vehicle {
  // child cannot override inherited modifiers from parent (public, protected, private)
  // drive(): void {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log('150 km/h');
  }
  startDrive(): void {
    this.drive();
    this.honk();
  }
}

const cars = new Cars(5, 'brown');
// cars.drive();
cars.startDrive();
// cars.honk();
