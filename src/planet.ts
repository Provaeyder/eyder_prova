import { AtmosphereType } from "./atmosphere";
import { type } from "./type";
import { getRandomFloat } from "./random";
import { getRandomInt } from "./random";

export class Planet {
  distance: number;
  atmosphere: AtmosphereType;
  restrictions: type[];
  constructor(
    distance: number,
    atmosphere: AtmosphereType,
    restrictions: type[]
  ) {
    this.distance = distance;
    this.atmosphere = atmosphere;
    this.restrictions = restrictions;
  }
}

class RockyPlanet extends Planet {
  constructor() {
    // o type pode dar bode
    super(getRandomInt(20000, 38000), AtmosphereType.thin, [type.capsule]);
  }
}
class GassyPlanet extends Planet {
  constructor() {
    super(getRandomInt(150000, 200000), AtmosphereType.dense, [
      type.equipament,
    ]);
  }
}
class ColdPlanet extends Planet {
  constructor() {
    super(getRandomInt(59000, 100000), AtmosphereType.trace, [type.supply]);
  }
}
class CorrosivePlanet extends Planet {
  constructor() {
    super(getRandomInt(100000, 108000), AtmosphereType.corrosive, [
      type.equipament,
      type.capsule,
    ]);
  }
}
class magnetiPlanet extends Planet {
  constructor() {
    super(getRandomInt(22500, 140000), AtmosphereType.magneticIonized, [
      type.equipament,
    ]);
  }
}
