import { MissionUtils } from "@woowacourse/mission-utils";
import Car from "../src/model/Car.js";
import runRace from "../src/runRace.js";
import determineMove from "../src/determineMove.js";

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

jest.mock("../src/determineMove.js");

test("각 자동차에 대해 determineMove가 호출되고, 이동 결과가 콘솔에 출력된다", () => {
  const logSpy = getLogSpy();

  determineMove
    .mockReturnValueOnce(1)
    .mockReturnValueOnce(0)
    .mockReturnValueOnce(1);

  const cars = [new Car("pobi"), new Car("woni"), new Car("jun")];
  runRace(cars);

  expect(determineMove).toHaveBeenCalledTimes(3);

  expect(cars[0].position).toBe(1);
  expect(cars[1].position).toBe(0);
  expect(cars[2].position).toBe(1);

  expect(logSpy).toHaveBeenCalledWith("pobi : -");
  expect(logSpy).toHaveBeenCalledWith("woni : ");
  expect(logSpy).toHaveBeenCalledWith("jun : -");
});
