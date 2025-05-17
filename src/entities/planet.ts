import { AtmosphereType } from '../atmosphere'
import { typePackage } from '../type'
import { getRandomInt } from '../helper/random'

export abstract class Planet {
  public readonly distance: number
  public readonly atmosphere: AtmosphereType
  protected restrictions: typePackage[]
  public typePlanet: string
  constructor(distance: number, atmosphere: AtmosphereType, restrictions: typePackage[], typePlanet: string) {
    this.distance = distance
    this.atmosphere = atmosphere
    this.restrictions = restrictions
    this.typePlanet = typePlanet
  }
  abstract packageAccept(cargo: typePackage): boolean
}

export class RockyPlanet extends Planet {
  constructor() {
    // o type pode dar bode
    super(getRandomInt(2000, 10000), AtmosphereType.thin, [typePackage.capsule], 'RockyPlanet')
  }
  packageAccept(cargo: typePackage): boolean {
    for (const delivery of this.restrictions) {
      if (delivery == cargo) {
        return false
      }
    }
    return true
  }
}
export class GassyPlanet extends Planet {
  constructor() {
    super(getRandomInt(15000, 200000), AtmosphereType.dense, [typePackage.equipament], 'GassyPlanet')
  }
  packageAccept(cargo: typePackage): boolean {
    for (const delivery of this.restrictions) {
      console.log(delivery)
      if (delivery == cargo) {
        return false
      }
    }
    return true
  }
}
export class ColdPlanet extends Planet {
  constructor() {
    super(getRandomInt(59000, 200000), AtmosphereType.trace, [typePackage.supply], 'ColdPlanet')
  }
  packageAccept(cargo: typePackage): boolean {
    for (const delivery of this.restrictions) {
      if (delivery == cargo) {
        return false
      }
    }
    return true
  }
}
export class CorrosivePlanet extends Planet {
  constructor() {
    super(
      getRandomInt(100000, 300800),
      AtmosphereType.corrosive,
      [typePackage.equipament, typePackage.capsule],
      'CorrosivePlanet'
    )
  }
  packageAccept(cargo: typePackage): boolean {
    for (const delivery of this.restrictions) {
      if (delivery == cargo) {
        return false
      }
    }
    return true
  }
}
export class MagnetiPlanet extends Planet {
  constructor() {
    super(getRandomInt(220500, 340000), AtmosphereType.magneticIonized, [typePackage.equipament], 'MagnetiPlanet')
  }
  packageAccept(cargo: typePackage): boolean {
    for (const delivery of this.restrictions) {
      if (delivery == cargo) {
        return false
      }
    }
    return true
  }
}
