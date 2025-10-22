import { CarNameInput } from "./CarNameInput.js";
import { CountInput } from "./CountInput.js";

class App {
  async run() {
    const carList = await CarNameInput();
    const count = await CountInput();
  }
}

export default App;
