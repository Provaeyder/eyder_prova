import { type } from "./type";
import { spaceShip } from "./spaceship";
class Package{
    size: number;
    weight: number;
    type: type;
    limitation: spaceShip[] = []
    constructor(size: number, weight: number, type: type){
        this.size = size;
        this.weight = weight;
        this.type = type
    }
}

