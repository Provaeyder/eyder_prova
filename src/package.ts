import { typePackage } from "./type";
import { SpaceShip } from "./spaceship";
import { getRandomFloat, getRandomInt } from "./random";
export abstract class Package {
  size: number;
  weight: number;
  type: typePackage;
  limitation: string[];
  constructor(
    size: number,
    weight: number,
    type: typePackage,
    limitation: string[]
  ) {
    this.size = size;
    this.weight = weight;
    this.type = type;
    this.limitation = limitation;
  }
  abstract inapropieteSpaceShip(SpaceShip: string): boolean
}
//capsulas blindadas, amostras biológicas, módulos de comunicação, pacotes de suprimento, ferramneta de mineração
export class ArmoredCapsules extends Package{
    constructor(){
        super(getRandomFloat(1,2), getRandomInt(45,250),typePackage.capsule,[])
    }
    inapropieteSpaceShip(SpaceShip: string): boolean {
      for( const ship of this.limitation){
        if (ship == SpaceShip){
          return false;
        }
      }
      return true;
    }
}
export class BiologicalSamples extends Package{
    constructor(){
        super(getRandomFloat(1,2), getRandomInt(30,60), typePackage.supply, [])
    }
    inapropieteSpaceShip(SpaceShip: string): boolean {
      for( const ship of this.limitation){
        if (ship == SpaceShip){
          return false;
        }
      }
      return true;
    }
}
export class CommunicationModules extends Package{
  constructor(){
    super(getRandomFloat(1,2), getRandomInt(30,60), typePackage.supply, [])
}
inapropieteSpaceShip(SpaceShip: string): boolean {
  for( const ship of this.limitation){
    if (ship == SpaceShip){
      return false;
    }
  }
  return true;
}
}
export class SupplyPackages extends Package{
  constructor(){
        super(getRandomFloat(1,2), getRandomInt(30,60), typePackage.supply, [])
    }
    inapropieteSpaceShip(SpaceShip: string): boolean {
      for( const ship of this.limitation){
        if (ship == SpaceShip){
          return false;
        }
      }
      return true;
    }
}
export class MiningTools extends Package{ constructor(){
  super(getRandomFloat(1,2), getRandomInt(30,60), typePackage.supply, [])
}
inapropieteSpaceShip(SpaceShip: string): boolean {
for( const ship of this.limitation){
  if (ship == SpaceShip){
    return false;
  }
}
return true;
}}
