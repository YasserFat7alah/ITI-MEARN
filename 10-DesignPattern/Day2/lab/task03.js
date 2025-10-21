// 3- Suppose we are building an application for a pizza store and we need to model their pizza classes.
//      Assume they offer four types of pizzas namely [Peppy Paneer, Farmhouse, Margherita, Chicken Fiesta].
//      and we want to add Toppings like [FreshTomato].
//      choose the best design pattern to solve this problem.

/* --- --- --- Decorator Pattern --- --- --- */

// Base Class --- --- ---
class Pizza {
  constructor(_name, _cost) {
    this.name = _name;
    this.cost = _cost;
  }
  getDescription() {
    return `${this.name} Pizza`;
  }
  getCost() {
    return this.cost;
  }
}

// Toppings --- --- ---
class FreshTomatoTopping {
  constructor(_pizza) {
    this.pizza = _pizza;
  }

  getDescription() {
    return this.pizza.getDescription() + " with Fresh Tomato Toppings";
  }
  getCost() {
    return this.pizza.getCost() + 10;
  }
}

// test 
const peppyPaneerPizza = new Pizza ("Peppy Paneer", 50);
console.log(peppyPaneerPizza.getDescription());
console.log('This pizza costs: ' ,peppyPaneerPizza.getCost(), '$');
console.log('-- -- -- -- --');

const ppPizzaWithTomatoToppings = new FreshTomatoTopping(peppyPaneerPizza);
console.log(ppPizzaWithTomatoToppings.getDescription());
console.log("This pizza costs: ", ppPizzaWithTomatoToppings.getCost(), "$");
console.log('-- -- -- -- --');


