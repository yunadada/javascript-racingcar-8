class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move(stepCount) {
    this.position += stepCount;
  }
}

export default Car;
