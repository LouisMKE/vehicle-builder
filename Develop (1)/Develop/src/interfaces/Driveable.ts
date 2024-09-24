interface Driveable {
  started: boolean;
  currentSpeed: number;
  maxSpeed: number;

  start(): void;
  accelerate(change: number): void;
  decelerate(change: number): void;
  stop(): void;
  turn(direction: string): void;
  reverse(): void;
}

export { Driveable };
