export const MESSAGE = {
  CAR_INPUT: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
  COUNT_INIPUT: "시도할 횟수는 몇 회인가요?\n",
};

export const CAR_VALIDATE = {
  LENGTH_ZERO: "[ERROR] 자동차가 1대 이상시 경주가 시작될 수 있습니다.",
  NAME_DUPLICATE: "[ERROR] 자동차 이름이 중복 되었습니다.",
  NAME_ZERO: "[ERROR] 공백으로 된 자동차 이름이 있습니다.",
  NAME_EXCEED: "[ERROR] 자동차 이름은 5글자 이하여야 합니다.",
};

export const COUNT_VALIDATE = {
  NAN_NUMBER: "[ERROR] 시도할 횟수는 숫자여야 합니다.",
  NOT_ZERO: "[ERROR] 시도할 횟수는 0보다 커야합니다.",
  NOT_INTEGER: "[ERROR] 시도할 횟수는 정수여야 합니다.",
};
