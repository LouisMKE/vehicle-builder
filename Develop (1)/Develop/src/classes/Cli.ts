import { Car } from './Car.js';
import { Truck } from './Truck.js';
import { Motorbike } from './Motorbike.js';
import inquirer from 'inquirer';

class CLI {
  vehicles: (Car | Truck | Motorbike)[] = [];

  async mainMenu() {
    const { action } = await inquirer.prompt([
      {
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: ['Create a new vehicle', 'View a logged vehicle', 'Exit']
      }
    ]);

    if (action === 'Create a new vehicle') {
      await this.addVehicle();
    } else if (action === 'View a logged vehicle') {
      await this.viewLoggedVehicle();
    } else if (action === 'Exit') {
      console.log('Exiting application...');
      process.exit(0);  // Exit the application
    }

    await this.mainMenu();  // Loop back to the main menu after each action
  }

  async addVehicle() {
    const { type } = await inquirer.prompt([
      {
        type: 'list',
        name: 'type',
        message: 'What type of vehicle would you like to create?',
        choices: ['Car', 'Truck', 'Motorbike']
      }
    ]);

    const wheelDetails = await inquirer.prompt([
      { type: 'input', name: 'wheelDiameter', message: 'Enter wheel diameter (in inches):', default: 18 },
      { type: 'input', name: 'tireBrand', message: 'Enter tire brand:', default: 'GoodYear' }
    ]);

    if (type === 'Car') {
      const carDetails = await inquirer.prompt([
        { type: 'input', name: 'make', message: 'Enter car make:' },
        { type: 'input', name: 'model', message: 'Enter car model:' },
        { type: 'input', name: 'year', message: 'Enter car year:' },
        { type: 'input', name: 'fuelType', message: 'Enter fuel type:' },
        { type: 'input', name: 'numberOfDoors', message: 'Enter number of doors:' },
        { type: 'input', name: 'maxSpeed', message: 'Enter max speed (mph):' }  // Updated to mph
      ]);

      const newCar = new Car(
        carDetails.make,
        carDetails.model,
        +carDetails.year,
        carDetails.fuelType,
        +carDetails.numberOfDoors,
        +carDetails.maxSpeed
      );
      newCar.wheels.forEach(wheel => {
        wheel.diameterValue = +wheelDetails.wheelDiameter;
        wheel.tireBrandValue = wheelDetails.tireBrand;
      });

      this.vehicles.push(newCar);
      console.log('Car created successfully.');
    }

    if (type === 'Truck') {
      const truckDetails = await inquirer.prompt([
        { type: 'input', name: 'make', message: 'Enter truck make:' },
        { type: 'input', name: 'model', message: 'Enter truck model:' },
        { type: 'input', name: 'year', message: 'Enter truck year:' },
        { type: 'input', name: 'loadCapacity', message: 'Enter load capacity (in kg):' },
        { type: 'input', name: 'towingCapacity', message: 'Enter towing capacity (in kg):' },
        { type: 'input', name: 'numberOfAxles', message: 'Enter number of axles:' },
        { type: 'input', name: 'maxSpeed', message: 'Enter max speed (mph):' }  // Updated to mph
      ]);

      const newTruck = new Truck(
        truckDetails.make,
        truckDetails.model,
        +truckDetails.year,
        +truckDetails.loadCapacity,
        +truckDetails.towingCapacity,
        +truckDetails.numberOfAxles,
        +truckDetails.maxSpeed
      );
      newTruck.wheels.forEach(wheel => {
        wheel.diameterValue = +wheelDetails.wheelDiameter;
        wheel.tireBrandValue = wheelDetails.tireBrand;
      });

      this.vehicles.push(newTruck);
      console.log('Truck created successfully.');
    }

    if (type === 'Motorbike') {
      const motorbikeDetails = await inquirer.prompt([
        { type: 'input', name: 'make', message: 'Enter motorbike make:' },
        { type: 'input', name: 'model', message: 'Enter motorbike model:' },
        { type: 'input', name: 'year', message: 'Enter motorbike year:' },
        { type: 'input', name: 'engineType', message: 'Enter engine type:' },
        { type: 'confirm', name: 'hasSidecar', message: 'Does it have a sidecar?' },
        { type: 'input', name: 'topSpeed', message: 'Enter top speed (mph):' }  // Updated to mph
      ]);

      const newMotorbike = new Motorbike(
        motorbikeDetails.make,
        motorbikeDetails.model,
        +motorbikeDetails.year,
        motorbikeDetails.engineType,
        motorbikeDetails.hasSidecar,
        +motorbikeDetails.topSpeed
      );
      newMotorbike.wheels.forEach(wheel => {
        wheel.diameterValue = +wheelDetails.wheelDiameter;
        wheel.tireBrandValue = wheelDetails.tireBrand;
      });

      this.vehicles.push(newMotorbike);
      console.log('Motorbike created successfully.');
    }
  }

  async viewLoggedVehicle() {
    if (this.vehicles.length === 0) {
      console.log('No vehicles logged yet.');
      return;
    }

    const { selectedVehicleIndex } = await inquirer.prompt([
      {
        type: 'list',
        name: 'selectedVehicleIndex',
        message: 'Select a vehicle to view its details:',
        choices: this.vehicles.map((vehicle, index) => ({
          name: `${vehicle.constructor.name}: ${vehicle.make} ${vehicle.model}`,
          value: index
        }))
      }
    ]);

    const selectedVehicle = this.vehicles[selectedVehicleIndex];

    const { action } = await inquirer.prompt([
      {
        type: 'list',
        name: 'action',
        message: `What would you like to do with the ${selectedVehicle.constructor.name}?`,
        choices: ['Display Info', 'Go Back']
      }
    ]);

    if (action === 'Display Info') {
      selectedVehicle.printDetails();
    }
  }
}

export { CLI };
