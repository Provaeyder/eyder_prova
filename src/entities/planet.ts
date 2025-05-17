import { AtmosphereType } from '../atmosphere'
import { typePackage } from '../type'
import { getRandomInt } from '../helper/random'
import { Package } from './package'

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
  abstract packageAccept(Pkg: Package): boolean
}

export class RockyPlanet extends Planet {
  constructor() {
    // o type pode dar bode
    super(getRandomInt(2000, 10000), AtmosphereType.thin, [typePackage.capsule], 'RockyPlanet')
  }
  packageAccept(Pkg: Package): boolean {
    for (const delivery of this.restrictions) {
      if (delivery == Pkg.type) {
        console.log(`failed to deliver "${Pkg.packageName}": cargo not accepted by RockyPlanet.`)
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
  packageAccept(Pkg: Package): boolean {
    for (const delivery of this.restrictions) {
      if (delivery == Pkg.type) {
        console.log(`failed to deliver "${Pkg.packageName}": cargo not accepted by GassyPlanet.`)
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
  packageAccept(Pkg: Package): boolean {
    for (const delivery of this.restrictions) {
      if (delivery == Pkg.type) {
        console.log(`failed to deliver "${Pkg.packageName}": cargo not accepted by ColdPlanet.`)
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
  packageAccept(Pkg: Package): boolean {
    for (const delivery of this.restrictions) {
      if (delivery == Pkg.type) {
        console.log(`failed to deliver "${Pkg.packageName}": cargo not accepted by CorrosivePlanet.`)
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
  packageAccept(Pkg: Package): boolean {
    for (const delivery of this.restrictions) {
      if (delivery == Pkg.type) {
        console.log(`failed to deliver "${Pkg.packageName}": cargo not accepted by MagnetiPlanet.`)
        return false
      }
    }
    return true
  }
}
