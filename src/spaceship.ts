import { Planet, RockyPlanet } from "./planet";
import { getRandomFloat, getRandomInt } from "./random";
export abstract class SpaceShip {
  spaceShipType: String
  capacity: number;
  fuelVolume: number;
  speed: number;
  autonomy: number;
  compatibility: string[];
  constructor(
    capacity: number,
    speed: number,
    autonomy: number,
    fuelVolume: number,
    compatibility: string[],
    spaceShipType: string,
  ) {
    this.capacity = capacity;
    this.speed = speed;
    this.autonomy = autonomy;
    this.fuelVolume = fuelVolume;
    this.compatibility = compatibility;
    this.spaceShipType = spaceShipType;
  }

  abstract enoughFuel(
    pla: Planet
  ): boolean;
  abstract canCarry(weight: number): boolean;
  abstract compatiblePlanet(planet: string): boolean;
}
// consertar os métodos enoughFuel e canCarry nas subclasses.
export class cargoShip extends SpaceShip {
  constructor() {
    super(
      getRandomInt(1000, 1500),
      getRandomInt(200, 250),
      getRandomFloat(0.5, 1),
      getRandomInt(4500, 6000),
      ["RockyPlanet", "ColdPlanet"],
      'cargoShip',
    );
  }
  enoughFuel(pla: Planet): boolean {
    return this.fuelVolume > pla.distance / this.autonomy;
  }
  canCarry(weight: number): boolean {
    return this.capacity > weight;
  }
  compatiblePlanet(planet: string): boolean {
    for(const star of this.compatibility){
      if( star == planet){
        return true
      }
    }
    return false
  }
}
export class ScoutShip extends SpaceShip {
  constructor() {
    super(
      getRandomInt(200, 250),
      getRandomInt(600, 700),
      getRandomFloat(2, 3),
      getRandomInt(2500, 3000),
      ["RockyPlanet", "GassyPlanet", "ColdPlanet", "MagnetiPlanet"],
      'ScoutShip',
    );
  }
  enoughFuel(pla: Planet): boolean {
    return this.fuelVolume > pla.distance / this.autonomy;
  }
  canCarry(weight: number): boolean {
    return this.capacity > weight;
  }
  compatiblePlanet(planet: string): boolean {
    for(const star of this.compatibility){
      if( star == planet){
        return true
      }
    }
    return false
  }
}
export class FastTransport extends SpaceShip {
  constructor() {
    super(
      getRandomInt(300, 350),
      getRandomInt(900, 1000),
      getRandomFloat(0.3, 1),
      getRandomInt(4000, 5000),
      ["RockyPlanet", "ColdPlanet"],
      'FastTransport',
    );
  }
  enoughFuel(pla: Planet): boolean {
    return this.fuelVolume > pla.distance / this.autonomy;
  }
  canCarry(weight: number): boolean {
    return this.capacity > weight;
  }
  compatiblePlanet(planet: string): boolean {
    for(const star of this.compatibility){
      if( star == planet){
        return true
      }
    }
    return false
  }
}
export class ThermalShieldShip extends SpaceShip {
  constructor() {
    super(
      getRandomInt(400, 500),
      getRandomInt(150, 200),
      getRandomFloat(0.4, 1.5),
      getRandomInt(4500, 5000),
      ["RockyPlanet", "CorrosivePlanet", "ColdPlanet"],
      'FastTransport',
    );
  }

  enoughFuel(pla: Planet): boolean {
    if(this.fuelVolume > pla.distance / this.autonomy){
      return true
    }
    return false
  }
  canCarry(weight: number): boolean {
    return this.capacity > weight;
  }
  compatiblePlanet(planet: string): boolean {
    for(const star of this.compatibility){
      if( star == planet){
        return true
      }
    }
    return false
  }
}
