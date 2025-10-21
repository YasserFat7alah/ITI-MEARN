// 7- Make Demo apply Interface Seg principle.
// interface SmartPhone {
//   call(): void;
//   capture(): void;
//   playMusic(): void;
// }
// Classes --- --- ---
var Landline = /** @class */ (function () {
    function Landline() {
    }
    Landline.prototype.call = function () {
        console.log("Landline can make calls");
    };
    return Landline;
}());
var CellPhone = /** @class */ (function () {
    function CellPhone() {
    }
    CellPhone.prototype.call = function () {
        console.log("CellPhone can make calls");
    };
    CellPhone.prototype.playMusic = function () {
        console.log("CellPhone can play music");
    };
    return CellPhone;
}());
var SmartPhone = /** @class */ (function () {
    function SmartPhone() {
    }
    SmartPhone.prototype.call = function () {
        console.log("SmartPhone can make calls");
    };
    SmartPhone.prototype.playMusic = function () {
        console.log("SmartPhone can play music");
    };
    SmartPhone.prototype.capture = function () {
        console.log("SmartPhone can take photos");
    };
    return SmartPhone;
}());
// test
var landline = new Landline();
landline.call();
console.log("--- --- --- --- ---\n");
var cellPhone = new CellPhone();
cellPhone.call();
cellPhone.playMusic();
console.log("--- --- --- --- ---\n");
var smartPhone = new SmartPhone();
smartPhone.call();
smartPhone.playMusic();
smartPhone.capture();
console.log("--- --- --- --- ---\n");
