import validateInput from "../src/validateInput.js";

describe("validateInput", () => {
  it("올바른 자동차 이름과 시도 횟수를 입력하면 파싱된 이름 배열을 반환한다", () => {
    const carNamesString = "pobi,woni,jun";
    const attemptCountString = "5";

    const result = validateInput(carNamesString, attemptCountString);

    expect(result).toEqual(["pobi", "woni", "jun"]);
  });

  describe.each([
    ["pobi:woni", "2", "구분자는 쉼표만 가능합니다."],
    ["pobi,supercar", "3", "자동차 이름은 1자 이상 5자 이하여야 합니다."],
    ["pobi, ", "3", "자동차 이름은 1자 이상 5자 이하여야 합니다."],
    ["pobi,woni", " ", "시도 횟수를 입력해야 합니다."],
    ["pobi,woni", "abc", "시도 횟수는 1 이상의 정수 숫자여야 합니다."],
    ["pobi,woni", "1.5", "시도 횟수는 1 이상의 정수 숫자여야 합니다."],
    ["pobi,woni", "-1", "시도 횟수는 1 이상의 정수 숫자여야 합니다."],
  ])("입력값 (%s, %s)", (carNames, attemptCount, expectedError) => {
    it(`"${expectedError}" 에러를 발생시킨다`, () => {
      expect(() => validateInput(carNames, attemptCount)).toThrow(
        expectedError
      );
    });
  });
});
