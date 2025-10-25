import { carNameInput } from "./carNameInput.js";
import { countInput } from "./countInput.js";
import { Console } from "@woowacourse/mission-utils";
import { raceGameResult } from "./raceGameResult.js";
import { getWinners } from "./getWinners.js";
import Car from "./Car.js";
class App {
  constructor() {
    this.cars = [];
  }
  async run() {
    try {
      const carList = await carNameInput();
      const count = await countInput();
      this.cars = carList.map((car) => new Car(car));
      const result = raceGameResult(this.cars, count);
      const winners = getWinners(this.cars);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }
}

export default App;
