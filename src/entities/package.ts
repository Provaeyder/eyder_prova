import { typePackage } from '../type'
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
  abstract inapropieteSpaceShip(SpaceShip: String): boolean
}
export class ArmoredCapsules extends Package {
  constructor() {
    super(getRandomFloat(1, 2), getRandomInt(45, 250), typePackage.capsule, [], 'ArmoredCapsules')
  }
  inapropieteSpaceShip(SpaceShip: string): boolean {
    for (const ship of this.limitation) {
      if (ship == SpaceShip) {
        return false
      }
    }
    return true
  }
}
export class BiologicalSamples extends Package {
  constructor() {
    super(getRandomFloat(1, 2), getRandomInt(30, 60), typePackage.supply, [], 'BiologicalSamples')
  }
  inapropieteSpaceShip(SpaceShip: String): boolean {
    for (const ship of this.limitation) {
      if (ship == SpaceShip) {
        return false
      }
    }
    return true
  }
}
export class CommunicationModules extends Package {
  constructor() {
    super(getRandomFloat(1, 2), getRandomInt(30, 60), typePackage.eletronic, [], 'CommunicationModules')
  }
  inapropieteSpaceShip(SpaceShip: string): boolean {
    for (const ship of this.limitation) {
      if (ship == SpaceShip) {
        return false
      }
    }
    return true
  }
}
export class SupplyPackages extends Package {
  constructor() {
    super(getRandomFloat(1, 2), getRandomInt(30, 60), typePackage.supply, [], 'SupplyPackages')
  }
  inapropieteSpaceShip(SpaceShip: string): boolean {
    for (const ship of this.limitation) {
      if (ship == SpaceShip) {
        return false
      }
    }
    return true
  }
}
export class MiningTools extends Package {
  constructor() {
    super(getRandomFloat(1, 2), getRandomInt(30, 60), typePackage.equipament, [], 'MiningTools')
  }
  inapropieteSpaceShip(SpaceShip: string): boolean {
    for (const ship of this.limitation) {
      if (ship == SpaceShip) {
        return false
      }
    }
    return true
  }
}
export class lazerGun extends Package {
  constructor() {
    super(getRandomFloat(1, 2), getRandomInt(30, 50), typePackage.weapon, [], 'LazerGun')
  }
  inapropieteSpaceShip(SpaceShip: string): boolean {
    for (const ship of this.limitation) {
      if (ship == SpaceShip) {
        return false
      }
    }
    return true
  }
}
