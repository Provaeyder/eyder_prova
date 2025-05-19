import { Package } from '../entities/package'
import { Planet } from '../entities/planet'
import { SpaceShip } from '../entities/spaceship'

export function starMission(ship: SpaceShip, Pla: Planet, Pkg: Package) {
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
