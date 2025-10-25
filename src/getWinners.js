import { Console } from "@woowacourse/mission-utils";

export const getWinners = (cars) => {
  const max = Math.max(...cars.map((c) => c.getPosition()));
  const winners = cars
    .filter((c) => c.getPosition() === max)
    .map((c) => c.getName());
  Console.print(`최종 우승자 : ${winners.join(", ")}`);
};
