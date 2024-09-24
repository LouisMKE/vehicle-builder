import { Truck } from '../classes/Truck.js';  // Add .js extension
import { Motorbike } from '../classes/Motorbike.js';  // Add .js extension
import { Car } from '../classes/Car.js';  // Add .js extension

interface AbleToTow {
  towingCapacity: number;
  tow(vehicle: Truck | Motorbike | Car): void;
}

export default AbleToTow;
