function validateInput(carNamesString, attemptCountString) {
  // 자동차 이름 및 구분자 검증
  const invalidRegex = /[^a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣, ]/;
  if (invalidRegex.test(carNamesString)) {
    throw new Error("[ERROR] 구분자는 쉼표만 가능합니다.");
  }

  const carNames = carNamesString.split(",").map((name) => name.trim());
  for (const name of carNames) {
    if (name.length === 0 || name.length > 5) {
      throw new Error("[ERROR] 자동차 이름은 1자 이상 5자 이하여야 합니다.");
    }
  }

  // 시도 횟수 검증
  if (attemptCountString.trim() === "") {
    throw new Error("[ERROR] 시도 횟수를 입력해야 합니다.");
  }

  const tryCount = Number(attemptCountString);
  if (!Number.isInteger(tryCount) || tryCount <= 0) {
    throw new Error("[ERROR] 시도 횟수는 1 이상의 정수 숫자여야 합니다.");
  }

  return carNames;
}

export default validateInput;
