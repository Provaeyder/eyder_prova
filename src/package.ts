import { type } from "./type";
import { SpaceShip } from "./spaceship";
import { getRandomFloat, getRandomInt } from "./random";
class Package {
  size: number;
  weight: number;
  type: type;
  limitation: SpaceShip[];
  constructor(
    size: number,
    weight: number,
    type: type,
    limitation: SpaceShip[]
  ) {
    this.size = size;
    this.weight = weight;
    this.type = type;
    this.limitation = limitation;
  }
}
//capsulas blindadas, amostras biológicas, módulos de comunicação, pacotes de suprimento, ferramneta de mineração
class ArmoredCapsules extends Package{
    constructor(){
        super(getRandomFloat(1,2), getRandomInt(45,250),type.capsule,[])
    }
}
class BiologicalSamples extends Package{
    constructor(){
        super(getRandomFloat(1,2), getRandomInt(30,60), type.supply, [])
    }
}
class CommunicationModules extends Package{}
class SupplyPackages extends Package{}
class MiningTools extends Package{}
