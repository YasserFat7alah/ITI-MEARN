// 5-  Make demo builder pattern
// I will make a program to let users setup pc with aspects they like

/* --- --- --- --- Builder Pattern --- --- --- --- */
class Computer {
  constructor(_name) {
    this.name = _name;
    this.parts = {};
  }
}

class ComputerBuilder {
  constructor(_name) {
    this.computer = new Computer(_name);
  }

  addCPU(_cpu) {
    this.computer.parts.cpu = _cpu;
    return this;
  }

  addRAM(_ram) {
    this.computer.parts.ram = _ram;
    return this;
  }

  addStorage(_storage) {
    this.computer.parts.storage = _storage;
    return this;
  }

  build() {
    return this.computer;
  }
}

const mySetup = new ComputerBuilder("YasPC")
  .addCPU("Intel i7")
  .addRAM("16GB")
  .addStorage("1TB SSD")
  .build();

console.log(mySetup); 
