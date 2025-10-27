import Car from "./model/Car";

function createCars(parsedNames) {
  const cars = parsedNames.map((name) => new Car(name));
  return cars;
}

export default createCars;
