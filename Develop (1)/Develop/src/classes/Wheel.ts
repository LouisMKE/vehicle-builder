class Wheel {
  private diameter: number;
  private tireBrand: string;

  constructor(diameter: number = 18, tireBrand: string = "GoodYear") {
    this.diameter = diameter;
    this.tireBrand = tireBrand;
  }

  get diameterValue(): number {
    return this.diameter;
  }

  set diameterValue(newDiameter: number) {
    this.diameter = newDiameter;
  }

  get tireBrandValue(): string {
    return this.tireBrand;
  }

  set tireBrandValue(newTireBrand: string) {
    this.tireBrand = newTireBrand;
  }
}

export default Wheel;
