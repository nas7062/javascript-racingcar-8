import { Console } from "@woowacourse/mission-utils";
import App from "../src/App.js";
import { CAR_VALIDATE, COUNT_VALIDATE } from "../src/constant/messages.js";
const mockQuestions = (inputs) => {
  Console.readLineAsync = jest.fn();
  Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

afterEach(() => {
  jest.clearAllMocks();
  jest.restoreAllMocks();
});

describe("자동차 입력 및 유효성검사", () => {
  test("쉼표로 구분된 여러 자동차 이름을 정상적으로 입력받는다.", async () => {
    mockQuestions(["pobi,woni,jun", "1"]);
    const app = new App();
    await expect(app.run()).resolves.toBeUndefined();
  });

  test("자동차 이름 입력 시 쉼표 앞뒤의 공백을 제거한다.", async () => {
    mockQuestions(["  pobi, woni , jun", "1"]);
    const app = new App();
    await expect(app.run()).resolves.toBeUndefined();
  });

  test("자동차 이름이 6자 이상이면 에러를 발생시킨다.", async () => {
    mockQuestions(["abcdef,zz"]);
    const app = new App();
    await expect(app.run()).rejects.toThrow(CAR_VALIDATE.NAME_EXCEED);
  });

  test("자동차 이름이 중복되면 에러를 발생시킨다.", async () => {
    mockQuestions(["pobi,pobi"]);
    const app = new App();
    await expect(app.run()).rejects.toThrow(CAR_VALIDATE.NAME_DUPLICATE);
  });

  test.each(["pobi,", ",pobi", "pobi,,woni", "", " "])(
    "자동차 이름이 비어 있으면 에러를 발생시킨다.",
    async (input) => {
      mockQuestions([input]);
      const app = new App();
      await expect(app.run()).rejects.toThrow(CAR_VALIDATE.NAME_ZERO);
    }
  );
});

describe("시도 횟수 입력 및 검증", () => {
  test("양의 정수를 정상적으로 입력받는다.", async () => {
    mockQuestions(["pobi,woni", "1"]);
    const app = new App();
    await expect(app.run()).resolves.toBeUndefined();
  });

  test("시도 횟수 입력 시 앞뒤 공백을 제거한다.", async () => {
    mockQuestions(["pobi,woni", "  5  "]);
    const app = new App();
    await expect(app.run()).resolves.toBeUndefined();
  });

  test("시도 횟수가 숫자가 아니면 에러를 발생시킨다.", async () => {
    mockQuestions(["pobi,woni", "a1"]);
    const app = new App();
    await expect(app.run()).rejects.toThrow(COUNT_VALIDATE.NAN_NUMBER);
  });

  test("시도 횟수가 정수가 아니면 에러를 발생시킨다.", async () => {
    mockQuestions(["pobi,woni", "5.5"]);
    const app = new App();
    await expect(app.run()).rejects.toThrow(COUNT_VALIDATE.NOT_INTEGER);
  });

  test.each(["0", "-5"])(
    '시도 횟수가 1 미만이면 에러를 발생시킨다.: "%s"',
    async (round) => {
      mockQuestions(["pobi,woni", round]);
      const app = new App();
      await expect(app.run()).rejects.toThrow(COUNT_VALIDATE.NOT_ZERO);
    }
  );
});
