// 1-  Consider that we have A store that sell products and every day the store put new products into the store
//       and the store want to let every people that interested with store that new product is in the store now.

/* --- --- --- Observer Pattern --- --- --- */
class Store {
  constructor() {
    this.interested = [];
  }

  subscribe(_customer) {
    this.interested.push(_customer);
  }

  addProduct(_product) {
    console.log("Added new product:", _product);
    this.interested.forEach((_s) => _s.notify(_product));
  }
}

class Customer {
  constructor(_name) {
    this.name = _name;
  }

  notify(_product) {
    console.log(`${this.name} was notified about: ${_product}`);
  }
}

// Test
const store = new Store();
store.subscribe(new Customer("Yasser"));
store.subscribe(new Customer("Omar"));
store.addProduct("Lenovo Laptop");

// Yasser was notified about: Lenovo Laptop
// Omar was notified about: Lenovo Laptop
