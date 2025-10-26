import { Console } from "@woowacourse/mission-utils";
import { RandomNumbers } from "./RandomNumbers.js";
import { MESSAGE } from "./constant/messages.js";

export const raceGameResult = (cars, count) => {
  Console.print(MESSAGE.GATE_START);
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
