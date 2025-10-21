// 7-Make demo to apply single Responsibility Principle

/* --- --- --- --- Single Responsibilty Principle --- --- --- --- */
class User {
  constructor(_name, _email) {
    this.name = _name;
    this.email = _email;
  }
}

class UserPrinter {
  print(_user) {
    console.log(`Name: ${_user.name}, Email: ${_user.email}`);
  }
}


const user = new User("Ahmed", "ahmed@example.com");
const printer = new UserPrinter();

printer.print(user);