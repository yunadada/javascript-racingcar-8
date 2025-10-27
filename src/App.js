import { MissionUtils } from "@woowacourse/mission-utils";
import validateInput from "./validateInput.js";
import createCars from "./createCars.js";
import runRace from "./runRace.js";
import findWinners from "./findWinners.js";

class App {
  async run() {
    try {
      const carNames = await MissionUtils.Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
      );
      const attemptCount = await MissionUtils.Console.readLineAsync(
        "시도할 횟수는 몇 회인가요?\n"
      );

      const parsedNames = validateInput(carNames, attemptCount);
      const cars = createCars(parsedNames);

      MissionUtils.Console.print("\n실행 결과");
      for (let i = 0; i < attemptCount; i++) {
        runRace(cars);
        MissionUtils.Console.print("");
      }

      const winners = findWinners(cars);
      MissionUtils.Console.print(`최종 우승자 : ${winners}`);
    } catch (error) {
      throw error;
    }
  }
}

export default App;
