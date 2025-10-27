import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "./constant/messages.js";
import { countInputValid } from "./validate/countInputValid.js";

export const countInput = async () => {
  const countInput = await Console.readLineAsync(MESSAGE.COUNT_INPUT);
  const validCount = countInputValid(countInput);
  return validCount;
};
