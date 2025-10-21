class CompanyManager {
    // member properties
    constructor(manName, manSalary, manCerti) {
        if (!CompanyManager.instance) {
            this.name = manName;
            this.salary = manSalary;
            this.certi = manCerti;
            CompanyManager.instance=this;
        }
        else{
            return CompanyManager.instance;
        }
    }
}

var manager1 = new CompanyManager("Ali", 2000, 3);
console.log(manager1);
var manager2 = new CompanyManager("Ahmed", 2500, 2);
console.log(manager2);

// service => singleton