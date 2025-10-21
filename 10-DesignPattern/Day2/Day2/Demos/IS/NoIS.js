var Admin = /** @class */ (function () {
    function Admin() {
    }
    Admin.prototype.FullAccess = function () {
        console.log("full access on dasboard");
    };
    Admin.prototype.limitedAccess = function () {
        throw console.error("Admin not limited access");
    };
    return Admin;
}());
var Subadmin = /** @class */ (function () {
    function Subadmin() {
    }
    Subadmin.prototype.FullAccess = function () {
        throw console.error("sub Admin not full access");
    };
    Subadmin.prototype.limitedAccess = function () {
        console.log("subadmin limited access");
    };
    return Subadmin;
}());
var admin = new Admin();
admin.FullAccess();
