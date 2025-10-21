class Employee{
    constructor(name,birthdate,salary){
        this.name=name;
        this.birthdate=birthdate;
        this.salary=salary;
    }
}

class HR extends Employee{
    collectCVs(){};
    reviewCV(){};
    makeInterview(){};

}
class Developer extends Employee{
    frontendTasks(){}
    backendTasks(){}
    process(){}
}
class Accountant{
    
}