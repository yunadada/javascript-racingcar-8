import { MissionUtils } from "@woowacourse/mission-utils";
import determineMove from "./determineMove.js";

function runRace(cars) {
  for (const car of cars) {
    const step = determineMove();
    car.move(step);
    printRoundResult(car);
  }
}

function printRoundResult(car) {
  const distance = "-".repeat(car.position);
  MissionUtils.Console.print(`${car.name} : ${distance}`);
}

export default runRace;
