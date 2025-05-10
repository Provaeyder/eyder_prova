export abstract class spaceShip{
    capacity: any;
    fuel_expense: number; // se quise mudar esses atributos pode
    speed: number; // isso é realmente necessário
    autonomia: any // what is this?
    compatibility: any // come up anything
    constructor(capacity: any, fuel_expense: number, speed: number, autonomia: any, compatibility: any){
        this.capacity = capacity;
        this.fuel_expense = fuel_expense;
        this.speed = speed;
        this.autonomia = autonomia;
        this.compatibility = compatibility;
    }
}