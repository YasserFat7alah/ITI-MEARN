class Employee {
    constructor(name, salary) {
        this.EmpName = name;
        this.EmpSalary = salary;
    }
    getInfo() {
        return `Employee ${this.EmpName} , salary ${this.EmpSalary}`;
    }
}
// var emp=new Employee("ali",1000);
// console.log(emp.getInfo());

class ValidateEmployee {
    constructor(emp) {
        this.emp = emp;
    }
    getInfo() {
        if (this.emp.EmpName && this.emp.EmpSalary > 0) {
            return this.emp.getInfo();
        } else {
            return "data of employee not valid";
        }
    }
}
var emp1=new Employee("Ahmed",-200)
var empValidate=new ValidateEmployee(emp1);
console.log(empValidate.getInfo());
