import Car from "../src/model/Car";

test("Car 객체 생성 시 name과 position이 올바르게 초기화된다", () => {
  const car = new Car("pobi");
  car.move(1);
  expect(car.position).toBe(1);
});

test("move 호출 시 position이 stepCount만큼 증가한다", () => {
  const car = new Car("pobi");
  car.move(1);
  expect(car.position).toBe(1);

  car.move(2);
  expect(car.position).toBe(3);
});
