import { Planet } from './planet'
import { getRandomFloat, getRandomInt } from '../helper/random'
import { Package } from './package'
export abstract class SpaceShip {
  public readonly spaceShipType: String
  public readonly capacity: number
  public readonly fuelVolume: number
  public readonly speed: number
  public readonly autonomy: number
  public readonly compatibility: string[]
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
  abstract canCarry(Pkg: Package): boolean
  abstract compatiblePlanet(pla: Planet): boolean
}
export class cargoShip extends SpaceShip {
  constructor() {
    super(
      getRandomInt(100, 350),
      getRandomInt(200, 250),
      getRandomInt(30, 123),
      getRandomInt(20000, 60000),
      ['RockyPlanet', 'ColdPlanet'],
      'cargoShip'
    )
  }
  enoughFuel(pla: Planet): boolean {
    if(!(this.fuelVolume > pla.distance / this.autonomy)){
      console.log(`cargoShip has no fuel to reach ${pla.typePlanet}`)
      return false
    }
    return true
  }
  canCarry(Pkg: Package): boolean {
    if(!(this.capacity > Pkg.weight)){
      console.log(`cargoShip failed to deliver: "${Pkg.packageName}" : exceeds capacity."`)
      return false
    }
    return true
  }
  
  compatiblePlanet(Pla: Planet): boolean {
    for (const star of this.compatibility) {
      if (!(star == Pla.typePlanet)) {
        return true
      }
    }
    console.log(`cargoShip is incompatible with ${Pla.typePlanet}`)
    return true
  }
}
export class ScoutShip extends SpaceShip {
  constructor() {
    super(
      getRandomInt(70, 100),
      getRandomInt(6000, 23000),
      getRandomInt(20, 100),
      getRandomInt(2500, 3000),
      ['RockyPlanet', 'GassyPlanet', 'ColdPlanet', 'MagnetiPlanet'],
      'ScoutShip'
    )
  }
  enoughFuel(pla: Planet): boolean {
    if(!(this.fuelVolume > pla.distance / this.autonomy)){
      console.log(`ScoutShip has no fuel to reach ${pla.typePlanet}`)
      return false
    }
    return true
  }
  canCarry(Pkg: Package): boolean {
    if(!(this.capacity > Pkg.weight)){
      console.log(`ScoutShip failed to deliver: "${Pkg.packageName}" : exceeds capacity."`)
      return false
    }
    return true
  }
  compatiblePlanet(Pla: Planet): boolean {
    for (const star of this.compatibility) {
      if ((star == Pla.typePlanet)) {
        return true
      }
    }
    console.log(`ScoutShip is incompatible with ${Pla.typePlanet}`)
    return false
  }
}
export class FastTransport extends SpaceShip {
  constructor() {
    super(
      getRandomInt(90, 250),
      getRandomInt(300, 900),
      getRandomInt(45, 189),
      getRandomInt(40000, 50000),
      ['RockyPlanet', 'ColdPlanet'],
      'FastTransport'
    )
  }
  enoughFuel(pla: Planet): boolean {
    if(!(this.fuelVolume > pla.distance / this.autonomy)){
      console.log(`FastTransport has no fuel to reach ${pla.typePlanet}`)
      return false
    }
    return true
  }
  canCarry(Pkg: Package): boolean {
    if(!(this.capacity > Pkg.weight)){
      console.log(`FastTransport failed to deliver: "${Pkg.packageName}" : exceeds capacity."`)
      return false
    }
    return true
  }
  compatiblePlanet(Pla: Planet): boolean {
    for (const star of this.compatibility) {
      if (!(star == Pla.typePlanet)) {
        return true
      }
    }
    console.log(`FastTransport is incompatible with ${Pla.typePlanet}`)
    return true
  }
}
export class ThermalShieldShip extends SpaceShip {
  constructor() {
    super(
      getRandomInt(10, 50),
      getRandomInt(150, 200),
      getRandomInt(67, 80),
      getRandomInt(45008, 50005),
      ['RockyPlanet', 'CorrosivePlanet', 'ColdPlanet'],
      'ThermalShieldShip'
    )
  }

  enoughFuel(pla: Planet): boolean {
    if(!(this.fuelVolume > pla.distance / this.autonomy)){
      console.log(`ThermalShieldShip has no fuel to reach ${pla.typePlanet}`)
      return false
    }
    return true
  }
  canCarry(Pkg: Package): boolean {
    if(!(this.capacity > Pkg.weight)){
      console.log(`ThermalShieldShip failed to deliver: "${Pkg.packageName}" : exceeds capacity."`)
      return false
    }
    return true
  }
  compatiblePlanet(Pla: Planet): boolean {
    for (const star of this.compatibility) {
      if (!(star == Pla.typePlanet)) {
        return true
      }
    }
    console.log(`ThermalShieldShip is incompatible with ${Pla.typePlanet}`)
    return false
  }
}
