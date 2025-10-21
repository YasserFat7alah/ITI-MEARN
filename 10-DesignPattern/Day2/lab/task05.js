// 5- Make Demo apply adapter pattern

// DEMO: I have some old printers that work in alot of projects and sections already.
//  But, new sections have new system based on the newly released printers.
//  I want to find a way to make my old printers work on my new system

/* --- --- --- Adapter Pattern --- --- --- */

// Old Printer --- --- ---
class PrinterMark00 {
  printOld() {
    console.log("Printing from OLD Printer...");
  }
}

// New Printer --- --- ---
class PrinterMark01 {
  print() {
    console.log("Printing from NEW Printer...");
  }
}

// Adapter --- --- ---
class PrinterAdapter {
  constructor(_printerMark00) {
    this.printerMark00 = _printerMark00;
  }

  print() {
    this.printerMark00.printOld();
  }
}

// test
const oldPrinter = new PrinterMark00();
const newPrinter = new PrinterMark01();

const printerAdapter = new PrinterAdapter(oldPrinter);

newPrinter.print();
printerAdapter.print();
