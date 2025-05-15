import { AtmosphereType } from "./atmosphere";
import { type } from "./type";
import { getRandomFloat } from "./random";
import { getRandomInt

 } from "./random";
export class Planet{
    distance: number;
    atmosphere: AtmosphereType
    restrictions: type[] = []
    constructor(distance: number, atmosphere: AtmosphereType){
        this.distance = distance;
        this.atmosphere = atmosphere;
    }
}

class RockyPlanet extends Planet{
    constructor(){
        super(getRandomInt)
    }
}