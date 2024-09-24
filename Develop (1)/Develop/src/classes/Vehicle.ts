import { Driveable } from '../interfaces/Driveable.js';

class Vehicle implements Driveable {
  make: string;
  model: string;
  year: number;
  started = false;
  currentSpeed = 0;
  maxSpeed: number;  // Add maxSpeed

  constructor(make: string, model: string, year: number, maxSpeed: number) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.maxSpeed = maxSpeed;  // Initialize maxSpeed
  }

  start() {
    this.started = true;
    console.log("Vehicle started");
  }

  accelerate(change: number) {
    if (this.started) {
      this.currentSpeed += change;
      if (this.currentSpeed > this.maxSpeed) {
        this.currentSpeed = this.maxSpeed;  // Prevent exceeding maxSpeed
      }
      console.log(`Accelerated by ${change} km/h, current speed: ${this.currentSpeed} km/h`);
    }
  }

  decelerate(change: number) {
    if (this.started && this.currentSpeed >= change) {
      this.currentSpeed -= change;
      console.log(`Decelerated by ${change} km/h, current speed: ${this.currentSpeed} km/h`);
    }
  }

  stop() {
    this.currentSpeed = 0;
    console.log("Vehicle stopped");
  }

  turn(direction: string) {
    console.log(`Turning ${direction}`);
  }

  reverse() {
    console.log("Reversing...");
  }
}

export { Vehicle };
