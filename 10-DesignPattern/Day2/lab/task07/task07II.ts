// 7- Make Demo apply Interface Seg principle.
// interface SmartPhone {
//   call(): void;
//   capture(): void;
//   playMusic(): void;
// }

/* --- --- --- Interface Seg principle --- --- --- */

// Interfaces --- --- ---
interface Phone {
  call(): void;
}
interface Camera {
  capture(): void;
}
interface Player {
  playMusic(): void;
}

// Classes --- --- ---
class Landline implements Phone {
  call() {
    console.log("Landline can make calls");
  }
}

class CellPhone implements Phone, Player {
  call() {
    console.log("CellPhone can make calls");
  }

  playMusic() {
    console.log("CellPhone can play music");
  }
}

class SmartPhone implements Phone, Player, Camera {
  call() {
    console.log("SmartPhone can make calls");
  }

  playMusic() {
    console.log("SmartPhone can play music");
  }

  capture() {
    console.log("SmartPhone can take photos");
  }
}

// test
const landline = new Landline();
landline.call();
console.log("--- --- --- --- ---\n");

const cellPhone = new CellPhone();
cellPhone.call();
cellPhone.playMusic();
console.log("--- --- --- --- ---\n");

const smartPhone = new SmartPhone();
smartPhone.call();
smartPhone.playMusic();
smartPhone.capture();
console.log("--- --- --- --- ---\n");
