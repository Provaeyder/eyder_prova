import { Planet } from './planet'
import { getRandomFloat, getRandomInt } from '../helper/random'
export abstract class SpaceShip {
  spaceShipType: String
  capacity: number
  fuelVolume: number
  speed: number
  autonomy: number
  compatibility: string[]
  constructor(
    capacity: number,
    speed: number,
    autonomy: number,
    fuelVolume: number,
    compatibility: string[],
    spaceShipType: String
  ) {
    this.capacity = capacity
    this.speed = speed
    this.autonomy = autonomy
    this.fuelVolume = fuelVolume
    this.compatibility = compatibility
    this.spaceShipType = spaceShipType
  }

  abstract enoughFuel(pla: Planet): boolean
  abstract canCarry(weight: number): boolean
  abstract compatiblePlanet(planet: string): boolean
}
// consertar os métodos enoughFuel e canCarry nas subclasses.
export class cargoShip extends SpaceShip {
  constructor() {
    super(
      getRandomInt(1000, 1500),
      getRandomInt(200, 250),
      getRandomInt(30, 123),
      getRandomInt(20000, 60000),
      ['RockyPlanet', 'ColdPlanet'],
      'cargoShip'
    )
  }
  enoughFuel(pla: Planet): boolean {
    return this.fuelVolume > pla.distance / this.autonomy
  }
  canCarry(weight: number): boolean {
    return this.capacity > weight
  }
  compatiblePlanet(planet: string): boolean {
    for (const star of this.compatibility) {
      if (star == planet) {
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
      getRandomInt(6000, 23000),
      getRandomInt(20, 100),
      getRandomInt(2500, 3000),
      ['RockyPlanet', 'GassyPlanet', 'ColdPlanet', 'MagnetiPlanet'],
      'ScoutShip'
    )
  }
  enoughFuel(pla: Planet): boolean {
    return this.fuelVolume > pla.distance / this.autonomy
  }
  canCarry(weight: number): boolean {
    return this.capacity > weight
  }
  compatiblePlanet(planet: string): boolean {
    for (const star of this.compatibility) {
      if (star == planet) {
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
      getRandomInt(300, 900),
      getRandomInt(45, 189),
      getRandomInt(40000, 50000),
      ['RockyPlanet', 'ColdPlanet'],
      'FastTransport'
    )
  }
  enoughFuel(pla: Planet): boolean {
    return this.fuelVolume > pla.distance / this.autonomy
  }
  canCarry(weight: number): boolean {
    return this.capacity > weight
  }
  compatiblePlanet(planet: string): boolean {
    for (const star of this.compatibility) {
      if (star == planet) {
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
      getRandomInt(67, 80),
      getRandomInt(45008, 50005),
      ['RockyPlanet', 'CorrosivePlanet', 'ColdPlanet'],
      'FastTransport'
    )
  }

  enoughFuel(pla: Planet): boolean {
    if (this.fuelVolume > pla.distance / this.autonomy) {
      return true
    }
    return false
  }
  canCarry(weight: number): boolean {
    return this.capacity > weight
  }
  compatiblePlanet(planet: string): boolean {
    for (const star of this.compatibility) {
      if (star == planet) {
        return true
      }
    }
    return false
  }
}
