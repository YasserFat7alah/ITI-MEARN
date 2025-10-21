class DashboadMembers {
    constructor(name, age, role) {
        this.name = name;
        this.age = age;
        this.role = role;
    }
    getDashboardRole() {
        switch (this.role) {
            case "Admin":
                return `Hello Admin ${this.name}`;
            case "Subadmin":
                return `Hello sub Admin ${this.name}`;
            case "Editor":
                return `Hello Editor ${this.name}`;

        }
    }
}
var member=new DashboadMembers("Ahmed",23,"Admin");
// console.log(member);
console.log(member.getDashboardRole());

