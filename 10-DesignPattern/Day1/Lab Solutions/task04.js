// 4-  In this challenge, you have to implement a configuration that uses the singleton pattern.
// You are given a class ConfigureVals.
//      Define it as follows:
//         It should have a constructor that defines the properties xpoint, ypoint, and shape.
//         The constructor should initialize xpoint, ypoint, and shape to 0, 0 ,null if the values for these properties are not passed to the constructor.
// Make sure that only a single instance of the class can be made by defining the function getConfiguration.

/* --- --- --- --- Signleton Pattern --- --- --- --- */

class ConfigureVals {
  constructor(_xpoint = 0, _ypoint = 0, _shape = null) {
    if (ConfigureVals.instance) return ConfigureVals.instance;
    this.xpoint = _xpoint;
    this.ypoint = _ypoint;
    this.shape = _shape;
    ConfigureVals.instance = this;
  }
}

cVals1 = new ConfigureVals(120, 25, "Rectangle");
cVals2 = new ConfigureVals(125, 250, "Rectangle");

console.log(cVals1);
console.log(cVals2);

console.log(cVals1 == cVals2);
