import { typePackage } from '../types/type'
import { SpaceShip } from './spaceship'
import { getRandomFloat, getRandomInt } from '../helper/random'
export abstract class Package {
  public readonly size: number
  public readonly weight: number
  public readonly type: typePackage
  protected limitation: String[]
  public packageName: string
  constructor(size: number, weight: number, type: typePackage, limitation: string[], packageName: string) {
    this.size = size
    this.weight = weight
    this.type = type
    this.limitation = limitation
    this.packageName = packageName
  }
  abstract inapropieteSpaceShip(spaceship: SpaceShip): boolean
}
export class ArmoredCapsules extends Package {
  constructor() {
    super(getRandomFloat(1, 2), getRandomInt(45, 250), typePackage.capsule, [], 'ArmoredCapsules')
  }
  inapropieteSpaceShip(spaceship: SpaceShip): boolean {
    for (const ship of this.limitation) {
      if (ship == spaceship.spaceShipType) {
        console.log(`${spaceship.spaceShipType} is not accept by ArmoredCapsules`)
        return false
      }
    }
    return true
  }
}
export class BiologicalSamples extends Package {
  constructor() {
    super(getRandomFloat(1, 2), getRandomInt(30, 60), typePackage.supply, ['ScoutShip','FastTransport'], 'BiologicalSamples')
  }
  inapropieteSpaceShip(spaceship: SpaceShip): boolean {
    for (const ship of this.limitation) {
      if (ship == spaceship.spaceShipType) {
        console.log(`${spaceship.spaceShipType} is not accept by BiologicalSamples`)
        return false
      }
    }
    return true
  }
}
export class CommunicationModules extends Package {
  constructor() {
    super(getRandomFloat(1, 2), getRandomInt(30, 60), typePackage.eletronic, ['FastTransport','cargoShip'], 'CommunicationModules')
  }
  inapropieteSpaceShip(spaceship: SpaceShip): boolean {
    for (const ship of this.limitation) {
      if (ship == spaceship.spaceShipType) {
        console.log(`${spaceship.spaceShipType} is not accept by CommunicationModules`)
        return false
      }
    }
    return true
  }
}
export class SupplyPackages extends Package {
  constructor() {
    super(getRandomFloat(1, 2), getRandomInt(30, 60), typePackage.supply, ['cargoShip'], 'SupplyPackages')
  }
  inapropieteSpaceShip(spaceship: SpaceShip): boolean {
    for (const ship of this.limitation) {
      if (ship == spaceship.spaceShipType) {
        console.log(`${spaceship.spaceShipType} is not accept by SupplyPackages`)
        return false
      }
    }
    return true
  }
}
export class MiningTools extends Package {
  constructor() {
    super(getRandomFloat(1, 2), getRandomInt(30, 60), typePackage.equipament, ['ThermalShieldShip'], 'MiningTools')
  }
  inapropieteSpaceShip(spaceship: SpaceShip): boolean {
    for (const ship of this.limitation) {
      if (ship == spaceship.spaceShipType) {
        console.log(`${spaceship.spaceShipType} is not accept by MiningTools`)
        return false
      }
    }
    return true
  }
}
export class lazerGun extends Package {
  constructor() {
    super(getRandomFloat(1, 2), getRandomInt(30, 50), typePackage.weapon, ['ThermalShieldShip'], 'LazerGun')
  }
  inapropieteSpaceShip(spaceship: SpaceShip): boolean {
    for (const ship of this.limitation) {
      if (ship == spaceship.spaceShipType) {
        console.log(`${spaceship.spaceShipType} is not accept by lazerGun`)
        return false
      }
    }
    return true
  }
}
