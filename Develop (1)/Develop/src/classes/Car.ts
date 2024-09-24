import { Vehicle } from './Vehicle.js';
import { Driveable } from '../interfaces/Driveable.js';
import Wheel from './Wheel.js';

class Car extends Vehicle implements Driveable {
  fuelType: string;
  numberOfDoors: number;
  wheels: Wheel[];

  constructor(make: string, model: string, year: number, fuelType: string, numberOfDoors: number, maxSpeed: number) {
    super(make, model, year, maxSpeed);
    this.fuelType = fuelType;
    this.numberOfDoors = numberOfDoors;
    this.wheels = Array(4).fill(new Wheel());
  }

  printDetails() {
    console.log(`\n--- Car Details ---`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Fuel Type: ${this.fuelType}`);
    console.log(`Number of Doors: ${this.numberOfDoors}`);
    console.log(`Max Speed: ${this.maxSpeed} mph`);  // Changed to mph
    console.log(`Wheels: Diameter = ${this.wheels[0].diameterValue} inches, Brand = ${this.wheels[0].tireBrandValue}\n`);
  }
}

export { Car };
