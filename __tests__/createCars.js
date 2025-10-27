import createCars from "../src/createCars";
import Car from "../src/model/Car";

test("자동차 이름 배열을 받아 각 이름에 해당하는 Car 객체를 생성해 배열로 반환한다", () => {
  const parsedNames = ["pobi", "woni", "jun"];
  const cars = createCars(parsedNames);

  expect(Array.isArray(cars)).toBe(true);
  expect(cars).toHaveLength(3);
  for (const car of cars) {
    expect(car).toBeInstanceOf(Car);
  }
  expect(cars.map((car) => car.name)).toEqual(parsedNames);
  expect(cars.every((car) => car.position === 0)).toBe(true);
});
