// 3- In this problem, you need to implement a factory ToyFactory that can create
//     a toy duck and a toy car object using either the ToyDuck or ToyCar function constructor.
// 	    * A ToyDuck object should have the following properties:
//          - color
//          - price
// 	    * A ToyCar object should have the following properties:
// 	        - color
// 	        - price
// 	        - name

/* --- --- --- --- Factory Pattern --- --- --- --- */
class ToyDuck {
  constructor(_color, _price) {
    this.color = _color;
    this.price = _price;
  }
}

class ToyCar {
  constructor(_color, _price, _name) {
    this.color = _color;
    this.price = _price;
    this.name = _name;
  }
}

class ToyFactory {
  createToy(_type, _color, _price, _name) {
    switch (_type) {
      case "duck":
        return new ToyDuck(_color, _price);
      case "car":
        return new ToyCar(_color, _price, _name);
      default:
        console.log("No Toys to create");
        break;
    }
  }
}

const factory = new ToyFactory();
const duck = factory.createToy("duck", "yellow", 120);
const car = factory.createToy("car", "red", 120, "McQueen");

console.log(duck);
console.log(car);
