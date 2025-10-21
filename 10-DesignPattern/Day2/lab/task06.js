// 6- Make Demo apply Liskov substitution principle.

/* --- --- --- Liskov substitution principle --- --- --- */
// Super Class --- --- ---
class Bird {
  move() {
    console.log("I can Move...");
  }
}

// Sub Classes --- --- ---
class FlyingBird extends Bird {
  move() {
    console.log("I can fly...");
  }
}

class NotFlyingBird extends Bird {
  move() {
    console.log("I can't fly...");
  }
}

class SwimmingBird extends Bird {
  move() {
    console.log("I can swim...");
  }
}

// test
const eagle = new FlyingBird();
const hen = new NotFlyingBird();
const penguin = new SwimmingBird();

eagle.move(); // I can fly...
hen.move(); // I can't fly...
penguin.move(); // I can swim...

const eagleTest = new Bird();
eagleTest.move(); // I can move...
