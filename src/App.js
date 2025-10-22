import { CarNameInput } from "./CarNameInput.js";

class App {
  async run() {
    const carList = await CarNameInput();
    console.log(carList);
  }
}

export default App;
