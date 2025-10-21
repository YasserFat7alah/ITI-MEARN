class DashboadMembers {
    // private , public , protected
    // #name
    constructor(name, age, role) {
       this.name = name;
        this.age = age;
        this.role = role;
    }
    // getRole(){}
}

class Admin extends DashboadMembers{
    constructor(){
        super()
    }
    getRole(){
        return "Admin";
    }
}
class SubAdmin extends DashboadMembers{
    getRole(){
        return "SubAdmin";
    }
}
