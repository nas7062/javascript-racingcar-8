import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "./constant/messages.js";

export const countInput = async () => {
  const countInput = await Console.readLineAsync(MESSAGE.COUNT_INIPUT);

  return countInput;
};
