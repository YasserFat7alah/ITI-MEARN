// 2- You have been hired to develop an application for a car shop.
// The owner of the car shop wants an easy to navigate interface with the ability to document all the types of vehicles that he fixes in his shop.
// On a daily basis, through his and his employers hands pass around dozen different types of vehicles.
// You need to find a clean and concise way to insert all those types of cars into your database.

/* --- --- --- --- Factory Pattern --- --- --- --- */
class Car {
  constructor(_type, _brand) {
    this.type = _type;
    this.brand = _brand;
  }
}

class CarFactory {
  addCar(_type, _brand) {
    return new Car(_type, _brand);
  }
}

const factory = new CarFactory();
const car1 = factory.addCar("Sedan", "Toyota");
const car2 = factory.addCar("SUV", "BMW");

console.log(car1);
console.log(car2);
