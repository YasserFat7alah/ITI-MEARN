// 7- Make Demo apply Interface Seg principle.
// interface Machine {
//   print(): void;
//   scan(): void;
//   fax(): void;
// }

/* --- --- --- Interface Seg principle --- --- --- */

// Interfaces --- --- ---
interface Printer {
  print(): void;
}
interface Scanner {
  scan(): void;
}
interface Fax {
  fax(): void;
}

// Classes --- --- ---
class BasicPrinter implements Printer {
  print() {
    console.log("BasicPrinter printer is printing ...");
  }
}

class SmartPrinter implements Printer, Scanner {
  print() {
    console.log("SmartPrinter is printing aa document...");
  }

  scan() {
    console.log("SmartPrinter is scanning a document...");
  }
}

class FaxPrinter implements Printer, Scanner, Fax {
  print() {
    console.log("FaxPrinter is printing aa document...");
  }

  scan() {
    console.log("FaxPrinter is scanning a document...");
  }

  fax() {
    console.log("FaxPrinter is sending a fax...");
  }
}

//test
const basicPrinter = new BasicPrinter();
basicPrinter.print();
console.log("--- --- --- --- ---\n");

const smartPrinter = new SmartPrinter();
smartPrinter.print();
smartPrinter.scan();
console.log("--- --- --- --- ---\n");

const faxPrinter = new FaxPrinter();
faxPrinter.print();
faxPrinter.scan();
faxPrinter.fax();
console.log("--- --- --- --- ---\n");
