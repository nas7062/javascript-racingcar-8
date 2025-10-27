import { CAR_VALIDATE } from "../constant/messages.js";

//차 이름 중복 X
//공백 X
// 자동차 1개 이상
// 5글자 이하
export const carInputValid = (carList) => {
  if (carList.length < 1) {
    throw new Error(CAR_VALIDATE.LENGTH_ZERO);
  }
  const set = new Set(carList);

  if (set.size !== carList.length) {
    throw new Error(CAR_VALIDATE.NAME_DUPLICATE);
  }
  const carNameZero = carList.some((car) => car.trim() === "");
  const carNameExceed = carList.some((car) => car.length > 5);

  if (carNameZero) {
    throw new Error(CAR_VALIDATE.NAME_ZERO);
  }
  if (carNameExceed) {
    throw new Error(CAR_VALIDATE.NAME_EXCEED);
  }
  return carList;
};
