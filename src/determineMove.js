import { MissionUtils } from "@woowacourse/mission-utils";

function determineMove() {
  const MOVE = 1;
  const STOP = 0;

  const randomValue = MissionUtils.Random.pickNumberInRange(0, 9);

  if (randomValue >= 4) {
    return MOVE;
  } else {
    return STOP;
  }
}

export default determineMove;
