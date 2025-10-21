// 1- You have asked to develop an application for a company X.
// The company has only one chief executive officer (CEO).
//  The application store been some information a bout the CEO like: name, age and address.
//  You need to find a clean and concise implementation of the CEO class in the application.

/* --- --- --- --- Signleton Pattern --- --- --- --- */
class CEO {
  constructor(_name, _age, _address) {
    if (CEO.instance) return CEO.instance;
    this.name = _name;
    this.age = _age;
    this.address = _address;
    CEO.instance = this;
  }
}

const ceo1 = new CEO("Yasser", 25, "Mansoura");
const ceo2 = new CEO("Ahmed", 22, "Tanta");

console.log(ceo1 == ceo2); // expected "true"
console.log(ceo2.name); // expected "Yasser"
