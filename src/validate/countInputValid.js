import { COUNT_VALIDATE } from "../constant/messages.js";

export const countInputValid = (count) => {
  const numCount = Number(count);
  if (Number.isNaN(numCount)) {
    throw new Error(COUNT_VALIDATE.NAN_NUMBER);
  }
  if (numCount < 1) {
    throw new Error(COUNT_VALIDATE.NOT_ZERO);
  }
  if (!Number.isInteger(numCount)) {
    throw new Error(COUNT_VALIDATE.NOT_INTEGER);
  }
  return numCount;
};
