import { Package } from "./package";
import { Planet } from "./planet";
import { SpaceShip } from "./spaceship";

class Mission{
    private packages: Package[];
    private planets: Planet[]
    private spaceships: SpaceShip[]
    constructor(){
        this.packages = []
        this.planets = []
        this.spaceships = []
    }
    addPackage(delivery: Package){
        this.packages.push(delivery)
    }
    addPlanets(planet: Planet){
        this.planets.push(planet)
    }
    addSpaceShip(spaceship: SpaceShip){
        this.spaceships.push(spaceship)
    }
}