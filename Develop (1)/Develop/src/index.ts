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
  fuelType: string;
  numberOfDoors: number;

  constructor(make: string, model: string, year: number, fuelType: string, numberOfDoors: number) {
    super(make, model, year);
    this.fuelType = fuelType;
    this.numberOfDoors = numberOfDoors;
  }

  override displayInfo() {
    super.displayInfo();
    console.log(`Fuel Type: ${this.fuelType}`);
    console.log(`Number of Doors: ${this.numberOfDoors}`);
  }
}

// Truck class extending Vehicle
class Truck extends Vehicle {
  loadCapacity: number;
  towingCapacity: number;
  numberOfAxles: number;

  constructor(make: string, model: string, year: number, loadCapacity: number, towingCapacity: number, numberOfAxles: number) {
    super(make, model, year);
    this.loadCapacity = loadCapacity;
    this.towingCapacity = towingCapacity;
    this.numberOfAxles = numberOfAxles;
  }

  override displayInfo() {
    super.displayInfo();
    console.log(`Load Capacity: ${this.loadCapacity} kg`);
    console.log(`Towing Capacity: ${this.towingCapacity} kg`);
    console.log(`Number of Axles: ${this.numberOfAxles}`);
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
  hasSidecar: boolean;
  topSpeed: number;

  constructor(make: string, model: string, year: number, engineType: string, hasSidecar: boolean, topSpeed: number) {
    super(make, model, year);
    this.engineType = engineType;
    this.hasSidecar = hasSidecar;
    this.topSpeed = topSpeed;
  }

  override displayInfo() {
    super.displayInfo();
    console.log(`Engine Type: ${this.engineType}`);
    console.log(`Has Sidecar: ${this.hasSidecar ? 'Yes' : 'No'}`);
    console.log(`Top Speed: ${this.topSpeed} km/h`);
  }
}

// Store for vehicles
const vehicles: Vehicle[] = [];

// Function to select an existing vehicle
async function selectExistingVehicle() {
  if (vehicles.length === 0) {
    console.log("No vehicles available. Please create one first.");
    return;
  }

  const vehicleChoices = vehicles.map((vehicle, index) => ({
    name: `${vehicle.constructor.name} - ${vehicle.make} ${vehicle.model}`,
    value: index
  }));

  const { selectedVehicleIndex } = await inquirer.prompt([
    {
      type: 'list',
      name: 'selectedVehicleIndex',
      message: 'Select an existing vehicle:',
      choices: vehicleChoices,
    }
  ]);

  return vehicles[selectedVehicleIndex];
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

  let vehicle: Vehicle | undefined;

  switch (vehicleType) {
    case 'Truck':
      const truckDetails = await inquirer.prompt([
        { type: 'input', name: 'make', message: 'Truck Make:' },
        { type: 'input', name: 'model', message: 'Truck Model:' },
        { type: 'input', name: 'year', message: 'Truck Year:' },
        { type: 'input', name: 'loadCapacity', message: 'Load Capacity (in kg):' },
        { type: 'input', name: 'towingCapacity', message: 'Towing Capacity (in kg):' },
        { type: 'input', name: 'numberOfAxles', message: 'Number of Axles:' },
      ]);

      vehicle = new Truck(truckDetails.make, truckDetails.model, +truckDetails.year, +truckDetails.loadCapacity, +truckDetails.towingCapacity, +truckDetails.numberOfAxles);
      break;

    case 'Motorbike':
      const bikeDetails = await inquirer.prompt([
        { type: 'input', name: 'make', message: 'Motorbike Make:' },
        { type: 'input', name: 'model', message: 'Motorbike Model:' },
        { type: 'input', name: 'year', message: 'Motorbike Year:' },
        { type: 'input', name: 'engineType', message: 'Engine Type:' },
        { type: 'confirm', name: 'hasSidecar', message: 'Does the motorbike have a sidecar?' },
        { type: 'input', name: 'topSpeed', message: 'Top Speed (in km/h):' },
      ]);

      vehicle = new Motorbike(bikeDetails.make, bikeDetails.model, +bikeDetails.year, bikeDetails.engineType, bikeDetails.hasSidecar, +bikeDetails.topSpeed);
      break;

    case 'Car':
      const carDetails = await inquirer.prompt([
        { type: 'input', name: 'make', message: 'Car Make:' },
        { type: 'input', name: 'model', message: 'Car Model:' },
        { type: 'input', name: 'year', message: 'Car Year:' },
        { type: 'input', name: 'fuelType', message: 'Fuel Type (e.g., Gas, Electric, Hybrid):' },
        { type: 'input', name: 'numberOfDoors', message: 'Number of Doors:' },
      ]);

      vehicle = new Car(carDetails.make, carDetails.model, +carDetails.year, carDetails.fuelType, +carDetails.numberOfDoors);
      break;
  }

  if (vehicle) {
    vehicles.push(vehicle);
    return vehicle;
  } else {
    throw new Error("Failed to create vehicle");
  }
}

// Function to perform actions on a vehicle
async function performActions(vehicle: Vehicle) {
  let exit = false;

  while (!exit) {
    const { action } = await inquirer.prompt([
      {
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: ['Display Info', vehicle instanceof Truck ? 'Load Cargo' : null, 'Exit'].filter(Boolean),
      }
    ]);

    if (action === 'Display Info') {
      vehicle.displayInfo();
    } else if (action === 'Load Cargo' && vehicle instanceof Truck) {
      const { weight } = await inquirer.prompt([
        { type: 'input', name: 'weight', message: 'How much cargo to load (in kg)?' }
      ]);
      vehicle.loadCargo(+weight);
    } else if (action === 'Exit') {
      exit = true;
    }
  }
}

// Main function to handle user choices
async function mainMenu() {
  let exit = false;

  while (!exit) {
    const { choice } = await inquirer.prompt([
      {
        type: 'list',
        name: 'choice',
        message: 'Would you like to create a new vehicle or use an existing vehicle?',
        choices: ['Create New Vehicle', 'Use Existing Vehicle', 'Exit'],
      },
    ]);

    let vehicle: Vehicle | undefined;

    if (choice === 'Create New Vehicle') {
      vehicle = await createVehicle();
    } else if (choice === 'Use Existing Vehicle') {
      vehicle = await selectExistingVehicle();
    } else if (choice === 'Exit') {
      exit = true;
    }

    if (vehicle) {
      await performActions(vehicle);
    }
  }
}

// Start the application
mainMenu();
