import { Vehicle } from './Vehicle.js';
import { Driveable } from '../interfaces/Driveable.js';
import Wheel from './Wheel.js';

class Truck extends Vehicle implements Driveable {
  loadCapacity: number;
  towingCapacity: number;
  numberOfAxles: number;
  wheels: Wheel[];

  constructor(make: string, model: string, year: number, loadCapacity: number, towingCapacity: number, numberOfAxles: number, maxSpeed: number) {
    super(make, model, year, maxSpeed);
    this.loadCapacity = loadCapacity;
    this.towingCapacity = towingCapacity;
    this.numberOfAxles = numberOfAxles;
    this.wheels = Array(6).fill(new Wheel());
  }

  printDetails() {
    console.log(`\n--- Truck Details ---`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Load Capacity: ${this.loadCapacity} kg`);
    console.log(`Towing Capacity: ${this.towingCapacity} kg`);
    console.log(`Number of Axles: ${this.numberOfAxles}`);
    console.log(`Max Speed: ${this.maxSpeed} mph`);  // Changed to mph
    console.log(`Wheels: Diameter = ${this.wheels[0].diameterValue} inches, Brand = ${this.wheels[0].tireBrandValue}\n`);
  }
}

export { Truck };
