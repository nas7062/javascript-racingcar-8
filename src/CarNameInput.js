import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "./constant/messages.js";
export const CarNameInput = async () => {
  const carInput = await Console.readLineAsync(MESSAGE.CAR_INPUT);
  const carList = carInput.split(",");
  return carList;
};
