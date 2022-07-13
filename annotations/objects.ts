const profile = {
  name: 'Hank',
  age: 30,
  coordinates: {
    latitude: 1653,
    longtitude: 589655,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

// multiple arguments example
// const { age, name }: { age: number; name: string } = profile;
const { age }: { age: number } = profile;
const {
  coordinates: { latitude, longtitude },
}: { coordinates: { latitude: number; longtitude: number } } = profile;
