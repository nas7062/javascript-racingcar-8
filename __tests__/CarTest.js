import Car from "../src/Car.js";

describe("Car Class 테스트", () => {
  test("자동차가 이름과 초기 위치 0으로 생성된다.", () => {
    const car = new Car("pobi");

    expect(car.getName()).toBe("pobi");
    expect(car.getPosition()).toBe(0);
  });

  test("무작위 값이 4 이상이면 전진한다.", () => {
    const car = new Car("pobi");

    car.MoveForward(4);
    expect(car.getPosition()).toBe(1);

    car.MoveForward(9);
    expect(car.getPosition()).toBe(2);
  });

  test("무작위 값이 3 이하면 정지한다.", () => {
    const car = new Car("pobi");

    car.MoveForward(3);
    expect(car.getPosition()).toBe(0);

    car.MoveForward(0);
    expect(car.getPosition()).toBe(0);
  });

  test("전진과 정지를 반복한다.", () => {
    const car = new Car("pobi");

    car.MoveForward(4); // 전진: 1
    car.MoveForward(3); // 정지: 1
    car.MoveForward(5); // 전진: 2

    expect(car.getPosition()).toBe(2);
  });
});
