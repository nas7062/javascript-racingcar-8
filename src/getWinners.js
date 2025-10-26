import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "./constant/messages.js";

export const getWinners = (cars) => {
  const max = Math.max(...cars.map((c) => c.getPosition()));
  const winners = cars
    .filter((c) => c.getPosition() === max)
    .map((c) => c.getName());
  Console.print(`${MESSAGE.WINNERS_PRINT}${winners.join(", ")}`);
};
