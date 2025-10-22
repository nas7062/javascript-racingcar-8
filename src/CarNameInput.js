import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "./constant/messages.js";
import { CarInputValid } from "./validate/carInputValid.js";
export const carNameInput = async () => {
  const carInput = await Console.readLineAsync(MESSAGE.CAR_INPUT);
  const carList = carInput.split(",");
  const validCarList = CarInputValid(carList);
  return validCarList;
};
