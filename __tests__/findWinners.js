import findWinners from "../src/findWinners.js";

describe("findWinners", () => {
  describe.each([
    {
      title: "가장 멀리 간 자동차를 우승자로 판별한다",
      cars: [
        { name: "pobi", position: 5 },
        { name: "woni", position: 3 },
        { name: "jun", position: 4 },
      ],
      expected: "pobi",
    },
    {
      title: "우승자가 여러 명일 경우 이름을 쉼표로 구분하여 반환한다",
      cars: [
        { name: "pobi", position: 5 },
        { name: "woni", position: 3 },
        { name: "jun", position: 5 },
      ],
      expected: "pobi, jun",
    },
  ])("$title", ({ cars, expected }) => {
    it(`"${expected}"을 반환한다`, () => {
      const winners = findWinners(cars);
      expect(winners).toBe(expected);
    });
  });
});
