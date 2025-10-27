import { MissionUtils } from "@woowacourse/mission-utils";
import determineMove from "../src/determineMove";

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();

  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe("determineMove", () => {
  describe.each([
    {
      case: "랜덤값이 4 미만일 경우 0",
      inputs: [0, 1, 2, 3],
      expected: [0, 0, 0, 0],
    },
    {
      case: "랜덤값이 4 이상일 경우 1",
      inputs: [4, 5, 6, 7, 8, 9],
      expected: [1, 1, 1, 1, 1, 1],
    },
  ])("$case을 반환한다", ({ inputs, expected }) => {
    it(`[${inputs}] 입력에 대해 [${expected}]를 반환한다`, () => {
      mockRandoms(inputs);
      const results = inputs.map(() => determineMove());
      expect(results).toEqual(expected);
    });
  });
});
