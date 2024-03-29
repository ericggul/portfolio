export function getRandom(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomFromArray(array: any) {
  return array[Math.floor(Math.random() * array.length)];
}
