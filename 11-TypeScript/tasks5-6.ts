// 5-	Create class Employee implement IEmployee using this object as implementation
// {
//   "id": 1,
//   "name": "Leanne Graham",
//   "username": "Bret",
//   "email": "Sincere@april.biz",
//   "address": {
//     "street": "Kulas Light",
//     "suite": "Apt. 556",
//     "city": "Gwenborough",
//     "zipcode": "92998-3874",
//     "geo": {
//       "lat": "-37.3159",
//       "lng": "81.1496"
//     }
//   }
// }

interface IGeo {
  lat: string;
  lng: string;
}

interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeo;
}

interface IEmployee {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
}

class Employee implements IEmployee {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;

  constructor(data: IEmployee) {
    this.id = data.id;
    this.name = data.name;
    this.username = data.username;
    this.email = data.email;
    this.address = data.address;
  }
}

const empData: IEmployee = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: { lat: "-37.3159", lng: "81.1496" },
  },
};

const emp = new Employee(empData);
console.log("--- --- TASK 05 --- ---");
console.log(emp);
console.log("--- --- --- --- --- ---");

// 6- Create class manager inherit from employee class , Create a function to view employee address
class Manager extends Employee {
  viewAddress(): void {
    console.log(`
      ${this.name}'s Address:
      ${this.address.street}, ${this.address.city}
      Zip: ${this.address.zipcode}
    `);
  }
}

const mgr1 = new Manager(empData);
console.log("--- --- TASK 06 --- ---");
mgr1.viewAddress();
console.log("--- --- --- --- --- ---");
