import { carNameInput } from "./carNameInput.js";
import { countInput } from "./countInput.js";
import { Console } from "@woowacourse/mission-utils";
import { raceGameResult } from "./raceGameResult.js";
class App {
  async run() {
    try {
      const carList = await carNameInput();
      const count = await countInput();
      const result = raceGameResult(carList, count);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }
}

export default App;
