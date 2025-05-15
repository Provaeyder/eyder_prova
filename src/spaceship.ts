import { Planet } from "./planet";
import { getRandomFloat, getRandomInt } from "./random";
export abstract class SpaceShip {
  capacity: number;
  fuelVolume: number; 
  speed: number; 
  autonomy: number; 
  compatibility: Planet[]; 
  constructor(
    capacity: number,
    speed: number,
    autonomy: number,
    fuelVolume: number,
    compatibility: Planet[]
  ) {
    this.capacity = capacity;
    this.speed = speed;
    this.autonomy = autonomy;
    this.fuelVolume = fuelVolume;
    this.compatibility = compatibility;
  }
}

class cargoShip extends SpaceShip{
  // colocar os planeta depois
  constructor(){
    super(getRandomInt(1000,1500),getRandomInt(200,250),getRandomFloat(0.5,1),getRandomInt(4500,6000)) 
  }
}
class ScoutShip extends SpaceShip{
  constructor(){
    super(getRandomInt(200,250),getRandomInt(600,700),getRandomFloat(2,3),getRandomInt(2500,3000))
  }
}
class FastTransport extends SpaceShip{
  constructor(){
    super(getRandomInt(300,350),getRandomInt(900,1000),getRandomFloat(0.3,1),getRandomInt(4000,5000))
  }
}
class ThermalShieldShip extends SpaceShip{
  constructor(){
    super(getRandomInt(400,500),getRandomInt(150,200),getRandomFloat(0.4,1.5),getRandomInt(4500,5000))
  }
}