import {
  ArmoredCapsules,
  BiologicalSamples,
  CommunicationModules,
  MiningTools,
  Package,
  SupplyPackages,
} from "./package";
import {
  ColdPlanet,
  CorrosivePlanet,
  GassyPlanet,
  MagnetiPlanet,
  Planet,
  RockyPlanet,
} from "./planet";
import { getRandomInt, randomItem } from "./random";
import {
  cargoShip,
  ScoutShip,
  ThermalShieldShip,
  FastTransport,
  SpaceShip,
} from "./spaceship";

class Mission {
  public readonly packages: Package[];
  private planets: Planet[];
  private spaceships: SpaceShip[];
  constructor() {
    this.packages = [
      new ArmoredCapsules(),
      new BiologicalSamples(),
    ];
    this.planets = [
      new RockyPlanet(),
      new GassyPlanet(),
      new ColdPlanet(),
      new CorrosivePlanet(),
      new MagnetiPlanet(),
    ];
    this.spaceships = [
      new cargoShip(),
      new ScoutShip(),
      new FastTransport(),
      new ThermalShieldShip(),
    ];
  }
  // retirar depois:
  printhhh(): void {
    console.log(this.packages[0])
    console.log(this.spaceships[0])
    console.log(this.planets[0])
  }
  ////////////
starMission(ship: SpaceShip, Pla: Planet, Pkg: Package[]){
    // console.log(`${ship.spaceShipType} | Fuel: ${ship.fuelVolume} | Capacity: ${ship.capacity}`)
    console.log(`Mission: ${ship.spaceShipType} -> ${Pla.typePlanet}`)
    if(!ship.enoughFuel(Pla)){
        console.log(`${ship.spaceShipType} has no fuel to reach ${Pla.typePlanet}`)
    }
    else if(!ship.compatiblePlanet(Pla.typePlanet)){
        console.log(`${ship.spaceShipType} is incompatible with ${Pla.typePlanet}`)
    }
    
    for(const i of Pkg){

    }
    else if(!ship.canCarry())

}

}
