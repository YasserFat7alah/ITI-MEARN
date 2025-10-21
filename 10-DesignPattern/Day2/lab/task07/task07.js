// 7- Make Demo apply Interface Seg principle.
// interface Machine {
//   print(): void;
//   scan(): void;
//   fax(): void;
// }
// Classes --- --- ---
var BasicPrinter = /** @class */ (function () {
    function BasicPrinter() {
    }
    BasicPrinter.prototype.print = function () {
        console.log("BasicPrinter printer is printing ...");
    };
    return BasicPrinter;
}());
var SmartPrinter = /** @class */ (function () {
    function SmartPrinter() {
    }
    SmartPrinter.prototype.print = function () {
        console.log("SmartPrinter is printing aa document...");
    };
    SmartPrinter.prototype.scan = function () {
        console.log("SmartPrinter is scanning a document...");
    };
    return SmartPrinter;
}());
var FaxPrinter = /** @class */ (function () {
    function FaxPrinter() {
    }
    FaxPrinter.prototype.print = function () {
        console.log("FaxPrinter is printing aa document...");
    };
    FaxPrinter.prototype.scan = function () {
        console.log("FaxPrinter is scanning a document...");
    };
    FaxPrinter.prototype.fax = function () {
        console.log("FaxPrinter is sending a fax...");
    };
    return FaxPrinter;
}());
//test
var basicPrinter = new BasicPrinter();
basicPrinter.print();
console.log("--- --- --- --- ---\n");
var smartPrinter = new SmartPrinter();
smartPrinter.print();
smartPrinter.scan();
console.log("--- --- --- --- ---\n");
var faxPrinter = new FaxPrinter();
faxPrinter.print();
faxPrinter.scan();
faxPrinter.fax();
console.log("--- --- --- --- ---\n");
