class Car {
  #name;
  #pos;
  constructor(name) {
    this.#name = name;
    this.#pos = 0;
  }

  MoveForward(number) {
    if (number >= 4) {
      this.#pos += 1;
    }
  }

  getName() {
    return this.#name;
  }

  getPosition() {
    return this.#pos;
  }
}

export default Car;
