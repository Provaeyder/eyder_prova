export function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
export function getRandomFloat(min: number, max: number): number {
  const random = Math.random() * (max - min) + min
  return parseFloat(random.toFixed(2))
}
export function randomItem<T>(lista: T[]): T  {
  
  const indiceAleatorio = Math.floor(Math.random() * lista.length)
  return lista[indiceAleatorio]
}
export function randomArray<T>(lista: T[], num: number): T[] {
  const randomA = []
  for (let x = 0; x < num; x++) {
    const indiceAleatorio = Math.floor(Math.random() * lista.length)
    randomA.push(lista[indiceAleatorio])
  }
  return randomA
}
