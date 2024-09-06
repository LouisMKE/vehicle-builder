import inquirer from 'inquirer';

// Base Vehicle class
class Vehicle {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  displayInfo() {
    console.log(`Vehicle Info: ${this.year} ${this.make} ${this.model}`);
  }
}

// Car class extending Vehicle
class Car extends Vehicle {
  constructor(make: string, model: string, year: number) {
    super(make, model, year);
  }
}

// Truck class extending Vehicle
class Truck extends Vehicle {
  loadCapacity: number;

  constructor(make: string, model: string, year: number, loadCapacity: number) {
    super(make, model, year);
    this.loadCapacity = loadCapacity;
  }

  override displayInfo() {  // Add the 'override' keyword to resolve TS4114
    super.displayInfo();
    console.log(`Load Capacity: ${this.loadCapacity} kg`);
  }

  loadCargo(weight: number) {
    if (weight > this.loadCapacity) {
      console.log('Cannot load cargo: Exceeds truck capacity!');
    } else {
      console.log(`Successfully loaded ${weight} units of cargo.`);
    }
  }
}

// Motorbike class extending Vehicle
class Motorbike extends Vehicle {
  engineType: string;

  constructor(make: string, model: string, year: number, engineType: string) {
    super(make, model, year);
    this.engineType = engineType;
  }

  override displayInfo() {  // Add the 'override' keyword to resolve TS4114
    super.displayInfo();
    console.log(`Engine Type: ${this.engineType}`);
  }
}

// Function to create a vehicle using Inquirer prompts
async function createVehicle() {
  const { vehicleType } = await inquirer.prompt([
    {
      type: 'list',
      name: 'vehicleType',
      message: 'What type of vehicle would you like to create?',
      choices: ['Car', 'Truck', 'Motorbike'],
    },
  ]);

  if (vehicleType === 'Truck') {
    const truckDetails = await inquirer.prompt([
      { type: 'input', name: 'make', message: 'Truck Make:' },
      { type: 'input', name: 'model', message: 'Truck Model:' },
      { type: 'input', name: 'year', message: 'Truck Year:' },
      { type: 'input', name: 'loadCapacity', message: 'Load Capacity (in kg):' },
    ]);

    const truck = new Truck(truckDetails.make, truckDetails.model, +truckDetails.year, +truckDetails.loadCapacity);
    truck.displayInfo();

    // Example of the truck-specific action
    const { weight } = await inquirer.prompt([
      { type: 'input', name: 'weight', message: 'How much cargo to load (in kg)?' }
    ]);
    truck.loadCargo(+weight);

  } else if (vehicleType === 'Motorbike') {
    const bikeDetails = await inquirer.prompt([
      { type: 'input', name: 'make', message: 'Motorbike Make:' },
      { type: 'input', name: 'model', message: 'Motorbike Model:' },
      { type: 'input', name: 'year', message: 'Motorbike Year:' },
      { type: 'input', name: 'engineType', message: 'Engine Type:' },
    ]);

    const motorbike = new Motorbike(bikeDetails.make, bikeDetails.model, +bikeDetails.year, bikeDetails.engineType);
    motorbike.displayInfo();

  } else if (vehicleType === 'Car') {
    const carDetails = await inquirer.prompt([
      { type: 'input', name: 'make', message: 'Car Make:' },
      { type: 'input', name: 'model', message: 'Car Model:' },
      { type: 'input', name: 'year', message: 'Car Year:' },
    ]);

    const car = new Car(carDetails.make, carDetails.model, +carDetails.year);
    car.displayInfo();
  }
}

// Call the createVehicle function to start the vehicle creation process
createVehicle();
