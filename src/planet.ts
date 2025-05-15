import { AtmosphereType } from "./atmosphere";
import { typePackage } from "./type";
import { getRandomFloat } from "./random";
import { getRandomInt } from "./random";

export abstract class Planet {
  distance: number;
  atmosphere: AtmosphereType;
  restrictions: typePackage[];
  typePlanet: string
  constructor(
    distance: number,
    atmosphere: AtmosphereType,
    restrictions: typePackage[],
    typePlanet: string
  ) {
    this.distance = distance;
    this.atmosphere = atmosphere;
    this.restrictions = restrictions;
    this.typePlanet = typePlanet;
  }
  abstract packageAccept(cargo: typePackage): boolean;
}

export class RockyPlanet extends Planet {
  constructor() {
    // o type pode dar bode
    super(getRandomInt(20000, 38000), AtmosphereType.thin, [typePackage.capsule],'RockyPlanet');
  }
  packageAccept(cargo: typePackage): boolean {
    for(const delivery of this.restrictions){
      if( delivery == cargo){
        return false;
      }
    }
    return true;
  }
}
export class GassyPlanet extends Planet {
  constructor() {
    super(getRandomInt(150000, 200000), AtmosphereType.dense, [
      typePackage.equipament,
    ],'GassyPlanet');
  }
  packageAccept(cargo: typePackage): boolean {
    for(const delivery of this.restrictions){
      if( delivery == cargo){
        return false;
      }
    }
    return true;
  }
}
export class ColdPlanet extends Planet {
  constructor() {
    super(getRandomInt(59000, 100000), AtmosphereType.trace, [typePackage.supply],'ColdPlanet');
  }
  packageAccept(cargo: typePackage): boolean {
    for(const delivery of this.restrictions){
      if( delivery == cargo){
        return false;
      }
    }
    return true;
  }
}
export class CorrosivePlanet extends Planet {
  constructor() {
    super(getRandomInt(100000, 108000), AtmosphereType.corrosive, [
      typePackage.equipament,
      typePackage.capsule,
    ],'CorrosivePlanet');
  }
  packageAccept(cargo: typePackage): boolean {
    for(const delivery of this.restrictions){
      if( delivery == cargo){
        return false;
      }
    }
    return true;
  }
}
export class MagnetiPlanet extends Planet {
  constructor() {
    super(getRandomInt(22500, 140000), AtmosphereType.magneticIonized, [
      typePackage.equipament,
    ],'MagnetiPlanet');
  }
  packageAccept(cargo: typePackage): boolean {
    for(const delivery of this.restrictions){
      if( delivery == cargo){
        return false;
      }
    }
    return true;
  }
}
