import { Package } from './entities/package'
import { Planet } from './entities/planet'
import { SpaceShip } from './entities/spaceship'

export function starMission(ship: SpaceShip, Pla: Planet, Pkg: Package) {
  // // console.log(`${ship.spaceShipType} | Fuel: ${ship.fuelVolume} | Capacity: ${ship.capacity}`)
  // console.log(`Mission: ${ship.spaceShipType} -> ${Pla.typePlanet}`)
  // if (!ship.enoughFuel(Pla)) {
  //   console.log(`${ship.spaceShipType} has no fuel to reach ${Pla.typePlanet}`)
  //   return
  // } else if (!ship.compatiblePlanet(Pla.typePlanet)) {
  //   console.log(`${ship.spaceShipType} is incompatible with ${Pla.typePlanet}`)
  //   return
  // } else if (!ship.canCarry(Pkg.weight)) {
  //   console.log(`${ship.spaceShipType} failed to deliver: "${Pkg.packageName}" : exceeds capacity."`)
  //   return
  // } else if (!Pla.packageAccept(Pkg.type)) {
  //   console.log(`failed to deliver "${Pkg.packageName}": cargo not accepted by ${Pla.typePlanet}.`)
  //   return
  // } else if (!Pkg.inapropieteSpaceShip(ship.spaceShipType)) {
  //   console.log(`${ship.spaceShipType} is not accept by ${Pkg.packageName}  `)
  //   return
  // }

  // console.log(`${ship.spaceShipType} traveled to ${Pla.typePlanet} (${Pla.distance} km) | ( Atmosphere: ${Pla.atmosphere})`)

  // console.log(`${ship.spaceShipType} delivered ${Pkg.packageName} to ${Pla.typePlanet} `)
  // console.log(
  //   `fuel reaming: ${ship.fuelVolume - Math.floor(Pla.distance / ship.autonomy)} | Capacity remaining: ${
  //     ship.capacity - Pkg.weight
  //   }`
  // )
  if (
    (ship.compatiblePlanet(Pla) &&
    Pla.packageAccept(Pkg) &&
    Pkg.inapropieteSpaceShip(ship) &&
    ship.canCarry(Pkg) &&
    ship.enoughFuel(Pla))
  ) {
    console.log(
      `${ship.spaceShipType} traveled to ${Pla.typePlanet} (${Pla.distance} km) | ( Atmosphere: ${Pla.atmosphere})`
    )
    console.log(`${ship.spaceShipType} delivered ${Pkg.packageName} to ${Pla.typePlanet} `)
    console.log(
      `fuel reaming: ${ship.fuelVolume - Math.floor(Pla.distance / ship.autonomy)} | Capacity remaining: ${
        ship.capacity - Pkg.weight
      }`
    )
  }
}
