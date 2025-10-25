import { Console } from "@woowacourse/mission-utils";
import { RandomNumbers } from "./RandomNumbers.js";
import Car from "./Car.js";

export const raceGameResult = (cars, count) => {
  Console.print("\n실행 결과");
  for (let i = 0; i < count; i++) {
    cars.forEach((car) => {
      car.MoveForward(RandomNumbers());
      const name = car.getName();
      const pos = car.getPosition();
      Console.print(`${name} : ${"-".repeat(pos)}`);
    });
    Console.print("");
  }
};
