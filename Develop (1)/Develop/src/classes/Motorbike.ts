import { Vehicle } from './Vehicle.js';
import { Driveable } from '../interfaces/Driveable.js';
import Wheel from './Wheel.js';

class Motorbike extends Vehicle implements Driveable {
  engineType: string;
  hasSidecar: boolean;
  topSpeed: number;
  wheels: Wheel[];

  constructor(make: string, model: string, year: number, engineType: string, hasSidecar: boolean, topSpeed: number) {
    super(make, model, year, topSpeed);
    this.engineType = engineType;
    this.hasSidecar = hasSidecar;
    this.topSpeed = topSpeed;
    this.wheels = Array(2).fill(new Wheel());
  }

  printDetails() {
    console.log(`\n--- Motorbike Details ---`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Engine Type: ${this.engineType}`);
    console.log(`Has Sidecar: ${this.hasSidecar ? 'Yes' : 'No'}`);
    console.log(`Max Speed: ${this.maxSpeed} mph`);  // Changed to mph
    console.log(`Wheels: Diameter = ${this.wheels[0].diameterValue} inches, Brand = ${this.wheels[0].tireBrandValue}\n`);
  }
}

export { Motorbike };
