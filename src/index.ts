import {
  ArmoredCapsules,
  BiologicalSamples,
  CommunicationModules,
  lazerGun,
  MiningTools,
  SupplyPackages,
} from './entities/package'
import { ColdPlanet, CorrosivePlanet, GassyPlanet, MagnetiPlanet, RockyPlanet } from './entities/planet'
import { randomArray, randomItem } from './helper/random'
import { cargoShip, FastTransport, ScoutShip, ThermalShieldShip } from './entities/spaceship'
import { starMission } from './startmission'
const ships = [new cargoShip(), new ScoutShip(), new FastTransport(), new ThermalShieldShip()]
const planets = [new RockyPlanet(), new GassyPlanet(), new ColdPlanet(), new CorrosivePlanet(), new MagnetiPlanet()]
const packages = [
  new ArmoredCapsules(),
  new BiologicalSamples(),
  new CommunicationModules(),
  new SupplyPackages(),
  new MiningTools(),
  new lazerGun(),
]
const choseShips = randomArray(ships, 3)
const chosePlanets = randomArray(planets, 3)
const chosePackages = randomArray(packages, 5)

for (let x = 0; x < 3; x++) {
  for (let i = 0; i < chosePlanets.length; i++) {
    starMission(choseShips[x], randomItem(chosePlanets), randomItem(chosePackages))
    console.log('')
  }
  console.log('\n')
}


