var Admin = /** @class */ (function () {
    function Admin() {
    }
    Admin.prototype.fullAcces = function () {
        console.log("Full access");
    };
    return Admin;
}());
var SubAdmin = /** @class */ (function () {
    function SubAdmin() {
    }
    SubAdmin.prototype.limitedAccess = function () {
        console.log("limited access");
    };
    return SubAdmin;
}());
var sub = new SubAdmin();
sub.limitedAccess();
var admin = new Admin();
admin.fullAcces();
